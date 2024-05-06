import logo from './logo.png'
import apartment from './apartment.jpg'
import cars from './cars.jpg'
import clothing from './clothing.jpg'
import bike from './bike.jpg'
import electronic from './electronics.jpeg'
import furniture from './furniture.jpg'
import bike3 from './bike3.png'
import bike4 from './bike4.png'
import bike5 from './bike5.png'
import car1 from './car1.png'
import car2 from './car2.png'
import car3 from './car3.png'
import car4 from './car4.png'
import car5 from './car5.png'
import { productDB } from '../firebase'

export const assets={
    logo
}

export const item_list = [
    // {
    //     // item_name : "Electronics",
    //     // item_image : electronics
    // },
    {
        item_name : "Cars",
        item_image : cars
    },
    {
        item_name : "Bikes",
        item_image : bike
    },
    {
        item_name : "Furniture",
        item_image : furniture
    },
    {
        item_name : "Clothing",
        item_image : clothing
    },
    {
        item_name : "Electronics",
        item_image : electronic
    },
    {
        item_name : "Apartment",
        item_image : apartment
    }
]



export const product_list = [
    {
        id:"1",
        name:"car1",
        image:car1,
        price:1000,
        description:"This is the description of the product",
        catogory:"Cars"
    },
    {
        id:"2",
        name:"car2",
        image:car2,
        price:1000,
        description:"This is the description of the product",
        catogory:"Cars"
    },
    {
        id:"3",
        name:"car3",
        image:car3,
        price:1000,
        description:"This is the description of the product",
        catogory:"Cars"
    },
    {
        id:"4",
        name:"car4",
        image:car4,
        price:1000,
        description:"This is the description of the product",
        catogory:"Cars"
    },
    {
        id:"5",
        name:"car5",
        image:car5,
        price:1000,
        description:"This is the description of the product",
        catogory:"Cars"
    },
    {
        id:"6",
        name:"bike3",
        image:bike3,
        price:1000,
        description:"This is the description of the product",
        catogory:"Bikes"
    },
    {
        id:"7",
        name:"bike4",
        image:bike4,
        price:1000,
        description:"This is the description of the product",
        catogory:"Bikes"
    },
    {
        id:"8",
        name:"bike5",
        image:bike5,
        price:1000,
        description:"This is the description of the product",
        catogory:"Bikes"
    },

]