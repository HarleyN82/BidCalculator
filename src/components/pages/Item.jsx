import axios from "axios"
import styles from './Item.module.css'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import {Loading} from '../layout/Loading'
import {Container} from '../layout/Container'
import {Message} from '../layout/Message'
import {ItemForm} from '../item/ItemForm'

import {DollarStore} from "../zustand/DollarStore";

export function Item(){

    const dollar = DollarStore((state) => state.dollar)

    // Hook específico para pegar parâmetros da URL
    const {id} = useParams()
    
    // State para criar projeto
    const [item, setItem] = useState([])

    // State para mostrar o nosso projeto
    const [showItemForm, setShowItemForm] = useState(false)

    // Estado que representa as mensagens
    const [message, setMessage] = useState()

    // Estado que representa o tipo da mensagem
    const [typeMessage, setTypeMessage] = useState()

    // Chamar o projeto do id
    useEffect(()=> {
        setTimeout(() => {
            axios.get(`http://localhost:5500/itens/${id}`)
            .then((response) => {
                setItem(response.data)
            })
            .catch((e) => console.log(e))
        }, 310)
    },[id])

    const toggleItemForm = () => {
        // Vamos trocar pelo estado pelo que está agora
        // É com base nesse projeto que vamos exibir os dados do formulário ou exibir os dados do projeto
        setShowItemForm(!showItemForm)
    }

    const editPost = (item) => {
        // Só assim ele envia esses dados para rota
        console.log(item);
    
        axios.patch(`http://localhost:5500/itens/${id}`, item, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            setItem(response.data);
            setShowItemForm(!showItemForm);
            setMessage('Projeto atualizado com sucesso!');
            setTypeMessage('sucess');
        })
        .catch((error) => console.log(error));
    }

    const currencySymbol = item.currency === 'BRL' ? 'R$' : '$';

    return(
        <>
            {item.name ? (
               <div className={styles.item_details}>
                <Container customClass="column">
                    {message && <Message type={typeMessage} msg={message}/>}
                    <div className={styles.details_container}>
                        <h1>{item.name}</h1>
                        {/* Quando clicar ou vai para a página de editar ou de fechar */}
                        <button className={styles.btn} onClick={toggleItemForm}>
                            {!showItemForm ? 'Editar Projeto' : 'Fechar'}
                        </button>
                        {/* Se for false*/}
                        {!showItemForm ? (
                            <div className={styles.item_info}>
                                <p>
                                    <span>Categoria:</span> {item.category.name}
                                </p>
                                <p>
                                    <span>Orçamento Total:</span> {currencySymbol} {item.budget}
                                </p>
                            </div>
                        ) : (
                            <div className={styles.item_info}>
                                <ItemForm handleSubmit={editPost} btnText="Concluir Edição" ItemData={item}/>
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