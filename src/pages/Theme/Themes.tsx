import { FC, useContext } from "react";
import { Layout } from "../../components/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import { FirestoreContext } from "../../context/Context";
import { PageContent } from "../../components";
import styled from "styled-components";
import { AiOutlineFilePdf } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
// @ts-ignore
import pdfData from "../../assets/False_Teachers_and_Prophets.pdf";

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
      path: "False_Teachers_and_Prophets.pdf",
    },
    { id: 2, title: "Sample PDF 2" },
    { id: 3, title: "Sample PDF 3" },
    { id: 4, title: "Sample PDF 2zc" },
    { id: 5, title: "Sample PDF 2das" },
    { id: 6, title: "Sample PDF 2wer" },
    { id: 7, title: "Sample PDF 2wre" },
  ];

  // const handleDivClick = (title: string) => {
  //   console.log(`Clicked on ${title}`);
  // };

  const data = useContext(FirestoreContext);
  console.log(data.themes);
  return (
    <Layout>
      <PageHeader
        title="Gold"
        description="What the Bible says on different topics"
      />
      <PageContent>
        <GridContainer>
          {pdfs.map((pdf) => (
            <>
              <PdfItem key={pdf.id}>
                <PdfIcon />
                <TitleContainer>
                  <a href={pdfData} target="blank">
                    <Title>{pdf.title}</Title>
                  </a>
                  <a href={pdfData} download>
                    <DownloadIcon />
                  </a>
                </TitleContainer>
              </PdfItem>
            </>
          ))}
        </GridContainer>
      </PageContent>
    </Layout>
  );
};

export default Themes;
