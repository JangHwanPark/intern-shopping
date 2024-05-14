import React from 'react';
import {NavLink} from "react-router-dom";

export default function Footer() {
    return (
        <nav>
            <ul className={"footer-nav"}>
                <li>
                <NavLink to={"/shipping"}>배송정보</NavLink>
                <NavLink to={"/exchange"}>교환 및 반품</NavLink>
                <NavLink to={"/terms"}>이용약관</NavLink>
                <NavLink to={"/contact"}>문의하기</NavLink>
                <NavLink to={"/privacy"}>개인정보처리방침</NavLink>
                </li>
            </ul>
            <p>&copy; {new Date().getFullYear()} Intern Shopping. All rights reserved.</p>
        </nav>
    );
}
