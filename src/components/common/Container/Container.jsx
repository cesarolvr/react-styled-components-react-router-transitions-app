import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  margin: auto;
  width: ${props => props.theme.containerXl}px;
  @media (max-width: ${props => props.theme.breakXl}px) {
    width: ${props => props.theme.containerLg}px;
  }
  @media (max-width: ${props => props.theme.breakLg}px) {
    width: ${props => props.theme.containerMd}px;
  }
  @media (max-width: ${props => props.theme.breakMd}px) {
    width: ${props => props.theme.containerSm}px;
  }
  @media (max-width: ${props => props.theme.breakSm}px) {
    width: 100%;
  }
`;

export default Container;
