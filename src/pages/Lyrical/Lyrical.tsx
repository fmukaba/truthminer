import { FC, Fragment, useContext, useState } from "react";
import { FlexBox, Layout } from "../../components/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import { PageContent } from "../../components";
import { FirestoreContext } from "../../context/Context";
import { Lyrical as LyricalType } from "../../interfaces";
import Card from "../../components/Card/Card";
import {
  FilterButton,
  FiltersContainer,
  FiltersGrid,
  GridWrapper,
  StyledRowDivider,
} from "./styles";

const types = ["All", "Rap", "Poem", "Spoken Word"];

const Lyrical: FC = () => {
  const data = useContext(FirestoreContext);
  const [selectedType, setSelectedType] = useState("All");
  const filteredLyricals =
    selectedType === "All"
      ? data.lyricals
      : data.lyricals.filter(
          (lyrical) => lyrical.type.toLowerCase() === selectedType.toLowerCase()
        );

  return (
    <Layout>
      <PageHeader
        title="Gems"
        description="A collection of short writings that express prayer and worship." //or leisure? like rap
      />
      <PageContent>
        <FlexBox flexDirection="column">
          <FiltersContainer>
            <FiltersGrid>
              {types.map((type) => (
                <FilterButton
                  key={type}
                  active={selectedType === type}
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </FilterButton>
              ))}
            </FiltersGrid>
          </FiltersContainer>
          <GridWrapper>
            {filteredLyricals.map((el: LyricalType, index: number) => {
              return (
                <Fragment key={index}>
                  <Card
                    index={index}
                    key={el.id}
                    id={el.id}
                    title={el.title}
                    type={el.type}
                    content={el.content}
                    date_published={el.date_published}
                  />
                  {(index + 1) % 3 === 0 &&
                    index + 1 !== filteredLyricals.length && (
                      <StyledRowDivider />
                    )}
                </Fragment>
              );
            })}
          </GridWrapper>
        </FlexBox>
      </PageContent>
    </Layout>
  );
};

export default Lyrical;
