const products = [
    {
        id: "1" ,
        stock:1,
        name: "Disco Sólido",
        category: "Discos Sólidos",
        price:2500,
        img: './images/imagen1.jpg',
        description: 'Descripción del producto'
    },
    {
        id: "2" ,
        stock:1,
        name: "Fuente",
        category: "Fuentes",
        "price":1500,
        "img": './images/imagen2.jpg',
        "description": 'Descripción del producto'
    },
    {
        id: "3" ,
        stock:1,
        name: "Gabinete",
        category: "Gabinetes",
        price:10000,
        img: './images/imagen3.jpg',
        description: 'Descripción del producto'
    },
    {
        id: "4" ,
        stock:1,
        name: "Tarjeta Gráfica",
        category: "Tarjetas Gráficas",
        price:12000,
        img: './images/imagen4.jpg',
        description: 'Descripción del producto'
    },
    {
        id: "5" ,
        stock:1,
        name: "Procesador",
        category: "Procesadores",
        price:1400,
        img: './images/imagen5.jpg',
        description: 'Descripción del producto'
    },
    {
        id: "6" ,
        stock:1,
        name: "Memoria RAM",
        category: "Memorias",
        price:11000,
        img: './images/imagen6.jpg',
        description: 'Descripción del producto'
    },
    
]




export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}

export default products