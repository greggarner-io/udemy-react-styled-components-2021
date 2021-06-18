import React from 'react';
import styled from 'styled-components';
import { colors, setupBorder } from '../utils';

const AlternativeTitle = (props) => {
  const { className, title } = props;
  
  return (
    // <div className={className}>
    <Wrapper>
      <h1>{title}</h1>
      <div className='underline'/>
      <div className='box' />
      <div className='box2' />
    </Wrapper>
    // </div>
  )
}

const Wrapper = styled.div`
h1{
  text-transform: capitalize;
  text-align: center;
}
.underline {
  width: 5rem;
  height: 0.25rem;
  background: ${colors.primary};
  margin: 0 auto;
}
.box {
  height: 10px;
  border: var(--mainBorder);
}
.box2 {
  height: 10px;
  border: ${setupBorder({width: 5, type: 'solid', color: 'green'})}
}
`

export default AlternativeTitle;
