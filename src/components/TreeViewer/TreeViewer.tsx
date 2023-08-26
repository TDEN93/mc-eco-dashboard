import ReactFlow, {
  addEdge,
  ConnectionLineType,
  Panel,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
} from "reactflow";
import dagre from "dagre";

import styles from "./treeviewer.module.css";
import "reactflow/dist/style.css";

import useComponentSize from "../../hooks/useComponentSize";

function TreeViewer() {
  const [ref, size] = useComponentSize();
  console.log("TreeViewer.tsx: width: ", size.width, " height: ", size.height);
  const position = { x: 0, y: 0 };

  const initialNodes = [
    {
      id: "1",
      position,
      data: { label: "1" },
      type: "input",
      draggable: false,
      connectable: false,
    },
    {
      id: "2",
      position,
      data: { label: "2" },
      type: "output",
      draggable: false,
      connectable: false,
    },
    {
      id: "3",
      position,
      data: { label: "3" },
      type: "output",
      draggable: false,
      connectable: false,
    },
  ];

  const initialEdges = [
    {
      id: "e12",
      source: "1",
      target: "2",
      type: "edgeType",
    },
    {
      id: "e13",
      source: "1",
      target: "3",
      type: "edgeType",
    },
  ];

  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  const nodeWidth = 172;
  const nodeHeight = 36;

  const getLayoutedElements = (nodes: any, edges: any, direction = "TB") => {
    const isHorizontal = direction === "LR";
    dagreGraph.setGraph({ rankdir: direction });

    nodes.forEach((node: any) => {
      dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
    });

    edges.forEach((edge: any) => {
      dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    nodes.forEach((node: any) => {
      const nodeWithPosition = dagreGraph.node(node.id);
      node.targetPosition = isHorizontal ? "left" : "top";
      node.sourcePosition = isHorizontal ? "right" : "bottom";

      // We are shifting the dagre node position (anchor=center center) to the top left
      // so it matches the React Flow node anchor point (top left).
      node.position = {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      };

      return node;
    });

    return { nodes, edges };
  };

  const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
    initialNodes,
    initialEdges
  );
  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  return (
    <ReactFlow
      className={styles.container}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      proOptions={{ hideAttribution: true }}
      connectionLineType={ConnectionLineType.SmoothStep}
      fitView
    >
      <Background />
      <Controls />
    </ReactFlow>
  );
}

export default TreeViewer;
