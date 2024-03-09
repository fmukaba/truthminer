import { FC, useContext } from "react";
import { Layout } from "../../components/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import { FirestoreContext } from "../../context/Context";
import { PageContent } from "../../components";
import styled from "styled-components";
import { AiOutlineFilePdf } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";

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
    { id: 1, title: "Sample PDF 1" },
    { id: 22, title: "Sample PDF 2" },
    { id: 214, title: "Sample PDF 3" },
    { id: 2312, title: "Sample PDF 2zc" },
    { id: 2132, title: "Sample PDF 2das" },
    { id: 2132, title: "Sample PDF 2wer" },
    { id: 21332, title: "Sample PDF 2wre" },
    { id: 232, title: "Sample PDF rwe2" },
    { id: 213232, title: "Sample PDF 2rwe" },
    { id: 254, title: "Sample PDF 2rwe" },
    { id: 287, title: "Sample PDF 2ewr" },
    { id: 20, title: "Sample PDF 2jgkh" },
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
          {pdfs.map((pdf, index) => (
            <>
              <PdfItem key={pdf.id}>
                <PdfIcon />
                <TitleContainer>
                  <Title>{pdf.title}</Title>
                  <DownloadIcon />
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
