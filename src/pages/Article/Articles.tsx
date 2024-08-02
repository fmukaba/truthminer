import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Timestamp } from "@firebase/firestore";
import { PageContent } from "../../components";
import { FlexBox, Layout } from "../../components/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import { FirestoreContext } from "../../context/Context";
import { Article } from "../../interfaces";
import {
  Container,
  Description,
  Title,
  Footer,
  StyledRowDivider,
} from "./styles";

export const timestampConverter = (date_published: Timestamp) => {
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

  return `${month} ${date.getDay()}, ${date.getFullYear()} `;
};

const ArticleItem: FC<Article> = ({
  id,
  title,
  description,
  date_published,
  isFavorite,
}) => {
  const navigate = useNavigate();
  const goToArticle = (id: string) => {
    navigate(`/nuggets/${id}`);
  };

  return (
    <Container onClick={() => goToArticle(id)}>
      <Title>
        {isFavorite && <FaStar color="gold" size={24} />}
        {title}
      </Title>
      <Description>{description}</Description>
      <Footer>{timestampConverter(date_published)}</Footer>
      <StyledRowDivider />
    </Container>
  );
};

const ArticleList = ({ articles }: { articles: Article[] }) => {
  
  return (
    <FlexBox
      flexDirection="column"
      align-items="flex-start"
      mt={30}
      mb={70}
      gap={30}
    >
      {articles.map((article) => {
        return (
          <ArticleItem
            key={article.id}
            id={article.id}
            title={article.title}
            date_published={article.date_published}
            description={article.description}
            content={article.content}
            isFavorite={article.isFavorite}
          />
        );
      })}
    </FlexBox>
  );
};

const Articles: FC = () => {
  const data = useContext(FirestoreContext);

  return (
    <Layout>
      <PageHeader
        title="Nuggets"
        description="Short pieces of writing to exhort prospectors on their journey."
      />
      <PageContent>
        <FlexBox>
          <ArticleList articles={data.articles} />
          {/* <StyledColumnDivider />
          <MustRead>
            <h1> Must Read </h1>
          </MustRead> */}
        </FlexBox>
      </PageContent>
    </Layout>
  );
};

export default Articles;
