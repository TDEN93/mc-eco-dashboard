import React from "react";
import {
  Container,
  Content,
  CookBook,
  CookBookModal,
  IconContainer,
  LeftSide,
  ModalForm,
  TextInput,
  ToolBar,
} from "./HomeElements";
import Modal from "react-modal";

import { CookBookModel, Cookbook } from "../../models/CookBook.model";
import { cookbooksdata } from "../../assets/data/cookbooks";
import CookBookItem from "../../components/CookBookItem";
import TreeViewer from "../../components/TreeViewer";
import { CookBookService } from "../../utils/cookbooks";
import useFetchData from "../../hooks/useFetchData";
import { BsPlusLg } from "react-icons/bs";
import { PiGraphLight } from "react-icons/pi";
import { SplitView } from "../../components/SplitView";
import styles from "./home.module.css";

function Home() {
  const cookBookService = new CookBookService();
  const [cookbooks, setCookbooks] = React.useState<CookBookModel>();
  const [showCookBookModal, setShowCookBookModal] =
    React.useState<boolean>(false);

  const [showGraph, setShowGraph] = React.useState<boolean>(true);
  const [description, setDescription] = React.useState<string>("");
  const [parent, setParent] = React.useState<string | null>(null);

  const { isLoading, data } = useFetchData<any>(
    cookBookService.fetchCookBooks,
    []
  );

  React.useEffect(() => {
    console.log("Home.tsx: React.useEffect() called");
    document.title = "Home | Cookbook";
    async function fetchCookBooks() {
      setCookbooks(cookbooksdata);
    }
    fetchCookBooks();
  }, []);
  return isLoading ? (
    <p>Loading</p>
  ) : (
    <Container>
      <SplitView
        left={
          <>
            <ToolBar>
              <IconContainer>
                <BsPlusLg
                  size={30}
                  color={"#6ead3a"}
                  onClick={() => {
                    setShowCookBookModal(!showCookBookModal);
                  }}
                />
              </IconContainer>
              <IconContainer>
                <PiGraphLight
                  size={30}
                  color={"#6ead3a"}
                  onClick={() => {
                    setShowGraph(!showGraph);
                  }}
                />
              </IconContainer>
            </ToolBar>
            <Content>
              {data?.map((cookbook: Cookbook) => (
                <CookBookItem key={cookbook.id} {...cookbook} />
              ))}
            </Content>
          </>
        }
        right={<>{showGraph ? <TreeViewer /> : null}</>}
      />

      <CookBookModal
        className={styles.modal}
        ariaHideApp={false}
        isOpen={showCookBookModal}
        contentLabel="onRequestClose Example"
        onRequestClose={() => {
          setShowCookBookModal(false);
        }}
        shouldCloseOnOverlayClick={true}
        overlayClassName={styles.overlay}
      >
        <p>Add A CookBook</p>
        <ModalForm
          onSubmit={async () => {
            setShowCookBookModal(false);
            await cookBookService.addCookBook({
              description: description,
              parent: parent || null,
            });
          }}
        >
          <label htmlFor="parent">Parent</label>
          <TextInput
            type="text"
            id="parent"
            required={false}
            onChange={(par) => {
              setParent(par.currentTarget.value);
            }}
          />

          <label htmlFor="Description">Description</label>
          <TextInput
            type="text"
            id="Description"
            required
            onChange={(desc) => {
              setDescription(desc.currentTarget.value);
            }}
          />
          <button type="submit">Submit</button>
        </ModalForm>
      </CookBookModal>
    </Container>
  );
}
export default Home;
