import prospectorImg from "../../assets/prospector2.jpg";
import { FC } from "react";
import { Layout } from "../../components/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import { PageContent } from "../../components";
import { ImageWrapper, MainContent, TextWrapper } from "./styles";

const About: FC = () => {
  return (
    <Layout>
      <PageHeader
        title="Prospector"
        description="A person who searches for valuable substances from the Word of God"
      />
      <PageContent mt={20}>
        <MainContent>
          <ImageWrapper>
            <img src={prospectorImg} alt="Prospector" />
          </ImageWrapper>
          <TextWrapper>
            About me. I am a software engineer About me. I am a software
            engineer About me. I am a software engineer About me. I am a
            software engineer About me. I am a software engineer About me. I am
            a software engineer About me. I am a software engineer About me. I
            am a software engineer About me. I am a software engineer About me.
            I am a software engineer About me. I am a software engineer About
            me. I am a software engineer About me. I am a software engineer
            About me. I am a software engineer About me. I am a software
            engineer About me. I am a software engineer About me. I am a
            software engineer
          </TextWrapper>
        </MainContent>
      </PageContent>
    </Layout>
  );
};

export default About;
