import React from 'react';
import { useLocation } from 'react-router-dom';
import Products from '../../components/Products/Products';
import useFetch from "../../hooks/useFetch";

export default function SearchByProducts() {
    // URL의 쿼리 스트링에서 검색어 추출
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get('name');

    const param = `products?name=${name}`
    const {data, error, loading} = useFetch(param, [name]);

    console.log(`SearchByProducts name: ${name}`)
    console.log(`SearchByProducts data: ${data}`)
    return (
        <div>
            <h2>검색 결과: {name}</h2>
            {loading && <p>로딩 중...</p>}
            {error && <p>오류: {error}</p>}
            <Products products={data} query={name} />
        </div>
    );
}