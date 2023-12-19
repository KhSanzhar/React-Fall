import { Route, Router, Routes } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";
import { AboutPage } from "./pages/AboutPage";
import { Navigation } from "./components/Navigation";
import { MyProductsPage } from "./pages/MyProductsPage";

import { generateClient } from 'aws-amplify/api';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
import { Authenticator, View, useTheme, Image } from "@aws-amplify/ui-react";

import { useEffect } from "react";
import { fetchUserAttributes } from 'aws-amplify/auth';

import { createUser } from './graphql/mutations';
import { listUsers, getUser } from "./graphql/queries";

const client = generateClient()

Amplify.configure(config); 

function App() {
  const components = {
    Header() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={tokens.space.large} className="text-4xl font-bold tracking-wider ">
          <Image id="img-logo"
            alt="logo"
            src="https://github.com/KhSanzhar/React-Fall/assets/98940233/8c21f4f6-d652-43fb-8718-8402487fc491"
          />
        </View>
      );
    },
  }
  

  return(
    <Authenticator components={components}>
      {({signOut, user}) => (
        <div>
          <Navigation logout={signOut}/>
          <Routes>
            <Route path="/" element={ <ProductsPage /> } />
            <Route path="/about" element={ <AboutPage /> } />
            <Route path="/my_products" element={ <MyProductsPage/>} />
          </Routes>
      </div>)}
    </Authenticator>
  )
}
export default App;
function handleFetchUserAttributes() {
  throw new Error("Function not implemented.");
}

