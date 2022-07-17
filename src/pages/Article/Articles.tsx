import { FC, useContext } from "react";
import { PageContent } from "../../components";
import { FlexBox, Layout } from "../../components/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import { FirestoreContext } from "../../context";
import { Article } from "../../interfaces";
import { Container, Description, Title, Footer } from "./styles";

const ArticleItem: FC<Article> = ({
  id,
  title,
  description,
  date_published,
}) => {
  const goToArticle = () => {
    // Navigate('article/id')
    // go to article page knowing id
  };
  return (
    <FlexBox flexDirection="row" align-items="flex-start" onClick={goToArticle}>
      <Container>
        <Title> {title} </Title>
        <Description>{description}</Description>
        <Footer>{`${date_published.toDate()}`}</Footer>
      </Container>
    </FlexBox>
  );
};
export type ArticleListProps = {
  articles: Article[] | undefined | null;
};

const ArticleList: FC<ArticleListProps> = ({ articles }: ArticleListProps) => {
  if (articles) {
    return (
      <FlexBox flexDirection="row" align-items="flex-start" mt={70}>
        {articles.map((article) => {
          return (
            <ArticleItem
              key={article.id}
              id={article.id}
              title={article.title}
              date_published={article.date_published}
              description={article.description}
              content=""
            />
          );
        })}
      </FlexBox>
    );
  } else {
    return null;
  }
};

const Articles: FC = () => {
  const data = useContext(FirestoreContext);
  console.log(data?.articles);

  return (
    <Layout>
      <PageHeader title="Articles" />
      <PageContent>
        <ArticleList articles={data?.articles} />
      </PageContent>
    </Layout>
  );
};

export default Articles;
