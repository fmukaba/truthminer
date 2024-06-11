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
          
  Greetings! I'm Francois Mukaba, a dedicated prospector on a quest for treasures beyond measure.<br/><br/>
  Driven by a passion for wealth—not of the perishable kind, mind you, but the enduring riches bestowed by the Lord of the land—I've embarked on a journey through His vast fields, seeking precious stones of wisdom, insight, and inspiration.<br/><br/>
  Along the way, I've discovered that these treasures are not meant for hoarding but for sharing generously with fellow prospectors and anyone intrigued by the path I tread. Each time I uncover a gem in life, I'm reminded of the Lord's instruction: "This is not just for you. Make sure you share with others." Indeed, every good and precious stone originates from the benevolent hand of the Lord, who delights in bestowing His gifts upon humanity.<br/><br/>
  My aspiration is simple: to share the bountiful treasures I've unearthed in the hope of igniting a spark within you to explore His fields and discover even greater riches. As a wise prospector once said, "We don't live to ourselves but to him who died and rose again." What joy it is to live in service of this King and to glean wisdom from His teachings.<br/><br/>
  So, dear friend, grab your tools, and let's dig deep into the depths of His boundless riches—pun intended.

          </TextWrapper>
        </MainContent>
      </PageContent>
    </Layout>
  );
};

export default About;
