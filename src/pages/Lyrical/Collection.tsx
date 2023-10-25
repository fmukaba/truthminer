import { FC, useContext } from "react";
import { useParams } from "react-router-dom";
import { FirestoreContext } from "../../context/Context";
import { NotFound } from "../../components";
import { Container, Content, TitleContainer } from "../Lyrical/styles";


const Collection: FC = () => {
  const data = useContext(FirestoreContext);
  const { id } = useParams();
  let targetLyrical = data.lyricals.find((element) => element.id === id);

  return (
    (targetLyrical? 
      <Container>
        <TitleContainer> {targetLyrical.title} </TitleContainer>
        <Content dangerouslySetInnerHTML={{__html: targetLyrical.content }} style={{maxWidth: '100%'}} />
      </Container> 
      :<NotFound />
    )
  );
};

export default Collection;
