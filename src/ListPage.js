import React from "react";
import Product from "./Product.js";

const ListPage = ({ searchResults }) => {

const results = searchResults.map(product => <Product key={product.id} 
    product={product} /> )

    const content = results?.length ? results: <article>
        <p>No Matching products</p>
    </article>

    return (
        <main className="res1">{content}</main>
    )
} 
export default ListPage