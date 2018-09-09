import styled from 'styled-components';

const Col = styled.div`
  width: ${props => props.size}
  @media (max-width: ${props => props.theme.breakMd}px) {
    width: 100%;
  }
`;

export default Col;
