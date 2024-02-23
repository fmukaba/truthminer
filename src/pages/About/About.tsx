import { FC } from "react";
import { Layout } from "../../components/Layout";
import { FlexBox } from "../../components/Layout/layout.styled";
import PageHeader from "../../components/PageHeader/PageHeader";
import { PageContent } from "../../components";

const About: FC = () => {
  return (
    <Layout>
      <PageHeader
        title="Prospector"
        description="A person who searches for valuable substances from the Word of God"
      />
      <PageContent>
        <FlexBox>About me; Resources? Books i recommend?</FlexBox>
      </PageContent>
    </Layout>
  );
};

export default About;
