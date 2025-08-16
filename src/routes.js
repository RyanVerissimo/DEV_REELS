import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detalhes from "./pages/Detalhes";
import NotFound from "./pages/NotFound";
import Favoritos from "./pages/Favoritos";

function RoutesApp() {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/detalhes/:id" element={<Detalhes />}/>
                <Route path="/favoritos" element={<Favoritos />}/>

                <Route path="*" element={<NotFound />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RoutesApp;