import React from 'react';

export default function Header({ children }) {
    const handleSearch = (query) => {
        console.log('검색어:', query);
    };

    return (
        <header>
            <div className="logo">로고</div>
            <nav>
                <ul>
                    <li>
                        <a href="/auth">Auth</a>
                        <ul>
                            <li><a href="/auth/register">회원가입</a></li>
                            <li><a href="/auth/login">로그인</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/user">User</a>
                        <ul>
                            <li><a href="/user/my-account">내 계정</a></li>
                            <li><a href="/user/shopping-cart">장바구니</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <input type="text" placeholder="Search..." onChange={(e) => handleSearch(e.target.value)} />
            {children}
        </header>
    );
}
