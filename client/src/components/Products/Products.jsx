import React from 'react';
import { Link } from "react-router-dom";

export default function Products({ products, addToCart ,className}) {
        console.log("버튼이 클릭되었습니다");




    return (
        <div className={className}>
            {products && products.length > 0 ? (
                products.map((product) => (
                    <div key={product.id} className={'col-3'}>
                        <Link to={`/products/product?id=${product.id}`}>
                            <h1>{product.name}</h1>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                        </Link>
                        <button onClick={() => addToCart(product)}>상품 담기</button>{/*버튼함수 생성*/}
                    </div>
                ))
            ) : (
                <p>상품이 없습니다.</p>
            )}
        </div>
    );
}
