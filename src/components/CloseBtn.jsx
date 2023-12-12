import styled from 'styled-components';

const Button = styled.div`
  width: 10rem;
  height: 10rem;
  background-color: #e8590c;
  padding: 3rem 3rem;
  margin-left: auto;
`;

function CloseBtn({ children }) {
  return <Button>{children}</Button>;
}

export default CloseBtn;
