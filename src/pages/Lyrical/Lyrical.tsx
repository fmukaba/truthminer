import { FC, useContext } from "react";
import { Layout } from "../../components/Layout";
import { FlexBox } from "../../components/Layout/layout.styled";
import PageHeader from "../../components/PageHeader/PageHeader";
import { FirestoreContext } from "../../context";

const Lyrical: FC = () => {
  const data = useContext(FirestoreContext);
  console.log(data?.lyricals);

  return (
    <Layout>
      <PageHeader
        title="Lyrical"
        description="A collection of short poems that expresses my prayer and worship."
      />
      <FlexBox></FlexBox>
    </Layout>
  );
};

export default Lyrical;
