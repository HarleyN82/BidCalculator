import { LinkButton } from '../layout/LinkButton'
import styles from './Home.module.css'
import {motion} from 'framer-motion'

export function Home(){
    return(
        <motion.section 
            className={styles.home_container}
            initial={{width:0}}
            animate={{width:'100%'}}
            exit={{x:window.innerWidth, transition:{duration:0.1}}}
        >
            <div className={styles.border_home}>
                <div className={styles.text_container}>
                    <h1>Bem-vindo ao <span>Calculator</span></h1>
                    <p>Comece a gerenciar os seus itens agora mesmo!</p>
                    <div className={styles.btn_home}>
                        <LinkButton to='/newitem' text='Cadastrar Item'/>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}