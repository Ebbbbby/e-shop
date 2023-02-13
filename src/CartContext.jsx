import { createContext, useState } from "react";


export const CartContext = createContext({
    items:[],
    addToCart:()=>{},
    getProduct:()=>{},
    getSingleProduct:()=>{},
    sortCartProduts:()=> {},
    removeOneFromCart:()=>{},
    deleteFromCart: ()=>{},
    getTotalCost:()=>{}
})