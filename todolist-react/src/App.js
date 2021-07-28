import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import TodoList from './pages/TodoList';
import './App.css';
import { StoreProvider } from './store';

export default function App() {
  return(
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/TodoList" component={TodoList} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>   
    );
}    
