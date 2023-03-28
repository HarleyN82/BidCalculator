import {BrowserRouter as Router } from 'react-router-dom';
import {AnimatedRoutes} from "./components/layout/AnimatedRoutes";

import { NavBar } from './components/layout/NavBar';
import { Footer } from './components/layout/Footer';

import { Container } from './components/layout/Container';

function App() {
  return (
    <Router>
        <NavBar/>
        <Container customClass="min-height">
          <AnimatedRoutes/>
        </Container>
        <Footer/>
    </Router>
  )
}

export default App