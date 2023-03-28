import styles from './Project.module.css'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import {Loading} from '../layout/Loading'
import {Container} from '../layout/Container'
import {Message} from '../layout/Message'
import {ProjectForm} from '../project/ProjectForm'

import {DollarStore} from "../zustand/DollarStore";

export function Project(){

    const dollar = DollarStore((state) => state.dollar)

    // Hook específico para pegar parâmetros da URL
    const {id} = useParams()
    
    // State para criar projeto
    const [project, setProject] = useState([])

    // State para mostrar o nosso projeto
    const [showProjectForm, setShowProjectForm] = useState(false)

    // Estado que representa as mensagens
    const [message, setMessage] = useState()

    // Estado que representa o tipo da mensagem
    const [typeMessage, setTypeMessage] = useState()

    // Chamar o projeto do id
    useEffect(()=> {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setProject(data)
            })
            .catch((e) => console.log(e))
        }, 310)
    },[id])

    const toggleProjectForm = () => {
        // Vamos trocar pelo estado pelo que está agora
        // É com base nesse projeto que vamos exibir os dados do formulário ou exibir os dados do projeto
        setShowProjectForm(!showProjectForm)
    }

    const editPost = (project) => {
        
        // Só assim ele envia esses dados para rota
        console.log(project)

        fetch(`http://localhost:5000/projects/${project.id}`,{
            method: 'PATCH', // Alterar só o que foi mudado
            headers:{
                'Content-Type':"application/json"
            },
            body: JSON.stringify(project)
        })
        .then((res) => res.json())
        .then((data) => {
            setProject(data);
            setShowProjectForm(!showProjectForm)
            setMessage("Projeto atualizado com sucesso!")
            setTypeMessage("sucess")
        })
        .catch((e) => console.log(e))
    }

    const currencySymbol = project.currency === 'BRL' ? 'R$' : '$';

    return(
        <>
            {project.name ? (
               <div className={styles.project_details}>
                <Container customClass="column">
                    {message && <Message type={typeMessage} msg={message}/>}
                    <div className={styles.details_container}>
                        <h1>{project.name}</h1>
                        {/* Quando clicar ou vai para a página de editar ou de fechar */}
                        <button className={styles.btn} onClick={toggleProjectForm}>
                            {!showProjectForm ? 'Editar Projeto' : 'Fechar'}
                        </button>
                        {/* Se for false*/}
                        {!showProjectForm ? (
                            <div className={styles.project_info}>
                                <p>
                                    <span>Categoria:</span> {project.category.name}
                                </p>
                                <p>
                                    <span>Orçamento Total:</span> {currencySymbol} {project.budget}
                                </p>
                            </div>
                        ) : (
                            <div className={styles.project_info}>
                                <ProjectForm handleSubmit={editPost} btnText="Concluir Edição" projectData={project}/>
                            </div>
                        )}
                    </div>
                </Container>
               </div>
            ):(
                <Loading/>
            )}
        </>
    )
}