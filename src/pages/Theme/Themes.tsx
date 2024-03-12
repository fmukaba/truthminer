import { FC, Fragment } from "react";
import { Layout } from "../../components/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import { PageContent } from "../../components";
import styled from "styled-components";
import { AiOutlineFilePdf } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
// Temporarily storing pdfs as assets
import falseTeachersData from "../../assets/False_Teachers_and_Prophets.pdf";
import surrenderData from "../../assets/Surrender.pdf";
import waitingData from "../../assets/Waiting_on_God.pdf";
import sufferingData from "../../assets/Suffering.pdf";
import memorizingData from "../../assets/Bible_Verses.pdf";

const GridContainer = styled.div`
  display: grid;
  grid-gap: 30px 100px;
  grid-template-columns: repeat(2, 45%);
  margin-bottom: 100px;
  margin-top: 50px;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

const PdfItem = styled.div`
  width: 35vw;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
  cursor: pointer;
  align-items: center;
  border: 1px solid #ccc;
  padding: 16px;
  position: relative;

  @media screen and (max-width: 1024px) {
    width: 70vw;
    margin-right: 10px;
  }

  a {
    color: black;
    text-decoration: none;
  }
`;

const PdfIcon = styled(AiOutlineFilePdf)`
  font-size: 32px;
  margin-right: 12px;
`;

const TitleContainer = styled.div`
  flex-grow: 1;
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;
const DownloadIcon = styled(FiDownload)`
  position: absolute;
  bottom: 8px;
  right: 8px;
  font-size: 20px;
  cursor: pointer;
`;

const Themes: FC = () => {
  const pdfs = [
    {
      id: 1,
      title: "False Teachers and Prophets",
      data: falseTeachersData,
    },
    { id: 2, title: "Surrenderring", data: surrenderData },
    { id: 3, title: "Waiting on God", data: waitingData },
    { id: 4, title: "Suffering", data: sufferingData },
    { id: 5, title: "Memorization", data: memorizingData },
  ];

  return (
    <Layout>
      <PageHeader
        title="Gold"
        description="A sample of what the Bible says on different topics, in hope to stir you up to study the Scriptures"
      />
      <PageContent>
        <GridContainer>
          {pdfs.map((pdf) => (
            <Fragment>
              <PdfItem key={pdf.id}>
                <a href={pdf.data} target="_blank" rel="noreferrer">
                  <PdfIcon />
                </a>
                <TitleContainer>
                  <a href={pdf.data} target="_blank" rel="noreferrer">
                    <Title>{pdf.title}</Title>
                  </a>
                  <a href={pdf.data} download>
                    <DownloadIcon size={22} />
                  </a>
                </TitleContainer>
              </PdfItem>
            </Fragment>
          ))}
        </GridContainer>
      </PageContent>
    </Layout>
  );
};

export default Themes;
