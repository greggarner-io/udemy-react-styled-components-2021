import styled, { keyframes } from 'styled-components';
import { setupBorder } from '../utils';

const spinner = keyframes`
to{
  transform: rotate(360deg);
}
`

const Loading = styled.div`
  height: 6rem; 
  width: 6rem;
  border: ${setupBorder({width: 5, type: 'solid', color: '#ccc'})};
  border-radius: 50%;
  border-top-color: var(--primary);
  animation: ${spinner} 0.6s linear infinite;
`

export default Loading;