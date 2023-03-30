import axios from "axios"
import { useState, useEffect} from 'react';
import { useLocation  } from 'react-router-dom'

import {Message} from '../layout/Message';
import {Container} from '../layout/Container';
import {Loading} from '../layout/Loading';
import {LinkButton} from '../layout/LinkButton';

import {ItemCard} from '../item/ItemCard';

import styles from './Itens.module.css';
import {motion} from 'framer-motion'

import {Input} from '../form/Input'
import {DollarStore} from "../zustand/DollarStore";

export function Itens(){

    const dollar = DollarStore(state => state.dollar);
    const setDollar = DollarStore(state => state.setDollar);

    const [itens, setItens] = useState([]); // estado para salvar os projetos
    const [removeLoading, setRemoveLoading] = useState(false)
    const [itemMessage, setItemMessage] = useState('') // como a message vem pelo redirect, e não temos nada cadastrado aqui vamos criar um state.

    const location = useLocation()

    let message = ''
    if(location.state){
        message = location.state.message
        console.log(location)
    }

    // Puxa todos os dados atualizados
    useEffect(() => {
        setTimeout(() => {
            axios.get("http://localhost:5500/itens")
            .then((response) => {
                const data = response.data;
                console.log(data)
                setItens(
                    data.map((item) => {
                        let newPrice = item.price;
                        if (item.currency.name === "USD") {
                            newPrice = (item.price * dollar).toFixed(2);
                        }
                        return {
                            ...item,
                            converted_price: newPrice
                        }
                    })
                );
                setRemoveLoading(true) // quando os projetos forem carregados, então o elemento de carregamento se remove
            })
            .catch((e) => console.log(e)) 
        }, 400)
    },[dollar])

    // Atualiza a moeda a partir do valor do input
    useEffect(() => {
        axios.get("http://localhost:5500/currencies/2")
        .then(response => {
            const data = response.data;
            setDollar(data.value);
            console.log("Dollar:", dollar)
          })
        .catch(e => console.log(e));
    }, [dollar]);

    useEffect(() => {
        if (itens.length > 0) {
            itens.forEach(item => {
                axios.patch(`http://localhost:5500/itens/${item.id}`, {
                    converted_price: item.converted_price,
                    dolar: dollar,
                    budget: item.converted_price * item.quantityCategory * item.quantityTime
                })
                .then(response => console.log(response.data))
                .catch(error => console.log(error));
            });
        }
    }, [itens, dollar]);

    // Pegar o valor do dóllar pelo input e alterar na seção de dolar do banco de dados
    const handleDollarChange = (e) => {
        const newValue = parseFloat(e.target.value);
        setDollar(newValue);

        axios.patch("http://localhost:5500/currencies/2", {
            value: parseFloat(newValue)
        })
        .then(response => {
            console.log(response.data)
            // atualizar o valor da moeda em todos os projetos
            setItens(
                itens.map((item) => ({
                    ...item,
                    converted_price: item.currency.name === "USD" ? item.price * newValue : item.converted_price
                }))
            );
            setItemMessage("Dólar atualizado com sucesso!")
        })
        .catch(e => console.log(e));
    };

     // Método para remover o projeto  + fecth
     const removeitem = (id) => {
        axios.delete(`http://localhost:5500/itens/${id}`)
        .then(() => {
            setItens(itens.filter((item) => item.id !== id))
            setItemMessage("Item removido com sucesso!")
        })
        .catch((e) => console.log(e))
    }

    return (
       <motion.div 
            className={styles.item_container}
            initial={{width:0}}
            animate={{width:'100%'}}
            exit={{x:window.innerWidth,transition:{duration:0.1}}}
       >
        <div className={styles.title_container}>
            <h1>Meus Itens</h1>
            <LinkButton to='/newitem' text='Novo Item'/>
        </div>
        { message && <Message type='sucess' msg={message} />}
        { itemMessage && <Message type='sucess' msg={itemMessage} />}
       <Container customClass='start'>
        { itens.length > 0 && (
            itens.map((item) => <ItemCard
                key={item.id} 
                id={item.id}
                name={item.name}
                budget={item.budget}
                time={item?.time?.name}
                quantityTime={item.quantityTime}
                quantityCategory={item.quantityCategory}
                price={item.price}
                convertedPrice={item.converted_price}
                currency={item?.currency?.name}
                category={item?.category?.name}
                handleRemove={removeitem}
            />))}
            {/*If que representa quando os projetos não estão sendo carregados*/}
            {!removeLoading && <Loading/>}
            {/*If quando não existe nenhum projeto*/}
            {removeLoading && itens.length === 0 && (
                <p>Não há itens cadastrados!</p>
            )
            }
       </Container>
       <div className={styles.dollar}>
            <Input
                type="number"
                name="dollar"
                text='Valor do dólar:'
                placeholder="Digite o valor atual do dólar"
                value={dollar}
                handleOnChange={handleDollarChange}
            />
        </div>
       </motion.div>
    )
}