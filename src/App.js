import { ThemeProvider } from 'styled-components';
import { Container } from './components/styles/Container.styled'
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import GlobalStyles from './components/styles/Global';
import content from './content'

const theme = {
  colors: {
    header: '#ebfbfc',
    body: '#fff',
    footer: '#003333'
  },
  mobile: '768px'
}

function App() {
  console.log(content)
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />

        <Header />

        <Container>
          {
            content.map((item, index) => {
              return (
                <Card key={index} item={item} />
              )
            })
          }
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
