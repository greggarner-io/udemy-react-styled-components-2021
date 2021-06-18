import styled,{ css } from "styled-components";

export const DefaultButton = styled.button`
  background: #645cff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.25rem;
  display: block;
  width: 200px;
  margin: 1rem auto;
`;

export const HipsterButton = styled(DefaultButton)`
  width: 400px;
  background: transparent;
  color: #645cff;
  border: 1px solid #645cff;
  padding: 1rem;
  // Example 1 for props
  padding: ${({ large }) => large ? '2rem' : '1rem'};

  // Example 2 for multiple changes
  // The css helper is what gives the coloring in the IDE
  ${({ large }) =>
    large
      ? css`
        font-size: 1.5rem;
        font-weight: 700;
      `
      : css`
        font-size: 1rem;
        font-weight: 400;
      `
  } 
  display: inline-block;
  margin-right: 1rem;

  text-decoration: none;
  text-align: center;
`