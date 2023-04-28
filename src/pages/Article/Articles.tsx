import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PageContent } from "../../components";
import { FlexBox, Layout } from "../../components/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import { FirestoreContext } from "../../context/Context";
import { Article } from "../../interfaces";
import { Container, Description, Title, Footer } from "./styles";

const ArticleItem: FC<Article> = ({
  id,
  title,
  description,
  date_published,
}) => {
  const navigate = useNavigate();
  const goToArticle = (id: string) => {
    navigate(`/articles/${id}`);
  };
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = date_published.toDate();
  const month = monthNames[date.getMonth()];
  const formattedDate = `${month} ${date.getDay()}, ${date.getFullYear()} `;
  return (
    <FlexBox
      key={id}
      flexDirection="row"
      align-items="flex-start"
      onClick={() => goToArticle(id || 'article-id-hyphenated')}
    >
      <Container>
        <Title> {title} </Title>
        <Description>{description}</Description>
        <Footer>{formattedDate}</Footer>
      </Container>
    </FlexBox>
  );
};
export type ArticleListProps = {
  articles: Article[] | undefined | null;
};

const ArticleList: FC<ArticleListProps> = ({ articles }: ArticleListProps) => {
  if (articles) {
    console.log(articles.length)
    return (
      <FlexBox flexDirection="column" align-items="flex-start" mt={70} mb={70}  gap={70} >
        {articles.map((article) => {
          return (
            <ArticleItem
              key={article.id}
              id={article.id}
              title={article.title}
              date_published={article.date_published}
              description={article.description}
              content={article.content}
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
        <FlexBox>
          <ArticleList articles={data?.articles} />
        </FlexBox>
      </PageContent>
    </Layout>
  );
};

export default Articles;
