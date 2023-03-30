import axios from "axios"
import { useState, useEffect} from 'react'

import {Input} from '../form/Input'
import {Select} from '../form/Select'
import {SubmitButton} from '../form/SubmitButton'
import {Message} from '../layout/Message'

import styles from './ProjectForm.module.css'

import {DollarStore} from "../zustand/DollarStore";

export function ProjectForm({btnText, handleSubmit, projectData}){

  const dollar = DollarStore((state) => state.dollar)

  // Estado da moeda
  const [currency, setCurrency] = useState("BRL");

  const [priceValue,setPriceValue] = useState()
    
  // Select das Categorias (banco de dados)
  const [categories, setCategories] = useState([])

  // Select das Moedas (banco de dados)
  const [currencies, setCurrencies] = useState([])

  // Estado do preço convertido
  const [convertedPrice, setConvertedPrice] = useState(null);

  // Select do Tempo (banco de dados)
  const [times, setTimes] = useState([])

  // Estado que representa as mensagens
  const [message, setMessage] = useState()

  // Estado que representa o tipo da mensagem
  const [typeMessage, setTypeMessage] = useState()

  // Estado de todos os projetos
  // const [project, setProject] = useState(projectData || {})
  const [project, setProject] = useState(projectData || {
    name: '',
    budget: null,
    currency: {
      id: '',
      name: '',
    },
    price: '',
    dolar: null, // dollar,
    converted_price: null,
  });

  // Estado do orçamento total
  const [budget, setBudget] = useState(convertedPrice || project.quantityCategory || project.quantityTime);

  // Requisição de API para buscar as categorias
  useEffect(() => {
      axios.get("http://localhost:5500/categories")
      .then((response) => {
        const data = response.data
        setCategories(data)
      })
      .catch((e) => console.log(e))
  },[])

  // Requisição de API para buscar as moedas
  useEffect(() => {
    axios.get('http://localhost:5500/currencies')
      .then((response) => {
        const data = response.data
        setCurrencies(data)
      })
      .catch((e) => console.log(e))
    }, []) 

  // Requisição de API para buscar o período
  useEffect(() => {
    axios.get('http://localhost:5500/time')
      .then((response) => {
        const data = response.data
        setTimes(data)
      })
      .catch((e) => console.log(e))
    }, [])

  // Método para calcular o valor do orçamento total
  const budgetTotal = () => {
    let total = project.quantityTime * project.quantityCategory * convertedPrice;
    setBudget(total.toFixed(2));
    console.log("Valor Convertido: ",convertedPrice)
    console.log("total:", total);
  };

  // Chamada feito para atualizar o budget quando esses valores mudarem
  useEffect(() => {
     budgetTotal();
  }, [project.quantityCategory, project.quantityTime, convertedPrice]);

  // Método para enviar formulário
  const submit = (e) => {
    e.preventDefault();

    if (!project.name || !project.price || !project.quantityCategory || !project.quantityTime || !project.time || !project.currency || !project.category) {
      setMessage("Por favor, preencha todos os campos.");
      setTypeMessage("error");
      return;
    }

    handleSubmit({ 
      ...project, 
      converted_price: convertedPrice,
      dolar: dollar,
      budget: budget
    });

    console.log('Enviando os dados...');
  };

  // Método para captar as opções das categorias
  const handleCategory = (e) => {
    setProject({...project, category:{
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    })
  }

    // Método para captar as opções do período de tempo
    const handleTime = (e) => {
      setProject({...project, time:{
          id: e.target.value,
          name: e.target.options[e.target.selectedIndex].text,
        },
      })
    }
  
    // Método para captar os dados dos inputs de entrada - nome e preço
    const handleChange = (e) => {
      const { name, value } = e.target;
      setProject({ ...project, [name]: value });
    };

    // Método para converter com base na escolha da moeda
   const convertCurrency = (value, currency) => {
      const conversionRate = currency === '1' ? 1.0 : dollar;
      return (parseFloat(value) * conversionRate).toFixed(2);
    };

    // Método para captar a escolha da moeda
    const handleCurrency = (e) => {
      const newCurrency = e.target.value;
      setCurrency(newCurrency);
    
      setProject({
        ...project,
        currency: {
          id: e.target.value,
          name: e.target.options[e.target.selectedIndex].text,
        },
      });

      const newConvertedPrice = convertCurrency(project.price, newCurrency);
      setConvertedPrice(newConvertedPrice);
    };

    // Altere o método handleCurrency para atualizar apenas o estado da moeda selecionada
    const handlePriceChange = (e) => {
      const priceValue = e.target.value
     
      setProject({
        ...project,
        price: priceValue
      });

      const newConvertedPrice = convertCurrency(project.price, currency);
      setConvertedPrice(newConvertedPrice);
      setPriceValue(priceValue);
    };

    useEffect(() => {
      // Converte o valor com base na moeda selecionada
      const converted = convertCurrency(priceValue, currency);
      setConvertedPrice(converted);
    }, [currency, priceValue, dollar]);

  return (

    <form onSubmit={submit} className={styles.form}>
        {message && <Message type={typeMessage} msg={message}/>}
        <div className={styles.form_body}>
         <div className={`${styles.column} ${styles.column01}`}>
            <Input 
              type='text' 
              text='Item do Produto' 
              name='name'
              placeholder='Insira o item do produto'
              value={project.name ? project.name : ''}
              handleOnChange={handleChange}
            />
            <Select 
              name='currency' 
              text='Selecione a moeda'
              options={currencies}
              handleOnChange={handleCurrency}
              value={project.currency ? project.currency.id: ''}
            />
            <Input 
              type='number' 
              text='Preço do Item' 
              name='price'
              placeholder='Insira o preço do item'
              value={priceValue}  /* project.price ? project.price : '' */
              handleOnChange={handlePriceChange}
            />
            <Input
                type="number"
                text="Preço convertido:"
                name="converted_price"
                placeholder="Preço convertido"
                value={convertedPrice ? convertedPrice : ''}
                disabled
            />
            <Select 
              name='category_id' 
              text='Especifique a Unidade de Medida'
              options={categories}
              handleOnChange={handleCategory}
              value={project.category ? project.category.id: ''}
            />
         </div>
         <div className={styles.column}>
          <Input 
              type='number' 
              text='Quantidade unitária do item' 
              name='quantityCategory'
              placeholder='Tempo da categoria: 2 Hosts...'
              value={project.quantityCategory ? project.quantityCategory : ''}
              handleOnChange={(e) => {
                setProject({ ...project, quantityCategory: e.target.value });
              }}
            />
              <Select 
              name='time_id' 
              text='Especifique a unidade multiplicadora'
              options={times}
              handleOnChange={handleTime}
              value={project.time ? project.time.id: 'Mês'}
            />
              <Input 
              type='number' 
              text='Quantidade unitária da unidade multiplicadora' 
              name='quantityTime'
              placeholder='Tempo do período: 2 semanas...'
              value={project.quantityTime ? project.quantityTime : ''}
              handleOnChange={(e) => {
                setProject({ ...project, quantityTime: e.target.value });
              }}
            />
            <Input
                type="number"
                text="Orçamento total:"
                name="budget"
                placeholder="Orçamento total"
                value={budget ? budget : ''}
                disabled
            />
         </div>
        </div>
        <div className={styles.form_btn}>
          <SubmitButton text={btnText} handleSubmit={handleSubmit}/>
        </div>
    </form>
    )
}