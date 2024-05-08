import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";

export default function Header({ children }) {
    return (
        <header className={'s-header col-12 flex flex-col'}>
            <Navbar/>
        </header>
    );
}