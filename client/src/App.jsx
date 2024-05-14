import {Outlet} from "react-router-dom";
import {AuthProvider} from "./context/AuthContext";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import GridLayout from "./layout/GridLayout";
import Products from './components/Products/Products';
import { Route, Routes } from "react-router-dom";
import ShoppingCart from './pages/User/ShoppingCart'
import {useState} from "react";

function App() {
    {/*상품데이터 임의추가*/}
   const productsData = [
        { id: 1, name: "상품1", price: 10000, description: "상품설명1" },
        { id: 2, name: "상품2", price: 20000, description: "상품설명2" },
    ];
    {/*상태값cart,상태변경함수 setcart 초기 빈배열*/}
    const [cart, setCart] = useState([]);

    {/*addToCart 함수는 product 매개변수를 받아옴 이 매개변수는 장바구니에 추가할 상품
    product 새로추가할 상품 ...cart 기존의 장바구니 상태
    새로윤 배열을 setCart 함수 사용하여 cart 상태에 업데이트*/}
    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <AuthProvider>
            <GridLayout>
                <Header/>
                <Outlet/>
                <Routes>
                    <Route path="/" element={<Products products={productsData} addToCart={addToCart} />} /> {/*메인페이지에 Products렌더링 productsData와addToCart함수 전달. */}
                    <Route path="/user/shopping-cart" element={<ShoppingCart cart={cart} />} /> {/*ShoopingCart렌더링 cart배열이 장바구니에 전달. */}
                </Routes>
                <Footer/>
            </GridLayout>
        </AuthProvider>
    );
}

export default App;