import { FC, useContext } from "react";
import { useParams } from "react-router-dom";
import { FirestoreContext } from "../../context/Context";
import { NotFound } from "../../components";
import { ArticleContainer, TitleContainer, Content } from "./styles";

const ArticlePage: FC = () => {
  const data = useContext(FirestoreContext);
  const { id } = useParams();
  let targetArticle = data.articles.find((element) => element.id === id);
  window.scrollTo(0, 0);

  return targetArticle ? (
    <ArticleContainer>
      <TitleContainer> {targetArticle.title} </TitleContainer>
      <Content dangerouslySetInnerHTML={{ __html: targetArticle.content }}/>
    </ArticleContainer>
  ) : (
    <NotFound />
  );
};

export default ArticlePage;
