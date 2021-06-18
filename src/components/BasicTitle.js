import styled from "styled-components";

const colorSelector = (props) => {
  const { special } = props;
  return special ? 'red' : 'blue';
}

const BasicTitle = styled.h1`
  text-align: center;
  text-transform: capitalize;
  color: ${props => colorSelector(props)}
`;

export default BasicTitle;