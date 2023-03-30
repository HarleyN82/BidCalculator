import styles from './About.module.css'
import { LinkButton } from '../layout/LinkButton'
import logoBatto from '../../img/logo.png'

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
            <img src={logoBatto} alt="" />
            <div className={styles.border_about}>
                <div className={styles.text_container}>
                    <span>Battossai</span>
                    <h1>Calculadora</h1>
                    <p>
                        BidCalculator é um sistema fullstack javascript integrado, com o intuito de calcular itens referentes ao produto battossai. Nesse viés, tal sistema busca, por meio de uma interface minimalista e intuitiva trazer para o usuário um ambiente agradável para o cadastro dos itens e seus cálculos.
                    </p>
                    <LinkButton to='/newitem' text='Cadastrar Item'/>
                </div>
            </div>
        </div>
      </motion.section>
    );
}