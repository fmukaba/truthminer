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
        description="A person who searches for valuable substance from the Word of God"
      />
      <PageContent mt={20}>
        <MainContent>
          <ImageWrapper>
            <img src={prospectorImg} alt="the prospector" />
          </ImageWrapper>
          <TextWrapper>
            Hello there, my name is Francois Mukaba and I am a prospector.
            <br /> <br />
            I love wealth! Not the perishable type, no, no ! The Lord of the
            land has graciously given me access to his huge field and I've been
            on this journey to find precious stones for little bit now.
            <br /> <br />
            I am very incline to share my findings with other prospectors or
            anyone interested or wondering about this path. Everytime I
            discovered some 'good stuffs' in life, the Lord of the land always
            told me: this is not just for you. Make sure you share with others.
            Every good and precious stones comes from the Lord of the Land. And
            He delights in giving it to the children of men. My hope is to share
            what He has given me, in hope to stir you to go find more and even
            more in His field. A great prospector before us once said in his
            letter: "We don't live to ourselves but to him who died and rose
            again" What a delight it is to live for this King and learn from
            him.
            <br /> <br />
            So, grab your tools, and let's go deep (pun-intended)...
          </TextWrapper>
        </MainContent>
      </PageContent>
    </Layout>
  );
};

export default About;
