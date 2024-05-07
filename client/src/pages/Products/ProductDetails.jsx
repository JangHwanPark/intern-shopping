import React from 'react';
import useFetch from "../../hooks/useFetch";
import {useSearchParams} from "react-router-dom";
import Products from "../../components/Products/Products";

export default function ProductDetails() {
    const [query, setQuery] = useSearchParams();
    const id = query.get('id');
    console.log(`ProductDetails id: ${id}`);

    const {data, error, loading} = useFetch(`products/product?id=${id}`);
    const products = data?.product;
    console.log(`ProductDetails data: ${JSON.stringify(data)}`)

    return (
        <div>
            <Products products={products}/>
        </div>
    );
}