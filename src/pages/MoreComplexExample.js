import ComplexTitle from '../components/ComplexTitle';
import AlternativeTitle from '../components/AlternativeTitle';

const MoreComplexExample = ( ) => {
  const title = "more complex title"
  const altTitle = "Alternative complex title"
  return (
    <>
      <ComplexTitle title={title} />
      <AlternativeTitle title={altTitle} />
    </>
  )
}

export default MoreComplexExample;