import axios from "axios"
import { useNavigate  } from 'react-router-dom'
import { ItemForm } from '../item/ItemForm'
import styles from './NewItem.module.css'

export function NewItem(){

    const navigate = useNavigate()

    function createPost(item){
        
        axios.post('http://localhost:5500/projects', item, {
            headers:{
                'Content-Type':"application/json"
            },
        })
        .then((response) => {
            // redirect
            navigate('/itens',{state:{ message:'Item criado com sucesso!'}})
            console.log(response.data)
        })
        .catch((e) => console.log(e))
    }

    return(
        <div className={styles.newitem_container}>
           <div className={styles.form_container}>
                <div className={styles.form_title}>
                    <h1><span>Cadastrar</span> Item</h1>
                    <p>Crie seu Item para depois calcular o orçamento</p>
                </div>
                <div className={styles.form_body}>
                    <ItemForm handleSubmit={createPost} btnText="Criar Item"/>
                </div>
           </div>
        </div>
    )
}