import React, {FC} from 'react'
import {IProductModel} from "../model/IProductModel";
import {ProductsObject} from "../../data";
import Product from "../product/Product";


const Products:FC = () => {
    const products:IProductModel[] = ProductsObject.products
    return (
        <div>
            {
                products.map((product,index)=>(<Product key={index} item={product}/>) )
            }
        </div>
    );
};

export default Products;