import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Blog from './components/Blog/Blog';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Container></Container>
      <Blog></Blog>
    </div>
  )
}

export default App
