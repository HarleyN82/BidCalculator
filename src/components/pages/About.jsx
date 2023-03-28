import styles from './About.module.css'
import { LinkButton } from '../layout/LinkButton'
import bidweb from '../../img/battossai.png'

import {motion} from 'framer-motion'

export function About(){
    return(
        <motion.section 
            className={styles.about_container}
            initial={{width:0}}
            animate={{width:'100%'}}
            exit={{x:window.innerWidth,transition:{duration:0.1}}}
        >
        <div className={styles.about_body}>
            <img src={bidweb} alt="" />
            <div className={styles.border_about}>
                <div className={styles.text_container}>
                    <span>Battossai</span>
                    <h1>Calculadora</h1>
                    <p>
                        É um sistema de cadastro de produtos refernetes ao battossai.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum possimus minus eius id tempora saepe quaerat, ratione illum nostrum suscipit soluta vitae! Similique assumenda aspernatur eius perspiciatis cumque necessitatibus totam!
                    </p>
                    <LinkButton to='/newproject' text='Cadastrar Produto'/>
                </div>
            </div>
        </div>
      </motion.section>
    );
}