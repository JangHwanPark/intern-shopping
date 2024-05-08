import React from 'react';
import Products from "../components/Products/Products";
import CarouselSlider from "../components/CarouselSlider/CarouselSlider";
import useFetch from "../hooks/useFetch";
import SearchBar from "../components/SearchBar/SearchBar";

export default function Home() {
    const {data, error, loading} = useFetch('products');
    
    // json 속성에 직접 접근
    const products = data?.products;
    console.log(`Home products: ${products}`);

    return (
        <>
            <SearchBar/>
            <CarouselSlider/>
            <div className={'col-12'}>
                {loading && <div>Loading...</div>}
                {error && <div>{error}</div>}
                <Products products={products} className={'grid'}/>
            </div>
        </>
    );
}