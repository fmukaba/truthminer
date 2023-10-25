import { FC, useContext } from "react";
import { FlexBox, Layout } from "../../components/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import { FirestoreContext } from "../../context/Context";
import { Lyrical as LyricalType } from "../../interfaces";
import Card from "../../components/Card/Card";
import {  FiltersContainer, GridWrapper } from "./styles";
import { PageContent } from "../../components";

const Lyrical: FC = () => {
  const data = useContext(FirestoreContext);
  console.log(data.lyricals);

  return (
    <Layout>
      <PageHeader
        title="Lyrical"
        description="word play, bars, schemes, poems... just some things you know?"
      />
      <PageContent>
        <FlexBox flexDirection="column" >
          <FiltersContainer>
            Filters
          </FiltersContainer>
          <GridWrapper>
            {data.lyricals.map((el: LyricalType) => {
              return (
                <Card 
                  key={el.id}
                  id={el.id}
                  title={el.title}
                  type={el.type}
                  content={el.content}
                  date_published={el.date_published} 
                />
              );
            })}
          </GridWrapper>
        </FlexBox>
      </PageContent>
    </Layout>
  );
};

export default Lyrical;
