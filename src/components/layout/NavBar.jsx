import { Link } from 'react-router-dom';
import { Container } from './Container'
import styles from './NavBar.module.css'

export function NavBar(){
    return(
        <nav className={styles.navBar}>
          <Container>
            <Link to='/' className={styles.title}>BidCalcu<span>la</span>tor.</Link>
            <ul className={styles.list}>
              <li className={styles.item}><Link to='/'>Home</Link></li>
              <li className={styles.item}><Link to='/projects'>Produtos</Link></li>
              <li className={styles.item}><Link to='/about'>Sobre</Link></li>
            </ul>
          </Container>
        </nav>
    )
}