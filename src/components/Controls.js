import React from 'react';

export const Controls = (props) => {
  console.log(props)
  return (
    <>
      <ShowBasic props={props}/>
      <ShowMoreComplex props={props} />
      <ShowCardExample props={props} />
      <ShowAnimationExample props={props}/>
      <ShowAsExample props={props}/>
      <ShowFormExample props={props}/>
      <ShowListExample props={props}/>
      <ShowProductsExample props={props}/>
    </>
  )
}


const ShowBasic = (props) => {
  const { showBasic, handleShowBasic } = props.props;
  return (
    <div>
      Show Basic 
      <input type="checkbox" checked={showBasic} onChange={() => handleShowBasic()} />
    </div>
  )
}
const ShowMoreComplex = (props) => {
  const { showMoreComplex, handleShowMoreComplex } = props.props;
  return (
    <div>
      Show More Complex
      <input type="checkbox" checked={showMoreComplex} onChange={() => handleShowMoreComplex()} />
    </div>
  )
}
const ShowCardExample = (props) => {
  const { showCardExample, handleShowCardExample } = props.props;
  return (
    <div>
      Show Card Example
      <input type="checkbox" checked={showCardExample} onChange={() => handleShowCardExample()} />
    </div>
  )
}
const ShowAnimationExample = (props) => {
  const { showAnimationExample, handleShowAnimationExample } = props.props;
  return (
    <div>
      Show Animation Example
      <input type="checkbox" checked={showAnimationExample} onChange={() => handleShowAnimationExample()} />
    </div>
  )
}
const ShowAsExample = (props) => {
  const { showAsExample, handleShowAsExample } = props.props;
  return (
    <div>
      Show As Example
      <input type="checkbox" checked={showAsExample} onChange={() => handleShowAsExample()} />
    </div>
  )
}
const ShowFormExample = (props) => {
  const { showFormExample, handleShowFormExample } = props.props;
  return (
    <div>
      Show Form Example
      <input type="checkbox" checked={showFormExample} onChange={() => handleShowFormExample()} />
    </div>
  )
}
const ShowListExample = (props) => {
  const { showListExample, handleShowListExample } = props.props;
  return (
    <div>
      Show List Example
      <input type="checkbox" checked={showListExample} onChange={() => handleShowListExample()} />
    </div>
  )
}
const ShowProductsExample = (props) => {
  const { showProductsExample, handleShowProductsExample } = props.props;
  return (
    <div>
      Show Products Example
      <input type="checkbox" checked={showProductsExample} onChange={() => handleShowProductsExample()} />
    </div>
  )
}