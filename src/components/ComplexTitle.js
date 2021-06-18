import React from 'react';
import styled from 'styled-components';

const ComplexTitle = (props) => {
  const { title } = props;
  
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className='underline'/>
    </Wrapper>
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
  background: var(--primary);
  margin: 0 auto;
}
`

export default ComplexTitle;
