import React, {FC} from 'react';
import {IProductModel} from "../model/IProductModel";
type ITypeProps = {item:IProductModel}
const Product:FC<ITypeProps> = ({item}) => {
    return (
        <div>
            <h3>{item.id}-{item.title} Price-{item.price}$</h3>
            <img src={item.thumbnail} alt={item.title}/>
            <p>{item.description}</p>
            <p>{item.category}</p>
            <p>Discount - {item.discountPercentage}%</p>
            <p>Rating - {item.rating}</p>
            <p>Stock - {item.stock}</p>
            <ul>{item.tags.map(tag=> <li>{tag}</li>)}</ul>
            <p>{item.brand}</p>
            <p>{item.sku}</p>
            <p>Weight - {item.weight}</p>
            <p>Dimensions-  Depth:{item.dimensions.depth}, Height:{item.dimensions.height}, Width:{item.dimensions.width}</p>
            <p>{item.warrantyInformation}</p>
            <p>{item.shippingInformation}</p>
            <p>{item.availabilityStatus}</p>
            <div>{item.reviews.map(review =><p>{review.reviewerName} {review.reviewerEmail} {review.comment} {review.date} {review.rating}</p>)}</div>
            <p>{item.returnPolicy}</p>
            <p>{item.minimumOrderQuantity}</p>
            <p>{item.meta.barcode} {item.meta.createdAt} {item.meta.qrCode} {item.meta.updatedAt} </p>
             {item.images.map((image) =>  <img src={image}/>)}
        </div>
    );
};

export default Product;