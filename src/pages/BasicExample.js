import BasicTitle from '../components/BasicTitle';
import { DefaultButton, HipsterButton } from '../components/Buttons';

const BasicExample = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <BasicTitle special>Styled Components</BasicTitle>
      <BasicTitle>Styled Components</BasicTitle>
      <DefaultButton>Click Me</DefaultButton>
      <HipsterButton>HipsterButton Click Me</HipsterButton>
  </div>
  )
}

export default BasicExample;