import styled from 'styled-components';
import IndexPage from './pages/IndexPage';
import GlobalStyles from './styles/GlobalStyles';

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

function App() {
  return (
    <Container>
      <GlobalStyles />
      <IndexPage />
    </Container>
  );
}

export default App;
