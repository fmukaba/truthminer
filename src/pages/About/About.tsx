import { FC } from "react";
import { Layout } from "../../components/Layout";
import { FlexBox } from "../../components/Layout/layout.styled";
import PageHeader from "../../components/PageHeader/PageHeader";

const About: FC = () => {
  return (
    <Layout>
      <PageHeader title="About Me" />
      <FlexBox></FlexBox>
    </Layout>
  );
};

export default About;
