import React from "react";
import { Container, Content, CookBook } from "./HomeElements";
import { CookBookModel, Cookbook } from "../models/CookBook.model";
import { cookbooksdata } from "../assets/data/cookbooks";
import CookBookItem from "../components/CookBookItem";
import TreeViewer from "../components/TreeViewer/TreeViewer";
function Home() {
  const [cookbooks, setCookbooks] = React.useState<CookBookModel>();

  React.useEffect(() => {
    console.log("Home.tsx: React.useEffect() called");
    document.title = "Home | Cookbook";
    async function fetchCookBooks() {
      setCookbooks(cookbooksdata);
    }
    fetchCookBooks();
  }, []);
  return (
    <Container>
      <Content>
        {cookbooks?.cookbooks.map((cookbook: Cookbook) => (
          <CookBookItem {...cookbook} />
        ))}
      </Content>
      <TreeViewer />
    </Container>
  );
}
export default Home;
