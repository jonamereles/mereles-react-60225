
import './style/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Test } from './components/Test'
import { ItemCount } from './components/ItemCount/ItemCount'
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Item } from './components/Item/Item'
import { Dolar } from './components/Dolar/Dolar'
import { Footer } from './components/Footer'
import { Cart } from './components/cart'
import { Checkout } from './components/Checkout'
import { ItemDetailsContainer } from './components/ItemDetailsContainer'
import { NotFound } from './components/NotFound'


export const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/Category/:cid' element={<ItemListContainer />} />
        <Route path='/product/:pid' element={<ItemDetailsContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Dolar />
      <Footer />
    </BrowserRouter>
{/* 
      <Item product={{ title: "Bajo", marca: "Ibanez", description: "-GSR200 BK-",  stock: 30, price: 500, img: "https://audiomusica.vtexassets.com/arquivos/ids/157152/preview--12-.jpg?v=637849636941730000" }} />
      <Item product={{ title: "Bateria", marca: "Yamaha", description: "-Stage Custon Birch-",  stock: 20, price: 1550, img: "https://solomusica.com.ar/sm2020/9571-home_default/yamaha-sbp2f5-stage-custom-birch.jpg" }} />
      <Item product={{ title: "Guitarra", marca: "Yamaha", description: "-APX600-",  stock: 30, price: 1200, img: "https://k584otvs.cdn.imgeng.in/sites/ymlv5.19/productimages/900x900/GAPX600-SUPER.jpg?1683188817" }} />
      <Item product={{ title: "Teclado sintetizador", marca: "korg", description: "-kross 2 88 teclas-",  stock: 10, price: 2200, img: "https://http2.mlstatic.com/D_NQ_NP_655108-MLA32347586790_092019-O.webp" }} />
      <Item product={{ title: "Microfono", marca: "Shure", description: "-MV7-X-",  stock: 30, price: 500, img: "https://http2.mlstatic.com/D_NQ_NP_877301-MLA51359980272_082022-O.webp" }} /> */}

      
    </>
  )
}
