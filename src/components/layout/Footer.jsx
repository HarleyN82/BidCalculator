import {FaGithub,FaInstagram,FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

export function Footer(){
    return (
        <footer className={styles.footer}>
           <ul className={styles.social_list}>
            <li><FaGithub/></li>
            <li><FaInstagram/></li>
            <li><FaLinkedin/></li>
           </ul>
           <p className={styles.copy_right}><span>Calculator</span> &copy; 2023</p>
        </footer>
    )
}