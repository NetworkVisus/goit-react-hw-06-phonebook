import { FallingLines } from 'react-loader-spinner';
import * as Styled from './Loader.styled';

const Loader = ({ isLoading }) => {
  return (
    <Styled.Div>
      <FallingLines
        color="#3f51b5"
        width="100"
        visible={isLoading}
        ariaLabel="falling-lines-loading"
      />
    </Styled.Div>
  );
};

export default Loader;
