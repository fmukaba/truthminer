import { BeatLoader } from 'react-spinners';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 53px);
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

type Props = {
  title: string;
};

const PageLoader = ({ title }: Props) => {
  return (
    <LoaderWrapper>
      <Loader>
        <BeatLoader size={20} color={"black"} />
        <h4>{title}</h4>
      </Loader>
    </LoaderWrapper>
  );
};

export default PageLoader;