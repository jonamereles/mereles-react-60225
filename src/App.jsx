import './style/App.css'
import { Test } from './components/Test'
import { ItemCount } from './components/ItemCount/ItemCount'
import  NavBar  from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'

export const App = () => {
  return (
    <>
      <NavBar />
      {/* <CartWidget/> */}
      <ItemCount />
      <ItemListContainer greeting={"El Conser On-Line... "} />
      <Test mensaje={"Guitarra"} />
      <Test mensaje={"Bateria"} />
      <Test mensaje={"Bajo"} />
      <Test mensaje={"Piano"} />
      <Test mensaje={"Canto"} />
    </>
  )
}
