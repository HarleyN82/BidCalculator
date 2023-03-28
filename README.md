# Project Coasts

> É o projeto final do curso HoraDeCodar sobre reactJS, voltado a um gerenciamento de projetos.

- **Como irá funcionar?** 

## Criando Projeto 

Ao criar um projeto utilizando o React JS podemos utilizar os seguintes boilerplates:

- Create React App (CRA)
- Vite

❗Dica: Boilerplates se refere a seções de código que devem ser incluídas em muitos lugares. É um template, ou seja, uma forma padrão de se escrever algo que pode ser copiado.

## Quais as vantagens de utilziar Vite ao invés do CRA ?

O Vite tem todos os recursos do CRA, mas com melhores implementações e recursos adicionais que o CRA não suporta, com isso o Vite acaba sendo até 10x mais rápido em comparação ao CRA.

<img alt="Symbol-Code" height="20" weigth="20" style="border-radius:150px" src="https://user-images.githubusercontent.com/113690864/222425069-d1b2deb3-ccce-44f8-b64d-650a98a6fc4c.png"> **Criando o primeiro projeto com o Vite:** `npm create vite@latest reactapp --template react`

Colocamos "Template" para identificar que o projeto que estamos fazendo é React.

- Após rodar o comando acima, será exibido a tela para escolher o framework que deseja utilizar.

<img alt="Symbol-Code" height="400" weigth="400" style="border-radius:150px" src="https://storage.googleapis.com/golden-wind/discover/especializar/reactjs/criando-o-projeto-1.png"> 

- Em seguida, será questionado sobre a variant, escolheremos react que representa que não usaremos o TypeScript nesse projeto.

<img alt="Symbol-Code" height="400" weigth="400" style="border-radius:150px" src="https://storage.googleapis.com/golden-wind/discover/especializar/reactjs/criando-o-projeto-2.png">

⚠️ **Dica:** Se você for executar o código na sua máquina após dar um `git clone`, é só colocar no terminal `npm install`.

## Executando Projeto

Existem duas maneiras de navegar até a pasta do seu projeto, pelo próprio terminal, utilizando o comando cd ou arrastando a pasta do projeto para dentro do VS Code.

Em seguida, será necessário baixar as dependências necessárias para a execução do projeto. Podemos utilizar o npm quanto o yarn como gerenciador de pacotes.

Certifique-se que está na pasta do projeto e execute o comando desejado:
    - `yarn install`
    - `npm install`

Além disso, é preciso instalarmos algumas dependências como:
    - `npm install json-server`
    - `npm install react-router-dom`
    - `npm install react-icons`
    - `npm install wwid`

Após a instalação das dependências, execute o comando abaixo:

_Utilize o mesmo gerenciador do comando anterior_
    - `npm run dev`
    - `yarn dev`

Após executar o comando acima, abra o seu navegador e acesse o endereço: `http://localhost:5173/`

<img alt="Symbol-Code" height="400" weigth="400" style="border-radius:150px" src="https://storage.googleapis.com/golden-wind/discover/especializar/reactjs/executando-projeto.png">

- **App.jsx**

```jsx

import './index.css'

function App() {
  return (
    <div>
        <h1>Coasts</h1>
    </div>
  )
}

export default App

```

- **index.css**

```css

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box; /* Inputs e buttons não ultrapassar as áreas máximas das divs*/
    font-family: 'Opens Sans', sans-serif;
}

html, body, #root{
    background-color: #EFEFEF;
    height: 100%;
    
}

```

- **index.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="./public/favicon.ico"/>

    <!--Google Fonts: Open Sans-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet">

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Coasts</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

Não esqueça de baixar as fotos no repositório do projeto - última brnach - e colocar todas elas na pasta img.

