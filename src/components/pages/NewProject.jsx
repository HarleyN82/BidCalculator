import axios from "axios"
import { useNavigate  } from 'react-router-dom'
import { ProjectForm } from '../project/ProjectForm'
import styles from './NewProject.module.css'

export function NewProject(){

    const navigate = useNavigate()

    function createPost(project){
        
        axios.post('http://localhost:5500/projects', project, {
            headers:{
                'Content-Type':"application/json"
            },
        })
        .then((response) => {
            // redirect
            navigate('/projects',{state:{ message:'Projeto criado com sucesso!'}})
            console.log(response.data)
        })
        .catch((e) => console.log(e))
    }

    return(
        <div className={styles.newproject_container}>
           <div className={styles.form_container}>
                <div className={styles.form_title}>
                    <h1><span>Cadastrar</span> Produto</h1>
                    <p>Crie seu produto para depois calcular o orçamento</p>
                </div>
                <div className={styles.form_body}>
                    <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
                </div>
           </div>
        </div>
    )
}