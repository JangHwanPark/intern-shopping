import {Outlet} from "react-router-dom";
import {AuthProvider} from "./context/AuthContext";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import GridLayout from "./layout/GridLayout";
import Counter from "./components/Counter/Counter";

function App() {
    return (
        <AuthProvider>
            <GridLayout>
                <Header/>
                <Outlet/>
                <Footer/>
                <Counter/>
            </GridLayout>
            <Counter/>
        </AuthProvider>
    );
}

export default App;