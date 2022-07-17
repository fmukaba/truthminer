import { FC, useContext } from "react";
import { FirestoreContext } from "../../context";
import { Layout } from "../../components/Layout";
import { FlexBox } from "../../components/Layout/layout.styled";
import PageHeader from "../../components/PageHeader/PageHeader";

const Themes: FC = () => {
  const data = useContext(FirestoreContext);
  console.log(data?.themes);
  return (
    <Layout>
      <PageHeader
        title="Themes"
        description="What the Bible says on different topics"
      />
      <FlexBox></FlexBox>
    </Layout>
  );
};

export default Themes;
