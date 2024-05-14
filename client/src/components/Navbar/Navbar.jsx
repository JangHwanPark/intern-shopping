import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

export default function Navbar() {
    // 드롭다운 메뉴 상태 관리를 위한 useState Hook 사용
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // 드롭다운 메뉴 참
    const openDropdown = () => setIsDropdownOpen(true);

    // 드롭다운 메뉴 거짓
    const closeDropdown = () => setIsDropdownOpen(false);

    return (
        <nav className={'s-navbar flex'}>
            <div>
                <NavLink to={'/'}>Logo</NavLink>
            </div>
            <ul className={'s-nav-list flex'}>
                <li onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
                    {/* 마우스 이벤트 핸들러 추가 */}
                    <NavLink to={'/user/my-account'}>
                        <span><FaRegUser/></span>
                        <span>마이페이지</span>
                    </NavLink>
                    {isDropdownOpen && (
                        <ul className={'dropdown-menu'}>
                            <li><NavLink to={'/user/test'}>test</NavLink></li>
                            <li><NavLink to={'/user/test'}>test</NavLink></li>
                            {/* 드랍다운 메뉴항목 */}
                        </ul>
                    )}
                </li>
                <li>
                    <NavLink to={'/user/shopping-cart'}>
                        <span><BsCart3/></span>
                        <span>장바구니</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/auth/login'}>로그인</NavLink>
                </li>
                <li>
                    <NavLink to={'/auth/register'}>회원가입</NavLink>
                </li>
            </ul>
        </nav>
    );
}
