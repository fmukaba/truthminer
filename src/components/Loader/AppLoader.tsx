import { ClipLoader } from 'react-spinners';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  h4 {
    margin-top: 30px;
    color: black;
    font-weight: 500;
  }
`;

const AppLoader = () => {
  return (
    <LoaderWrapper>
      <Loader>
        <ClipLoader size={70} color={"black"} />
        <h4>Loading...</h4>
      </Loader>
    </LoaderWrapper>
  );
};

export default AppLoader;