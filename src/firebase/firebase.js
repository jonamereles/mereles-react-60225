
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc,} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDSe6rvCHe792VzynwLTn7ULsGNQWXF2LA",
    authDomain: "react-2024-aaa25.firebaseapp.com",
    projectId: "react-2024-aaa25",
    storageBucket: "react-2024-aaa25.appspot.com",
    messagingSenderId: "933876982307",
    appId: "1:933876982307:web:3cb3de9e214211ceb10796"
};

const app = initializeApp(firebaseConfig);
const bdd = getFirestore()




const prods = [
    
        {
            "title": "Bajo",
            "brand": "Ibanez-GSR200 BK-",
            "price": 500,
            "stock": 12,
            "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-aaa25.appspot.com/o/1.jpg?alt=media&token=3e97adbb-cace-4105-bded-3ca30e189f8a",
            "Category": "cuerdas"
        },
        {
            "title": "Bateria",
            "brand": "Yamaha -Stage Custon Birch-",
            "price": 1500,
            "stock": 10,
            "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-aaa25.appspot.com/o/2.jpg?alt=media&token=30a6e2f9-d762-48bb-923e-da886421adce",
            "Category": "percusion"
        },
        {
            "title": "Guitarra",
            "brand": "Yamaha -APX600-",
            "price": 1200,
            "stock": 10,
            "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-aaa25.appspot.com/o/3.jpg?alt=media&token=19f89049-916e-467c-a353-618293ac7cef",
            "Category": "cuerdas"
        },
        {
            "title": "Teclado",
            "brand": "sintetizador korg-kross 2 88 teclas-",
            "price": 2200,
            "stock": 10,
            "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-aaa25.appspot.com/o/4.jpg?alt=media&token=284db63d-cbc9-45d5-8a9d-935b72ea5d5c",
            "Category": ""
        },
        {
            "title": "Condenser",
            "brand": "Samson CL8a",
            "price": 350,
            "stock": 10,
            "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-aaa25.appspot.com/o/5.jpg?alt=media&token=0636cd10-7b8e-4160-ab6b-784aaaceb960",
            "Category": "varios"
        },
        {
            "title": "Micrófono",
            "brand": "Shure SM58",
            "price": 13,
            "stock": 320,
            "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-aaa25.appspot.com/o/6.jpg?alt=media&token=4903f7d8-6419-48f0-80c2-8d5fa3f4fcf3",
            "Category": "varios"
        },
        {
            "title": "Amplificador de Auricular",
            "brand": "Behringer HA400",
            "price": 25,
            "stock": 15,
            "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-aaa25.appspot.com/o/6.jpg?alt=media&token=4903f7d8-6419-48f0-80c2-8d5fa3f4fcf3",
            "Category": "varios"
        },
        {
            "title": "Cajon Puruano",
            "brand": "LP",
            "price": 50,
            "stock": 10,
            "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-aaa25.appspot.com/o/8.jpg?alt=media&token=91727d4b-101a-4999-a248-45e8880c8013",
            "Category": "percusion"
        },
        {
            "title": "trompeta",
            "brand": "Yamaha YTR2330",
            "price": 1000,
            "stock": 10,
            "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-aaa25.appspot.com/o/9.jpg?alt=media&token=28eb28d8-0b66-4347-b771-4c32b17e5281",
            "Category": "vientos"
        },
        {
            "title": "consola",
            "brand": "Phonic HELIXBOARD12U",
            "price": 500,
            "stock": 10,
            "img": "https://firebasestorage.googleapis.com/v0/b/react-2024-aaa25.appspot.com/o/10.jpg?alt=media&token=6b1da4b0-49ab-4f92-a4fc-3619eb6a95e4",
            "Category": "varios"
        }
    ]

export const createProducts = async () => {
    prods.forEach(async (prod) => {
        await addDoc(collection(bdd, "Productos"), {
            title: prod.title,
            bland: prod.bland,
            price: prod.price,
            stock: prod.stock,
            img: prod.img,
            Category: prod.Category
        })
    })
}

export const getProducts = async () => {
const Productos = await getDocs(collection(bdd, "Productos"))
const items = Productos.docs.map(prod => {return { ...prod.data(), id: prod.id}})
return items
}
export const getProduct = async (id) => {
const Productos = await getDoc(doc(bdd, "Productos", id))
const items =  { ...Producto.data(), id: Producto.id}
return items
}

getProducts()