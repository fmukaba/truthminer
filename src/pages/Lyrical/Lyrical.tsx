import { FC, Fragment, useContext, useState } from "react";
import { FlexBox, Layout } from "../../components/Layout";
import PageHeader from "../../components/PageHeader/PageHeader";
import { FirestoreContext } from "../../context/Context";
import { Lyrical as LyricalType } from "../../interfaces";
import Card from "../../components/Card/Card";
import { FiltersContainer, GridWrapper } from "./styles";
import { PageContent } from "../../components";
import styled from "styled-components";

export const StyledRowDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #eeeeee;
  grid-column: span 3;
  margin: 10px 0;

  @media (max-width: 1024px) {
    display: none !important;
  }
`;

const FilterButton = styled.button<{ active: boolean }>`
  margin: 10px;
  padding: 5px 15px;
  cursor: pointer;
  border: 1px solid #aaa;
  background: none;
  border-radius: 20px;

  ${(props) =>
    props.active &&
    `
      background-color: #ccc;
    `}
`;

const types = ["All", "Spoken Word", "Rap", "Poem"];

const Lyrical: FC = () => {
  const data = useContext(FirestoreContext);
  const [selectedType, setSelectedType] = useState("All");
  const filteredLyricals =
    selectedType === "All"
      ? data.lyricals
      : data.lyricals.filter(
          (lyrical) =>
            lyrical.type.toLocaleLowerCase() === selectedType.toLowerCase()
        );

  return (
    <Layout>
      <PageHeader
        title="Lyrical"
        description="A collection of short writings that express prayer and worship."
      />
      <PageContent>
        <FlexBox flexDirection="column">
          <FiltersContainer>
            Filter by:
            {types.map((type) => (
              <FilterButton
                key={type}
                active={selectedType === type}
                onClick={() => setSelectedType(type)}
              >
                {type}
              </FilterButton>
            ))}
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
