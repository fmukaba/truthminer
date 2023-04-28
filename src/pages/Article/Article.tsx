import { FC, useContext } from "react";
import { useParams } from "react-router-dom";
import { FirestoreContext } from "../../context/Context";
import { NotFound } from "../../components";
import { ArticleContainer, TitleContainer, Content } from "./styles";

const ArticlePage: FC = () => {
  const data = useContext(FirestoreContext);
  const { id } = useParams();
  const targetArticle = data?.articles?.find((element) => element.id === id);

  console.log(id);
  console.log(targetArticle);
  if (!data) {
    return <div> </div>;
  }

  if (!targetArticle) {
    return <NotFound />;
  }

  return (
    <ArticleContainer>
      <TitleContainer> {targetArticle.title} </TitleContainer>
      <Content>{targetArticle.content}</Content>
    </ArticleContainer>
  );
};

export default ArticlePage;