![Respositório Link](https://github.com/matheusbattisti/curso_react_yt/tree/16_projeto_costs)

## Estruturando o Projeto

Vamos fazer o roteamento das nossas páginas, implementando o React Router.

- **App.jsx**

```jsx

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './components/pages/Home';
import { Company } from './components/pages/Company';
import { Contact}  from './components/pages/Contact';
import { NewProject } from './components/pages/NewProject';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/company" element={<Company/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/newproject" element={<NewProject/>}/>
        </Routes>
    </Router>
  )
}

export default App

```

Todo o conteúdo das nossas páginas, sendo chamadas pelo <Routes> serão colocadas dentro de um componente específico chamado de <Container/>, assim poderemos reutlizar ele em vários locais. Não somente ele, mas podemos colocar também componentes de mensagens (alertas) e outros.

Para isso, dentro da pasta `layout` vamos criar um arquivo `Container.jsx` e colocarmos todo essa call dentro.

- **Container.jsx**

```jsx

import styles from './Container.css'

export function Container(props){
    return <div> {props.children} </div>
}

```

A lógica que o rege é que, esse nosso container vai receber props, que por sua vez, serão todas as nossas páginas.

Dentro do container iremos alterar classes que mudarão a disposição dos nossos itens nas páginas. Então, será um container flex.

Quando envolvemos vários componentes em um só, se não colocarmos uma sintaxe especial para referenciar (props), então ele não vai entender onde colocar as nossas páginas. 

Por exemplo, o próprio <Routes> já faz isso, mas faremos de novo, porém com o nosso próprio container.

`props.children` refere-se aos elementos filhos que estão encapsulados nesse componente <Container/> serão encaixados nessa div.

Em resumo,  uso do <Container> aqui é uma forma de encapsular as rotas em um componente personalizado que fornece estilos e funcionalidades específicas. Isso pode tornar o código mais modular e fácil de manter.

```jsx

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './components/pages/Home';
import { Company } from './components/pages/Company';
import { Contact}  from './components/pages/Contact';
import { NewProject } from './components/pages/NewProject';

import { Container } from './components/layout/Container';

function App() {
  return (
    <Router>
        <Container>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/company" element={<Company/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
            <Route exact path="/newproject" element={<NewProject/>}/>
          </Routes>
        </Container>
    </Router>
  )
}

export default App

```

Vamos agora estilizar um pouco o nosso container.

- **Container.module.css**

```css

.container{
    width: 1200px; /*Largura máxima*/
    display: flex;
    justify-content: space-between; /* Espaçar os elementos iguais conforme a linha horizontal */
    margin: 0 auto;
    flex-wrap: wrap; /*Quando os elementos filhos ultrapassarem a largura limite ele irão para baixo, criando outra linha*/
}

/*Classes Help*/

.min-height{
    min-height: 75%; /*Para o conteúdo ocupar um grande espaço na tela*/
}

```

- **Container.jsx**

```jsx

import styles from './Container.module.css'

export function Container(props){
    return <div className={`${styles.container} ${styles[props.customClass]}`}> {props.children} </div>
}

```

Supondo que eu não queira que todas as minhas classes sejam propagadas para todos os meus componentes, então eu uso o "template string" para fazer essa seleção, ofertando dinamicidade, pois iremos tratar o styles como uma variável.

Para eu inserir classes que venham das minhas props iremos criar um [], para que esse styles acesse de forma seletiva as classes, e colocaremos o nome da variável.

```jsx

// Container.jsx

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './components/pages/Home';
import { Company } from './components/pages/Company';
import { Contact}  from './components/pages/Contact';
import { NewProject } from './components/pages/NewProject';

import { Container } from './components/layout/Container';

function App() {
  return (
    <Router>
        <Container customClass="min-height">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/company" element={<Company/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
            <Route exact path="/newproject" element={<NewProject/>}/>
          </Routes>
        </Container>
    </Router>
  )
}

export default App

```

Ao colocarmos essa nova variável de estilo `customClass="min-height"` estamos ativando a classe que criamos.

Outras classes que usaremos mais tarde são:

```css

.container{
    width: 1200px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    flex-wrap: wrap;
}

/*Classes Help*/

.min-height{
    min-height: 75%;
}

.start{
    justify-content: flex-start; /*Colocará todos pro inicio*/
}

/*O flex vem em row (linha)*/

.column{
    flex-direction: column;
    justify-content: flex-start;
}

```

## Estruturando a NavBar e Footer

Tendo criado a pasta layout, vamos criar os arquivos NavBar.jsx e Footer.jsx, além de os configurar e estilizar.

- **Navbar.jsx**

```jsx

import {Link } from 'react-router-dom';

export function NavBar(){
    return(
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/company'>Company</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/newproject'>NewProject</Link></li>
        </ul>
    )
}

```

Essa é a forma simples de usarmos o nosso NavBar, mas nesse caso também vamos utilizar o nosso container, já que ele é um componente estrutural que vai nos ajudar a posicionar melhor os elementos em diversas partes do projeto.

```jsx

import { Link } from 'react-router-dom';
import { Container } from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/logo.png'

export function NavBar(){
    return(
        <nav>
          <Container>
            <Link to='/'><img src={logo} alt="Coasts Logo"/></Link>
            <Link to='/'>Home</Link>
            <Link to='/company'>Company</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/newproject'>NewProject</Link>
          </Container>
        </nav>
    )
}

```

Mudamos de <ul> para <nav>, por questões semánticas de html.

Não esqueça de colcoar {} quando importar os componentes se neles você estruturou como `export function...`

É importante também colocarmos cada link organizado como listas, logo vamos os encapsular detro de <li>.

```jsx

import { Link } from 'react-router-dom';
import { Container } from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/logo.png'

export function NavBar(){
    return(
        <nav>
          <Container>
            <Link to='/'><img src={logo} alt="Coasts Logo"/></Link>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/company'>Company</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </Container>
        </nav>
    )
}

```

Vamos estilizar agora...

- **NavBar.module.css**

```css

.navBar{
    display: flex;
    justify-content: space-between;
    background-color: #222;
    padding: 1em;
}

.list{
    display: flex;
    list-style: none;
    align-items: center; /*Alinhar na vertical*/ 
}

.item{
    margin-right: 1em;
}

.item a{
    color: #fff;
    text-decoration: none;
}

.item a:hover{
    color: #FFBB33;
}

```

Uma dica para selecionar todos os <li> é apertar `ctrl+alt+(↑ ou → ou ↓ ou ←)`.

Não esqueça de chamar esses estilos dentro do nosso arquivo.

```jsx
import { Link } from 'react-router-dom';
import { Container } from './Container'
import styles from './NavBar.module.css'
import logo from '../../img/logo.png'

export function NavBar(){
    return(
        <nav className={styles.navBar}>
          <Container>
            <Link to='/'><img src={logo} alt="Coasts Logo"/></Link>
            <ul className={styles.list}>
              <li className={styles.item}><Link to='/'>Home</Link></li>
              <li className={styles.item}><Link to='/projects'>Projects</Link></li>
              <li className={styles.item}><Link to='/about'>About</Link></li>
              <li className={styles.item}><Link to='/contact'>Contact</Link></li>
            </ul>
          </Container>
        </nav>
    )
}

```

- **Projects.jsx**

Vamos também criar a página que vai exibir todos os nosso projetos na barra de navegação, chamada de `Projects.jsx`.

```jsx

// App.jsx

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { NavBar } from './components/layout/NavBar';
import { Footer } from './components/layout/Footer';
import { Home } from './components/pages/Home';
import { Company } from './components/pages/Company';
import { Contact}  from './components/pages/Contact';
import { NewProject } from './components/pages/NewProject';
import { Projects } from './components/pages/Projects';

import { Container } from './components/layout/Container';

function App() {
  return (
    <Router>
        <NavBar/>
        <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/projects" element={<Projects/>}/>
          <Route exact path="/company" element={<Company/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/newproject" element={<NewProject/>}/>
        </Routes>
        </Container>
        <Footer/>
    </Router>
  )
}

export default App

```

E é claro vamos fazer essa importação na nossa NavBar.

```jsx

import { Link } from 'react-router-dom';
import { Container } from './Container'
import styles from './NavBar.module.css'
import logo from '../../img/logo.png'

export function NavBar(){
    return(
        <nav class={styles.navBar}>
          <Container>
            <Link to='/'><img src={logo} alt="Coasts Logo"/></Link>
            <ul class={styles.list}>
              <li class={styles.item}><Link to='/'>Home</Link></li>
              <li class={styles.item}><Link to='/projects'>Projects</Link></li>
              <li class={styles.item}><Link to='/company'>Company</Link></li>
              <li class={styles.item}><Link to='/contact'>Contact</Link></li>
            </ul>
          </Container>
        </nav>
    )
}

```

Para finalizar vamos estilizar e configurar o footer.

- **Footer.jsx**

```jsx

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
           <p className={styles.copy_right}><span>Coasts</span> &copy; 2023</p>
        </footer>
    )
}

```

- **Footer.module.css**

```css

.footer{
    background-color: #222;
    color: #fff;
    padding: 3em;
    text-align: center;
}

.social_list{
    display: flex;
    list-style-type: none;
    justify-content: center;
}

.social_list li{
    margin: 0 1em;
    color: #fff;
}

.social_list li:hover{
    color: #FFBB33;
}

.social_list svg{
    font-size: 1.5em;
    cursor: pointer;
}

.copy_right{
    margin-top: 2em;
}

.copy_right span{
    font-weight: bold;
    color: #FFBB33;
}

```

- **App.jsx**

```jsx

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { NavBar } from './components/layout/NavBar';
import { Footer } from './components/layout/Footer';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Contact}  from './components/pages/Contact';
import { NewProject } from './components/pages/NewProject';
import { Projects } from './components/pages/Projects';

import { Container } from './components/layout/Container';

function App() {
  return (
    <Router>
        <NavBar/>
        <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/projects" element={<Projects/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/newproject" element={<NewProject/>}/>
        </Routes>
        </Container>
        <Footer/>
    </Router>
  )
}

export default App

```

## Criando a Home

Vamos criar a nossa landing page, ou seja, apenas uma página inicial do nosso projeto.

- **Home.jsx**

```jsx

import styles from './Home.module.css'
import savings from '../../img/savings.svg'

export function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <a href=''>Criar Projeto</a>
            <img src={savings} alt='Costs'></img>
        </section>
    )
}

```

E já vamos estilizar nossa página.

- **Home.module.css**

```css

.home_container{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; /* Centralizar na vertical */
    justify-content: center; /* Centralizar na horizontal */
    padding: 4em;
}

.home_container h1{
   font-size: 2.5em;
   margin-bottom: .5em;
}

.home_container h1 span{
    color: #ffbb33;
    padding: 0.2em;
    background-color: #222;
}

.home_container p{
    margin-bottom: 1.5em;
    color:#7b7b7b;
}

.home_container img{
    width: 350px;
    margin: 2em 0;
}

```

Colocamos uma tag <a> de ancoragem apenas de referência, porque na verdade esse link será um componente que iremos utilizar algumas vezes.

Então, na pasta de "layout" vamos criar um componente dito como `LinkButton.jsx`.

- **LinkButton.jsx**

Vamos estar dinamificando o endereço da lincagem e o texto.

- `to` é a props referente a pra onde vamos.
- `text` baseado em onde vamos utilizar ele.

```jsx

import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'

export function LinkButton({to,text}){
    return(
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    )
}

```

- **LinkButton.module.css**

```css

.btn{
    background-color: #222;
    color:#fff;
    padding: 0.5em 1em ;  /*Estilo de botão - Menor na vertical e maior na horizontal*/
    font-size: 1.2em;
    text-decoration: none;
    transition: 0.5s;
}

.btn:hover{
    color: #ffbb33
}

```

- **Home.jsx**

```jsx
import { LinkButton } from '../layout/LinkButton'
import styles from './Home.module.css'
import savings from '../../img/savings.svg'

export function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to='/newproject' text='Criar Projeto'/>
            <img src={savings} alt='Costs'></img>
        </section>
    )
}

```

## Página para o formulário de projeto 

Para isso, vamos editar o nosso arquivo `NewProject.jsx` que já criamos e estilizá-lo.

- **NewProject.jsx** 

```jsx

import styles from './NewProject.module.css'

export function NewProject(){
    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionais os serviços</p>
            <p>Formulário</p>
        </div>
    )
}

```

- **NewProject.module.css**

```css

.newproject_container{
    width: 450px;
    margin: 0 auto;
    padding: 3em;
}

.newproject_container h1{
    margin-bottom: 0.5em;
}

.newproject_container p{
    color: #7b7b7b;
}

```

Precisamos também criar uma pasta chamada `Project` para abrigar o nosso servidor e todos os componentes referentes a ele.

Nele, inicialmente, vamos criar o componente `ProjectForm.jsx` para fazermos o formulário de criação do projeto e depois importá-lo para dentro do nosso arquivo `NewProject`.

- **ProjectForm.jsx**

Inicialmente, ele só terá essa aparência básica. Vamos deixar ele todo estruturado para depois o componentizarmos a nível de inputs, então por agora vamos os criar só por marcação, abstraindo os componentes.

```jsx

export function ProjectForm(){
    return (
        <form>
           <div>
             <input type="text" placeholder="Insira o nome do projeto"/>
           </div>
           <div>
            <input type="number" placeholder="Insira o orçamento total"/>
           </div>
           <div>
            {/* Categoria dos Projetos */}
            <select name="category_id">
                <option disabled selected>Selecione a categoria</option>
            </select>
           </div>
           <div>
            <input type="submit" value="Criar Projeto"/>
           </div>
        </form>
    )
}

```

- **NewProject.jsx**

```jsx

import { ProjectForm } from '../project/ProjectForm'
import styles from './NewProject.module.css'

export function NewProject(){
    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionais os serviços</p>
            <ProjectForm/>
        </div>
    )
}

```

## Componentização de Formulário

Vamos componentizar, ou seja, envolver cada parte do nosso formulário por componentes para que possamos lá na frente reutilizar essas linhas de código.

Vamos criar uma pasta chamada "form" para ter os componentes dos formulários. E nela vamos inserir o arquivo `Input.jsx`.

- **Input.jsx**

```jsx

import styles from './Input.module.css'

export function Input({type,text,name,placeholder,handleOnChange,value}){
    return (
       <div className={styles.form_control}>
        <label htmlFor={name}>{text}</label>
        <input 
            type={type}
            name={name} 
            id={name}
            value={value}
            placeholder={placeholder}
            onChange={handleOnChange}
        />
       </div>
    )
}

```

```css

.form_control{
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;  /*Afasta os outros inputs*/
}

.form_control label{
    margin-bottom: .6em; /*Afasta as labels dos inputs*/
    font-weight: bold;
}

.form_control input{
    padding: .7em; /*Afastamento interno do input*/
    border-radius: 0;
    border: none;
}

.form_control input::placeholder{
    color: #7b7b7b;
}

```

Vamos agora inserir os dados no `ProjectForm.jsx`

```jsx

import styles from './ProjectForm.module.css'
import {Input} from '../form/Input'

export function ProjectForm(){
    return (
        <form className={styles.form}>
           <Input 
            type='text' 
            text='Nome do Projeto' 
            name='name'
            placeholder='Insira o nome do projeto'
           />
            <Input 
            type='number' 
            text='Orçamento do Projeto' 
            name='name'
            placeholder='Insira o orçamento total'
           />
           <div>
            <select name="category_id">
                <option disabled selected>Selecione a categoria</option>
            </select>
           </div>
           <Input 
            type='submit' 
            value='Criar Projeto'
           />
        </form>
    )
}

```

Da mesma forma, que estilizamos os inputs vamos estilizar a "select".

```jsx

import styles from './Select.module.css'

export function Select({text,name,options,handleOnChange,value}){
    return (
       <div className={styles.form_control}>
        <label htmlFor={name}>{text}:</label>
        <select name={name} id={name}>
            <option>Selecione uma opção</option>
        </select>
       </div>
    )
}

```

Para o css você cria um arquivo no mesmo formato que os anteriores e copia e cola o que fizemos no input, modificando apenas "input" por "select".

- **ProjectForm.jsx**

```jsx

import styles from './ProjectForm.module.css'
import {Input} from '../form/Input'
import {Select} from '../form/Select'

export function ProjectForm(){
    return (
        <form className={styles.form}>
           <Input 
            type='text' 
            text='Nome do Projeto' 
            name='name'
            placeholder='Insira o nome do projeto'
           />
            <Input 
            type='number' 
            text='Orçamento do Projeto' 
            name='name'
            placeholder='Insira o orçamento total'
           />
           <Select 
            name='category_id' 
            text='Selecione a categoria'
           />
           <Input 
            type='submit' 
            value='Criar Projeto'
           />
        </form>
    )
}

```

- **Select.module.css**

```css

.form_control{
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
}

.form_control label{
    margin-bottom: .6em;
    font-weight: bold;
}

.form_control select{
    padding: .7em; 
    border-radius: 0;
    border: none;
}

```

Para finalizarmos, falta apenas o botão de enviar que para tal iremos criar um arquivo na pasta form, dita `SubmitButton.jsx`.

- **SubmitButton.jsx**

```jsx

import styles from './SubmitButton.module.css'

export function SubmitButton({text}){
    return (
       <div className={styles.form_control}>
       <button className={styles.btn}>{text}</button>
       </div>
    )
}

```

- **SubmitButton.module.css**

```css

.btn{
    background-color: #222;
    color: #fff;
    padding: 0.7em 1.2em;
    text-decoration: none;
    transition: .5s;
    cursor: pointer;
    border: none;
}

.btn:hover{
    color:#ffbb33;
}

```

- **ProjectForm.jsx**

```jsx

import styles from './ProjectForm.module.css'
import {Input} from '../form/Input'
import {Select} from '../form/Select'
import {SubmitButton} from '../form/SubmitButton'

export function ProjectForm(){
    return (
        <form className={styles.form}>
           <Input 
            type='text' 
            text='Nome do Projeto' 
            name='name'
            placeholder='Insira o nome do projeto'
           />
            <Input 
            type='number' 
            text='Orçamento do Projeto' 
            name='name'
            placeholder='Insira o orçamento total'
           />
           <Select 
            name='category_id' 
            text='Selecione a categoria'
           />
           <SubmitButton/>
        </form>
    )
}

```

No entanto, não sabemos se esse botão terá o fim de crição, edição..., logo para sabermos sua real funcionalidade podemos pedir ajuda ao componente pai <NewProject/> e colocar uma props no componente <ProjectForm/>.

- **NewProject.jsx**

```jsx

import { ProjectForm } from '../project/ProjectForm'
import styles from './NewProject.module.css'

export function NewProject(){
    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionais os serviços</p>
            <ProjectForm btnText="Criar projeto"/>
        </div>
    )
}

```

- **ProjectForm.jsx**

```jsx

import styles from './ProjectForm.module.css'
import {Input} from '../form/Input'
import {Select} from '../form/Select'
import {SubmitButton} from '../form/SubmitButton'

export function ProjectForm({btnText}){
    return (
        <form className={styles.form}>
           <Input 
            type='text' 
            text='Nome do Projeto' 
            name='name'
            placeholder='Insira o nome do projeto'
           />
            <Input 
            type='number' 
            text='Orçamento do Projeto' 
            name='name'
            placeholder='Insira o orçamento total'
           />
           <Select 
            name='category_id' 
            text='Selecione a categoria'
           />
           <SubmitButton text={btnText}/>
        </form>
    )
}

```

Se vocês notarem existe uma relação de props entre - LinkButton - que importa - NewProject - que import - ProjectForm - que possue uma prop para o componente - SubmitButton - que também tem uma prop que receberá como valor o que foi escrito em - ProjectForm -.

## Conexão da API com React

Agora que já criamos a base estrutural do nosso formulário e o componentizamos, vamos criar um sistema para inserção de dados.

Para isso, precisaremos criar uma API com um servidor em formato JSON, porque é mais simples de manipular. Logo, vamos começar a aplicar o JS no nosso projeto.

## Criando API no React 

> Para criação da nossa API vamos estar utilizando o JSON.sever, simulando o back-end no front-end.

Para tanto, vamos estar criando um arquivo dentro do src chamado `db.json`.

```json

{
  "projects": []
}

```

Quando fazemos isso, já conseguimos acessar uma página que contém esse dados. Mas para rodarmos o nosso backend precisamos configurar a sua chamada no terminal.

```json

"scripts": {
  "dev": "vite", // npm run dev
  "backend":"json-server --watch db.json --port 5000",
  "build": "vite build",
  "preview": "vite preview"
},

```

Isso aqui, é um mecanismo para facilitar a chamada, porque ao invés de executarmos "json-server...", só precisamos rodar no terminal `npm run backend`.

- **db.json**

```json

{
  "projects":[],
  "categories":[
      {
          "id": 1,
          "name": "Infraestrutura"
      },
      {
          "id": 2,
          "name": "Desenvolvimento"
      },
      {
          "id": 3,
          "name": "Design"
      },
      {
          "id": 4,
          "name": "Planejamento"
      }
  ]
}

```

- **ProjectForm.jsx**

```jsx

 const [categories, setCategories] = useState([]);

    fetch("http://localhost:5000/categories",{
        method: 'GET',
        headers:{
            'Content-Type':"application/json"
        }
    })
    .then((res) => res.json())  // promise
    .then((data) => {
        setCategories(data)
    })
    .catch((e) => console.log(err))

```

Fizemos um request com fetchAPI para a URl categories, pegando os dados que estão lá em JSON e colocando dentro do nosso state.

Como temos as categorias podemos mandá-las para o nosso select.

```jsx

import styles from './Select.module.css'

export function Select({text,name,options,handleOnChange,value}){
    return (
       <div className={styles.form_control}>
        <label htmlFor={name}>{text}:</label>
        <select name={name} id={name}>
            <option>Selecione uma opção</option>
            {
                options.map((option) => (
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))
            }
        </select>
       </div>
    )
}

```

O processo de mapeamento seleciona individualmente cada categoria que criamos.

Para exibirmos os dados, os nomes das categorias, fizemos `option.name`. Porque, é assim que acessamos o valor de um chave de um objeto.

Detalhe, o terminal precisa está aberto para se ter a conexão com os nossos dados. No entanto, as requisições estão acontecendo a todo momento, em um loop infinito. Para rompermos com isso, iremos precisar usar um outro estado que permite que seja renderizado apenas um única vez no nosso site `useEffect()`.

```jsx

import { useState, useEffect } from 'react'

import {Input} from '../form/Input'
import {Select} from '../form/Select'
import {SubmitButton} from '../form/SubmitButton'

import styles from './ProjectForm.module.css'

export function ProjectForm({btnText}){

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/categories",{
        method: 'GET',
        headers:{
            'Content-Type':"application/json"
        }
    })
        .then((res) => res.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((e) => console.log(err))
    },[])

    return (
        <form className={styles.form}>
           <Input 
            type='text' 
            text='Nome do Projeto' 
            name='name'
            placeholder='Insira o nome do projeto'
           />
            <Input 
            type='number' 
            text='Orçamento do Projeto' 
            name='name'
            placeholder='Insira o orçamento total'
           />
           <Select 
            name='category_id' 
            text='Selecione a categoria'
            options={categories}
           />
           <SubmitButton text={btnText}/>
        </form>
    )
}

```

## Inserindo os dados no API

Tendo feito a conexão com API, criando o nosso banco de dados com `Json.server` e imprimimo as opções do select no nosso front. Agora vamos inserir os dados na nossa API.

Para não poluirmos o nosso componente de form, vamos no componente pai - `newProject.jsx` - e colocaremos os metódos lá.

Antes de tudo, vamos estar importando um outro hook chamado `useNavigate()`, no qual nos permite fazer um redirect nas páginas do nosso sistema. Ele permite o redirecionamento do usuário quando precisarmos, no caso, quando der um `post` ele poderá redirecionar para outra página.

- **NewProject.jsx**

Os projetos terão atributos que inicialmente serão zerados, visto que serão atualizados ao longo do sistema.

```jsx

import { useNavigate  } from 'react-router-dom'
import { ProjectForm } from '../project/ProjectForm'
import styles from './NewProject.module.css'

export function NewProject(){

    const navigate = useNavigate ()

    function createPost(project){
        // initialize cost and services
        project.cost = 0
        project.services = []
    }

    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionais os serviços</p>
            <ProjectForm btnText="Criar projeto"/>
        </div>
    )
}

```

Estamos mandando os dados no post como string na rota de /projects. E agora só precisamos passar como prop essa função.

```jsx

import { useNavigate  } from 'react-router-dom'
import { ProjectForm } from '../project/ProjectForm'
import styles from './NewProject.module.css'

export function NewProject(){

    const navigate = useNavigate ()

    function createPost(project){

        // initialize cost and services
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects',{
            method: 'POST',
            headers:{
                'Content-Type':"application/json"
            },
            body: JSON.stringify(project)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)// redirect
        })
        .catch((e) => console.log(e))
    }

    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionais os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
        </div>
    )
}

```

Tendo passado a prop, vamos aceitá-la no nosso arquivo - `ProjectForm.jsx` -.

Além da nossa função, iremos passar os dados dos projetos `ProjectData` também, isso pois quando enviarmos esses dados para edição teremos que passar pela página pai (newProject), então precisamos vê se esses dados estão vindo ou não para inicializarmos eles ou não.

```jsx

import { useState, useEffect } from 'react'

import {Input} from '../form/Input'
import {Select} from '../form/Select'
import {SubmitButton} from '../form/SubmitButton'

import styles from './ProjectForm.module.css'

export function ProjectForm({btnText, handleSubmit, projectData}){

    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});

    // Quando fizermos o formulário de edição, ele irá verificar se já tem algum dado para editar, caso não..., não haverá nada a editar.

    useEffect(() => {
        fetch("http://localhost:5000/categories",{
        method: 'GET',
        headers:{
            'Content-Type':"application/json"
        }
    })
        .then((res) => res.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((e) => console.log(err))
    },[])

    return (
        <form className={styles.form}>
           <Input 
            type='text' 
            text='Nome do Projeto' 
            name='name'
            placeholder='Insira o nome do projeto'
           />
            <Input 
            type='number' 
            text='Orçamento do Projeto' 
            name='budget'
            placeholder='Insira o orçamento total'
           />
           <Select 
            name='category_id' 
            text='Selecione a categoria'
            options={categories}
           />
           <SubmitButton text={btnText} handleSubmit={handleSubmit}/>
        </form>
    )
}

```

Tendo já recebido o evento `handleSubmit`, precisamos criar um método para enviar os nossos dados, ou seja, fazer o `submit`.

No caso, pense da seguinte forma:
- Na tag <form> temos inputs, select e um button;
- Button: Vai receber uma prop dita `handleSubmit` que por sua vez se conecta com o componente pai, ativando a função `createPost`.

Porém, até agora só: Clicamos no botão --> Ativou o método Post.

Precisamos ainda, enviar os nossos dados para o nosso back-end e também captar esses dados para que seja enviado de fato algo. Focando-se nessa primeira parte do envio, vamos criar esse método `submit`.

```jsx

import { useState, useEffect } from 'react'

import {Input} from '../form/Input'
import {Select} from '../form/Select'
import {SubmitButton} from '../form/SubmitButton'

import styles from './ProjectForm.module.css'

export function ProjectForm({btnText, handleSubmit, projectData}){

    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});

    useEffect(() => {
        fetch("http://localhost:5000/categories",{
        method: 'GET',
        headers:{
            'Content-Type':"application/json"
        }
    })
        .then((res) => res.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((e) => console.log(err))
    },[])

    const submit = (e) => {
        e.preventDefault(); //não deixamos o formulário ser enviado com um page reload()
        handleSubmit(project) // executamos o método que foi passado pela prop e passo como argumento o array com os dados dos projetos cadastrados. 
    }

    return (
        <form onSubmit={submit} className={styles.form}>
           <Input 
            type='text' 
            text='Nome do Projeto' 
            name='name'
            placeholder='Insira o nome do projeto'
           />
            <Input 
            type='number' 
            text='Orçamento do Projeto' 
            name='budget'
            placeholder='Insira o orçamento total'
           />
           <Select 
            name='category_id' 
            text='Selecione a categoria'
            options={categories}
           />
           <SubmitButton text={btnText} handleSubmit={handleSubmit}/>
        </form>
    )
}

```

Dessa forma, vamos executar o método que foi passado como prop (handleSubmit) e passamos o projeto que está cadastrado no nosso formulário como argumento (projectData).

Certo, mas você pode se perguntar: "Eu não preciso alterar o meu componente `SubmitButton` para receber esse `submit`? Como que eu envio os dados se eu não atribui a esse button, por exemplo, o evento de onClick? 

⚜ **Dica:** Caso tenha dúvida quanto ao papel do `submit` no form e o impacto que ele traz no botão `SubmitButton` saiba o seguinte: Você naõ precisa alterar o componente `SubmitButton`, inserindo nele em si uma props para recber o `handleSubmit`e até colocar o evento de onClick, porque quando um formulário é submetido no React, o evento `onSubmit` é acionado automaticamente quando o botão dentro do formulário é clicado. É algo padrão do react, o próprio evento `onSubmit` fica esperando "ouvir" o evento de click. Agora, se atribuíssemos o submit no botão, precisariamos sim alterar manualmente o componente, por exemplo, da seguinte forma: 

- **SubmitButton.jsx**

```jsx
// Evento onClick precisaria ser acionado para pudesse dar certo essa lógica agora

import styles from './SubmitButton.module.css'

export function SubmitButton({text, handleSubmit}){
    return (
       <div className={styles.form_control}>
       <button className={styles.btn} onClick={handleSubmit}>{text}</button>
       </div>
    )
}

// Se você colocasse onSubmit seria preciso que o método submit estivesse aqui, ficando:

export function SubmitButton({text, handleSubmit}){

    const handleClick = (e) => {
        e.preventDefault()
        handleSubmit()
        console.log('Enviando os dados...')
    }
    
    return (
       <div className={styles.form_control}>
       <button className={styles.btn} onClick={handleClick}>{text}</button>
       </div>
    )
}

```

- **ProjectForm.jsx**

```jsx
// Exemplo do Form e Button
// onSubmit estaria no botão e não no form

return (
<form className={styles.form}>
    <Input 
    type='text' 
    text='Nome do Projeto' 
    name='name'
    placeholder='Insira o nome do projeto'
    value={project.name ? project.name : ''}
    handleOnChange={handleChange}
    />
    <Input 
    type='number' 
    text='Orçamento do Projeto' 
    name='budget'
    placeholder='Insira o orçamento total'
    value={project.budget ? project.budget : ''}
    handleOnChange={handleChange}
    />
    <Select 
    name='category_id' 
    text='Selecione a categoria'
    options={categories}
    handleOnChange={handleCategory}
    value={project.category ? project.category.id: ''}
    />
    <SubmitButton text={btnText} handleSubmit={submit}/>
</form>
)

// Se você colocasse onSubmit seria preciso que o método submit estivesse aqui, ficando:

const handleFormSubmit = () => {
    handleSubmit(project)
}

<SubmitButton text={btnText} handleSubmit={handleFormSubmit}/>

```

Agora, é interessante pontuar que mesmo fazendo tudo isso nada está sendo de fato enviado. Isso pois, precisamos de um evento para captar a mudança do estado dos inputs e selects, no caso precisamos aplicar o event `onChange`.

Nesse caso, precisamos atualizar o state do projeto, assim teremos agora dois métodos: O do `submit`, contendo a ideia de enviar os dados e o `handleChange`, método para captar os dados que serão enviados.

- **ProjectForm.jsx** 

```jsx

const handleChange = (e) => {
  setProject({...project,[e.target.name]: e.target.value})
}

```

Nessa segunda função, iremos alterar o nome do projeto. Para isso, faremos um destruction usando o recurso `spread operator`, ´pegando todos os dados dos projetos até então.

E diremos que o nome do input que é o name do projeto ou budget será igual ao value do input.

Assim, independente do input que preenchermos vai mudar alguma propriedade que foi de texto, isso porque vamos passar a mesma props para ambos os inputs, então se eu digitar em um ou em ambos vai estar dentro do meu array `project`.

Tendo feito isso, vamos adicionar esse método como um atributo dos nossos inputs. Dessa forma, poderemos pegar os dados que serão digitados e consequentemente enviar.

```jsx

import { useState, useEffect } from 'react'

import {Input} from '../form/Input'
import {Select} from '../form/Select'
import {SubmitButton} from '../form/SubmitButton'

import styles from './ProjectForm.module.css'

export function ProjectForm({btnText, handleSubmit, projectData}){

    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});

    useEffect(() => {
        fetch("http://localhost:5000/categories",{
        method: 'GET',
        headers:{
            'Content-Type':"application/json"
        }
    })
        .then((res) => res.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((e) => console.log(err))
    },[])

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(project)
    }

    const handleChange = (e) => {
        setProject({...project,[e.target.name]: e.target.value})
        console.log(project)
    }

    return (
        <form onSubmit={submit} className={styles.form}>
           <Input 
            type='text' 
            text='Nome do Projeto' 
            name='name'
            handleOnChange={handleChange}
            placeholder='Insira o nome do projeto'
           />
            <Input 
            type='number' 
            text='Orçamento do Projeto' 
            name='budget'
            handleOnChange={handleChange}
            placeholder='Insira o orçamento total'
           />
           <Select 
            name='category_id' 
            text='Selecione a categoria'
            options={categories}
           />
           <SubmitButton text={btnText} handleSubmit={handleSubmit}/>
        </form>
    )
}

```

Lembrando que já setamos esse evento `onChange()` lá no nosso arquivo `input.jsx`.

```jsx

import styles from './Input.module.css'

export function Input({type,text,name,placeholder,handleOnChange,value}){
    return (
       <div className={styles.form_control}>
        <label htmlFor={name}>{text}</label>
        <input 
            type={type}
            name={name} 
            id={name}
            value={value}
            placeholder={placeholder}
            onChange={handleOnChange}
        />
       </div>
    )
}

```

Tendo feito isso, vamos criar outro método, mas agora para captar as categorias, quando as selecionarmos.

```jsx

 const handleCategory = (e) => {
    setProject({...project, category:{
      id: e.target.value, // valor do input
      name: e.target.options[e.target.selectedIndex].text, // Conseguiremos acessar qual opção do select foi acessada pelo index. Já sabendo a opção, acessaremos o seu text.
    },
  })
}

/* 

Essa estrutura de pegar objeto com objeto com `handleCategory` é o ideal trabalhar com o banco de dados mongoDB.

*/

...

<Select 
  name='category_id' 
  text='Selecione a categoria'
  options={categories}
  handleOnChange={handleCategory}
  value={project.category ? project.category.id: ''} // Se existir algo dentro do array de projects referente as categorias, selecione o id, caso não, deixe em branco.
 />

```

Lembre-se de atualizar no arquivo de `Select.jsx`.

```jsx

import styles from './Select.module.css'

export function Select({text,name,options,handleOnChange,value}){
  return (
    <div className={styles.form_control}>
    <label htmlFor={name}>{text}:</label>
    <select 
      name={name} 
      id={name} 
      onChange={handleOnChange} 
      value={value || ''} // conexão do value
    >
      <option>Selecione uma opção</option>
      {
        options.map((option) => (
          <option value={option.id} key={option.id}>{option.name}</option>
        ))
      }
    </select>
    </div>
  )
}

```

Nesse caso, quando inserimos um value na tag <select> como uma prop e estamos usando o valor dessa prop, então precisamos ao chamar esse componente passar esse `value`, se não ele não vai se achar. 

Por isso, que quando tentamos selecionar, embora vissemos os valores, não conseguiamos selecioná-lo, porque o sistema em si não estava os interpretando com os nossos valores.

Agora, isso é diferente no caso dos inputs que eu posso ou não colocar e se tiver vazio esse campo o input deixa vazio e não dá nenhum tipo de erro em si. 

- **ProjectForm.jsx**

```jsx

<Input 
  type='text' 
  text='Nome do Projeto' 
  name='name'
  value={project.name ? project.name : ''}
  placeholder='Insira o nome do projeto'
  handleOnChange={handleChange}
/>
<Input 
  type='number' 
  text='Orçamento do Projeto' 
  name='budget'
  value={project.budget ? project.budget : ''}
  placeholder='Insira o orçamento total'
  handleOnChange={handleChange}
/>

```

A modificação dos dados, no caso, sua inserção acontece por meio da função `submit`.

```jsx

const submit = (e) => {
  e.preventDefault() // cancela o reload e possível perda de dados nos inputs
  handleSubmit(project)  // Essa parte se conecta com o nosso banco, mudando automaticamente os dados.
  console.log(project)
}

```

Com isso pronto, quando dê sucesso na adição de novos projetos vamos adicionar ele em outra página, ou seja, vamos redirecionar para outra página.

```jsx

import { useNavigate  } from 'react-router-dom'
import { ProjectForm } from '../project/ProjectForm'
import styles from './NewProject.module.css'

export function NewProject(){

    const navigate = useNavigate()

    function createPost(project){

        // initialize cost and services
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects',{
            method: 'POST',
            headers:{
                'Content-Type':"application/json"
            },
            body: JSON.stringify(project)
        })
        .then((res) => res.json())
        .then((data) => {
            // redirect
            navigate('/projects',{ message:'Projeto criado com sucesso!'})
            console.log(data)
        })
        .catch((e) => console.log(e))
    }

    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionais os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
        </div>
    )
}

``` 

Antes de irmos para a próxima etapa do projeto, é importante destacar a seguinte lógica: 

Quando não tinhámos o evento `onChange()`, a gente só estava aplicando a ideia de enviar dados com o `submit`, mas os dados em si não estavam sendo enviados (só estava ativando o evento), porque o `submit` não captava os values dos inputs e select. Por isso, que implementamos esse outro método.

## Mensagens do Sistema

Nesta parte do projeto, vamos estar inserindo a lógica de mensagens do nosso sistema. Essa lógica, estará sendo aplicada quando a nossa página for renderizada para a página "/projects".

Agora, não utilizaremos apenas uma única mensagem, mas várias, então podemos componentizar também essa questão no arquivo `Projects.jsx`.

- **NewProject.jsx**

```jsx

.then((data) => {
    // redirect
    navigate('/projects',{ message:'Projeto criado com sucesso!'})
    console.log(data)
})

```

Aqui, a mensagem está sendo semi-enviada, mas usaremos essa parte do código terá que ser impresso na página de projetos ('/projects'), porque é para onde está indo o navigate.

Para isso, vamos criar um arquivo na pasta "layout" dito como `Message.jsx`.

```jsx

import styles from './Message.module.css';

export function Message({type,msg}){
    return (
       <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
    )
}

// Type = Sucesso, Error...

```

Como podem vê estamos usando, novamente, a lógica de classe dinâmica, ou seja, uma classe será fixa (styles.message) e outra virá das propriedades (styles[type]).

- **Message.module.css**

```css

.message{
    width: 100%;
    padding: 1em;
    border: 1px solid #000;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 2em;
    border-radius: 5px;
}

.sucess{
    color: #155724;
    background-color: #d4edda ;
    border-color: #c3e6cb;
}

.error{
    color: #721c24;
    background-color: #f8d7da ;
    border-color: #f5c6cb;
}

```

- **Projects** 

```jsx

import {Message} from '../layout/Message';

export function Projects(){
    return (
       <div>
        <h1>Meus Projetos</h1>
        <Message msg='Alguma Mensagem'/>
       </div>
    )
}

```

O "type" define como a mensagem será impressa. Então, se colocassemos `type='sucess'` a mensagem apareceria verdinha e afins, baseada nas configurações que fizemos.

Vamos criar um "state" do tempo que a mensagem será exibida, a depender de alguma condição.

Vamos usar o conceito de "fragments", porque a div que temos é o elemento pai, então com esse recurso poderemos usar esse state da seguinte forma:

- **Message.jsx**

```jsx

import { useState, useEffect } from 'react';

import styles from './Message.module.css';

export function Message({type,msg}){

    const [visible,setVisible] = useState(false)

    return (
        <>
            {visible && (
                <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
            )}
       </>
    )
}

```

Se o estado da mensagem estiver 'true', ativado, então exibirá a estrutura da nossa mensagem, caso não...

Tendo feito isso, vamos usar o `useEffect()` para fazermos o nosso timer de exibição a depender da condição que nesse caso é a mensagem.

```jsx

useEffect(() => {

    if(!msg){
        setVisible(false)
        return
    }

    setVisible(true);

    const timer = setTimeout(() => {
        setVisible(false)
    }, 3000)

    return () => clearTimeout(timer)

},[msg])

```

Com o `setTimeout()` estamos dizendo que após 3s a mensagem voltará ao seu estado inicial de exibição, ou seja, false.

E para sempre estar retornando algo e não der um erro, não apenas limpamos (cancelamos) a chamado do timeout.

Pela lógica que está agora, sempre vai dar sucesso, mas não se preocupe, depois vamos implementar a noção de error.

Um outro ponto, é que precisamos também dinamizar a mensagem em si, não a deixando fixa. Para isso, vamos usar um hook chamado `useLocation()` para estarmos localizando a "message" do navigate.

- **Projects.jsx**

```jsx

import {Message} from '../layout/Message';
import { useLocation  } from 'react-router-dom'

export function Projects(){

    const location = useLocation()
    let message = ''

    if(location.state){
        message = location.state.message
    }

    return (
       <div>
        <h1>Meus Projetos</h1>
        {
            message && <Message type='sucess' msg={message} />
        }
       </div>
    )
}

```

Além disso, estaremos também condionando o nosso componente mensagem, pois se o location encontrar a variável "message" com algo dentro la do navigate, então ele exibirá o componente.

Uma alteração importante !!! A forma como colocamos o nosso `useNavigate()` estava no antigo formato quando antes era `usenavigate()`, então precisamos deixar assim:

- **Projects.jsx**

```jsx

const navigate = useNavigate()

// redirect
navigate('/projects',{state:{ message:'Projeto criado com sucesso!'}})
console.log(data)

```

## Criando Dashboard

Nessa aula, vamos nos concentar em chamar os projetos criados como cards na nossa página de projetos.

- **Projects.jsx** 

```jsx

import { useLocation  } from 'react-router-dom'

import {Message} from '../layout/Message';
import {Container} from '../layout/Container';
import {LinkButton} from '../layout/LinkButton';

import styles from './Projects.module.css';

export function Projects(){

    const location = useLocation()
    let message = ''

    if(location.state){
        message = location.state.message
        console.log(location)
    }

    return (
       <div className={styles.project_container}>
        <div className={styles.title_container}>
            <h1>Meus Projetos</h1>
            <LinkButton to='/newproject' text='Novo Projeto'/>
        </div>
        { message && <Message type='sucess' msg={message} />}
       <Container customClass='start'>
        <p>Projetos...</p>
       </Container>
       </div>
    )
}

```

Tirando a configuração básica que estava antes, vamos estar adicionando o nosso componente `container`, apenas por requisitos de estilos. 

E também, além do título "Meus Projetos", estaremos nessa página colocando um botão, ele vindo como um componente pronto, para levar o usuário até a página de criação de projetos.

- **Projects.module.css** 

```css

.project_container{
    padding: 2em; /* espaçamento interno dos elementos */
}

.title_container{
    display: flex; /* cada elemento um do lado do outro */
    justify-content: space-between; /* espaçamento lateral igual entre os elementos*/
    margin-bottom: 2m;
}

```

## Resgatando Projetos no Bando de Dados

Após termos configurado a página de projetos, vamos conectar essa parte com o nosso servidor.

Vamos criar um arquivo chamado `ProjectCard` para onde tem <p>Projetos</p> ter essa chamada do componente que pegará todos os projetos que temos no nosso banco de dados.

- **ProjectCard.jsx**

```jsx

import { useLocation  } from 'react-router-dom'

import {BsPencil, BsFillTrashFill} from 'react-icons/bs'

import styles from './ProjectCard.module.css';

export function ProjectCard({id,name,budget,category,handleRemove}){

    return (
       <p>projetos</p>
    )
}

```

Agora precisamos fazer as requisições no componente pai - `Projects.jsx`.

- **Projects.jsx**

```jsx

import { useLocation  } from 'react-router-dom'
import { useState, useEffect} from 'react';

import {Message} from '../layout/Message';
import {Container} from '../layout/Container';
import {LinkButton} from '../layout/LinkButton';
import {ProjectCard} from '../project/ProjectCard';

import styles from './Projects.module.css';

export function Projects(){

    const [projects, setProjects] = useState([]); // estado para salvar os projetos

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
        console.log(location)
    }

    // Para buscar todos os projetos
    // Usamos o useEffect para evitar que loop infinito de requisições

    useEffect(() => {
        fetch("http://localhost:5000/projects",{
        method: 'GET',
        headers:{
            'Content-Type':"application/json"
        }
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setProjects(data)
        })
        .catch((e) => console.log(err))  // assim conseguiremos debuggar depois
    },[])  // estaremos controlando um array vazio

    return (
       <div className={styles.project_container}>
        <div className={styles.title_container}>
            <h1>Meus Projetos</h1>
            <LinkButton to='/newproject' text='Novo Projeto'/>
        </div>
        { message && <Message type='sucess' msg={message} />}
       <Container customClass='start'>
        { projects.length > 0 && (
            projects.map((project) => <ProjectCard 
                id={project.id}
                name={project.name}
                budget={project.budget}
                category={project?.category?.name}  // Fazemos isso, porque tem alguns projetos com a categoria indefinida, então o código quebra colocando "?".
                key={project.id}
                />))}
       </Container>
       </div>
    )
}

```

Criamos um `useState` para salvar todos os nossos projetos. Os quais, serão requisitados, por meio do fetch que fizemos dentro do `useEffect`. 

Após isso, na chamada do nosso card, fizemos uma verificação, querendo saber se existe ou não algum projeto dentro do nosso array, se sim, será feito um mapeamento do array e cada projeto será renderizado no nosso componente `ProjectCard`, por meio de suas respectivas props. 

No caso, se eu colocar `budget={project.budget}` eu estarei pegando o orçamento de cada projeto.

Tendo feito isso, vamos configurar melhor o nosso card, para podermos selecionar cada valor seu.

- **ProjectCard.jsx**

```jsx

import { useLocation  } from 'react-router-dom'

import {BsPencil, BsFillTrashFill} from 'react-icons/bs'

import styles from './ProjectCard.module.css';

// Podemos fazer dessa forma 
export function ProjectCard(props){

    return (
       <p>{props.name}</p>
    )
}

// Mas também podemos chamar diretamente
export function ProjectCard({id,name,budget,category,handleRemove}){

    return (
       <p>{name}</p>
    )
}

```

Já tendo noção de que os dados estão vindo, vamos configurar melhor esse "html".

- **ProjectCard.jsx**

```jsx

import {BsPencil, BsFillTrashFill} from 'react-icons/bs'
import styles from './ProjectCard.module.css';

import {Link} from 'react-router-dom'

export function ProjectCard({id,name,budget,category,handleRemove}){

    return (
       <div className={styles.project_card}>
        <h4>{name}</h4>
        <p>
            <span>Orçamento:</span> R${budget}
        </p>
        <p className={styles.category_text}>
            <span className={`${styles[category?.toLowerCase()]}`}></span> {category}
        </p>
        {/*Não vamos atribuir funcionalidade agora, mas ao menos deixaremos a estrutura pronta*/}
        <div className={styles.project_card_actions}>
            <Link to='/'>
                <BsPencil/> Editar
            </Link>
            <button>
                <BsFillTrashFill/> Excluir
            </button>
        </div>
       </div>
    )
}

```

- **ProjectCard.module.css**

```css

.project_card{
    padding: 1em; /* Espaçamento lateral interno*/
    border: 1px solid #7a7a7a;
    border-radius: 5px;
    width: 24%; /* 24% do total disponível - Ele irá se ajustar de acordo com a quantidade de cards*/
    margin: 0.5%; /*Mantém cada card separado de si*/
}

.project_card h4{
    background-color: #222;
    color: #ffbb33;
    padding: 0.4em;
    margin-bottom: 1.3em;
    font-size: 1.3em;
}

.project_card p{
    color: #7a7a7a;
    margin-bottom: 1em;
}

.project_card p span{
    font-weight: bold;
}

.category_text{
    display: flex;
    align-items: center;
}

.category_text span{
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color:#ccc;
    margin-right: 5px;
}

.category_text .infraestrutura{
    background-color: #ffaebc;
}

.category_text .desenvolvimento{
    background-color: #a0e7e5;
}

.category_text .design{
    background-color: #b4f8c8;
}

.category_text .planejamento{
    background-color: #fbe7c6;
}

/* Estilizamos os botões de editar e remover, mas ainda não lhe atribuímos funcionalidade*/

.project_card_actions{
    margin-top: 1.2em;
    display: flex;
    align-items: center;
}

.project_card_actions a,
.project_card_actions button{
    text-decoration: none;
    border: none;
    background-color: #fff;
    color: #222;
    font-size: .9em;
    padding: .6em 1em;
    margin-right: 1em;
    cursor: pointer;
    border: 1px solid #222;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
}

.project_card_actions svg{
    margin-right: 0.5em;
}

.project_card_actions a:hover,
.project_card_actions button:hover{
    background-color: #222;
    color: #ffbb33;
}

```

## Conversão de Orçamento 

É interessante que o usuário tenha escolha na hora de selecionar o seu orçamento, podendo escolher entre dados reais ou configurados na moeda dólar.

Para implementarmos isso no nosso código precisaremos de 4 funções e dois estados adicionais.

As funções `handleChange`, `handleCurrencyChange`, e `handleBudgetAndCurrencyChange` são responsáveis por manipular o estado do componente `ProjectForm `de acordo com as interações do usuário.

Antes de começarmos a codar, é importnate saber que a lógica que se seguirá nessa parte será da seguinte forma, tudo dentro do arquivo `ProjectForm.jsx`:

- Teremos um input de entrada de orçamento, ou seja, onde o usuário informará o preço do seu projeto;
- Teremos um select para que o usuário decida qual moeda vai usar. Esse select, inicialmente, terá como valor padrão na moeda real;
- Por fim, teremos um último input que servirá apenas para exibir os valores convertidos, a depender da moeda selecionada.

Vamos primeiro criar os nossos estados:

```jsx

 // Conversão de Moeda
const [currency, setCurrency] = useState("BRL"); // Estado da moeda
const [convertedBudget, setConvertedBudget] = useState(projectData ? projectData.converted_budget : null); // Estado do valor convertido 

```

- `handleChange`: é acionada sempre que o usuário digita ou seleciona algo em um dos campos de entrada (Input ou Select) do formulário. 

```jsx

const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
    handleBudgetAndCurrencyChange(value, currency);
    console.log(project)
}

```

Ela recebe o evento (e) como argumento, extrai o nome do campo que foi alterado (name) e o novo valor (value) do campo, atualiza o estado do projeto (project) com essas informações usando o operador spread (...), e então chama a função `handleBudgetAndCurrencyChange` para atualizar o estado do orçamento convertido (convertedBudget) de forma automática no próprio input, com base no novo valor do orçamento (project.budget) e na moeda selecionada (currency).

- `convertedCurrency`: É um método voltado para a conversão propriamente dita dos vlaores que iremos digitar no nosso input.

```jsx

const convertCurrency = (value, currency) => {
const conversionRate = currency === 'BRL' ? 1.0 : 5.25; // exemplo de taxa de conversão
return parseFloat(value) * conversionRate;
};

```

- `handleCurrencyChange`: é acionada quando o usuário seleciona uma nova moeda no menu suspenso de seleção de moeda. 

```jsx

    const handleCurrencyChange = (e) => {
    const newCurrency = e.target.value;
    setCurrency(newCurrency);
    handleBudgetAndCurrencyChange(project.budget, newCurrency);
};

```

Ela recebe o evento (e) como argumento, extrai o novo valor selecionado (newCurrency), atualiza o estado da moeda (currency) com esse novo valor, e então chama a função `convertCurrency` para atualizar o estado do orçamento convertido (convertedBudget) com base no valor atual do orçamento (project.budget) e na nova moeda selecionada (newCurrency).

- `handleBudgetAndCurrencyChange`: É uma combinação das duas funções acima. Ela é acionada sempre que o usuário digita algo no campo de entrada de orçamento (budget) ou seleciona uma nova moeda no menu suspenso de seleção de moeda. 

```jsx

const handleBudgetAndCurrencyChange = (budget, currency) => {
    const newConvertedBudget = convertCurrency(budget, currency);
    setConvertedBudget(newConvertedBudget);
    setProject({ ...project, budget: budget, converted_budget: newConvertedBudget });
};

```

Ela recebe o evento (e) como argumento, extrai o nome do campo que foi alterado (name) e o novo valor (value) do campo, atualiza o estado do projeto (project) com essas informações usando o operador spread (...), atualiza o estado da moeda (currency) com a nova moeda selecionada (newCurrency), e então chama a função `convertCurrency` para atualizar o estado do orçamento convertido (convertedBudget) com base no novo valor do orçamento (budgetValue) e na nova moeda selecionada (newCurrency).

- **Diferença entre as funções** 

As funções `handleChange` e `handleCurrencyChange` são utilizadas separadamente para atualizar os estados project e currency quando o usuário altera os valores dos inputs de nome do projeto e de moeda, respectivamente. 

Já a função `handleBudgetAndCurrencyChange` é utilizada para atualizar os estados project e convertedBudget quando o usuário altera o valor do input de orçamento, ou quando o usuário altera a moeda selecionada.

Cada uma dessas funções tem uma responsabilidade específica e é utilizada em um contexto diferente dentro do código. Isso torna o código mais organizado e mais fácil de entender e manter. Se utilizássemos somente a função `handleBudgetAndCurrencyChange`, o código poderia se tornar mais difícil de entender e manter, principalmente se houver necessidade de alterações futuras.

