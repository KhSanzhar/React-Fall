import { Route, Router, Routes } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";
import { AboutPage } from "./pages/AboutPage";
import { Navigation } from "./components/Navigation";
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";
import { MyProductsPage } from "./pages/MyProductsPage";
import { AuthProvider } from "./context/AuthContext";


function App() {
  return(
    <AuthProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={ <ProductsPage /> } />
          <Route path="/about" element={ <AboutPage /> } />
          <Route path="/sign_in" element={ <SignInPage />} />
          <Route path="/sign_up" element={ <SignUpPage />} />
          <Route path="/my_products" element={ <MyProductsPage/>} />
        </Routes>
    </AuthProvider>
  )
}

export default App;
