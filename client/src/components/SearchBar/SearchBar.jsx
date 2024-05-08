import React from 'react';
import {useNavigate} from "react-router-dom";

export default function SearchBar() {
    const navigate = useNavigate();
    const [userInput, setUserInput] = React.useState('');
    const onChange = (e) => setUserInput(e.target.value);

    // 상품정보 받아오기
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('검색어:', userInput);

        // 입력값 인코딩 후 쿼리스트링 적용
        const encodedInput = encodeURIComponent(userInput);
        console.log('인코딩된 검색어:', encodedInput);
        navigate(`products/search/product?name=${encodedInput}`);
    }

    return (
        <div className={'col-12'}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name={userInput}
                    placeholder="상품을 검색하세요."
                    onChange={onChange}
                />
                <button>검색</button>
            </form>
        </div>
    );
}