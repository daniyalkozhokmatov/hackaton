import React from 'react';
import { BrowserRouter, Switch,  Route } from 'react-router-dom';
import AdminContextProvider from './contexts/AdminContext';
import ClientContextProvider from './contexts/ClientContext';
import StarShipPage from './pages/StarShipPage';
import EditPage from './pages/EditPage';
import AdminPage from './pages/AdminPage'
import MainPage from './components/Main';
import ProductTable from './components/ProductTable';
import SignInPage from './Register/SignInPage';
import SignUpPage from './Register/SignUpPage';
import HomePage from './pages/MarsPage'; 



const Routes = () => {
    return (
        <>
         <ClientContextProvider>
        <AdminContextProvider>
        <BrowserRouter>
        <Switch>
            <Route exact path="/starship" component={StarShipPage} />
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/edit/:id" component={EditPage}/>
            <Route exact path="/admin" component={AdminPage}/>
            <Route exact path ='/table' component ={ProductTable}/>
            <Route exact path="/sign-in" component={SignInPage} />
            <Route exact path="/mars" component={HomePage} />
            <Route exact path="/sign-up" component={SignUpPage} />
            
        </Switch>   
        </BrowserRouter>
        </AdminContextProvider>
        </ClientContextProvider>
        </>
    );
};

export default Routes;