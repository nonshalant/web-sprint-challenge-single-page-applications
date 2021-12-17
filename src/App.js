import React from "react";
import styled from 'styled-components';
import { useState, useEffect } from "react";
import {Link, Switch, Route, useHistory} from "react-router-dom";
import axios from "axios";
import * as yup from 'yup';


const StyledForm = styled.div`

.homepage-image{
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
  height:45vh;
  color: whitesmoke;
}
.homepage-image h2{
  text-align: center;
  font-size: 5rem;
  margin-bottom: 8%;
}
.homepage-image .pizza{
  border: 5px solid whitesmoke;
  padding: 3%;
  margin: 45%;
  font-size: 2rem;
  &:hover{
    background: whitesmoke;
    border: 5px solid black;
    color: black;
    transition: .3s;
  }
}
.nav-bar{
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-left: 3%;
  padding-right: 3%;
}
.nav-bar h1{
  color: red;
}
.nav-links{
  display: flex;
}
.nav-bar li{
  list-style: none;
  border: 1px solid black;
  padding: 10%;
  margin-right: 5%;
  cursor: pointer;
  &:hover{ 
    background-color: black;
    color: whitesmoke;
    transition: .3s;
  }
}
.nav-links {
  color: black;
}
.delivery-section{
  padding: 3%;
}
.top-section{
  display: flex;
}
.top-section div{
  border: 1px solid black;
}
.top-section img{
  width: 60%;
  border: 1px solid black;
}
.top-section strong{
  border: 1px solid black;
  padding: 1%;
}

`

const App = () => {

  return (
    <StyledForm>
      <header>
        <nav className="nav-bar">
          <h1>Lambda Eats</h1>
          <ul className="nav-links">
           <Link to="/"> <li>Home</li> </Link>
            <Link to='/help'><li>Help</li></Link>
            <Switch>
              <Route exact path='/pizza'>

              </Route>
            </Switch>
          </ul>
        </nav>
      </header>

      <div className="homepage-image">
        <h2> Your favorite food delivered while coding. </h2>
        <Link to='/#order-pizza'><strong className="pizza"> Pizza? </strong> </Link>
      </div>

      <div className="delivery-section">
        <h3>Food Delivery in Gotham City</h3>

        <div className="top-section">
        <div>
        <img src="https://images.unsplash.com/photo-1619881589670-43629f0e90f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"/>
        <h4>McDonald's</h4>
        <strong>$ -American - Fast FooD - Burgers</strong>
        <strong className="delivery-time"> 20-30 </strong>
        <strong className="delivery-time"> $5.99 Delivery Fee </strong>
        </div>
        <div>
        <img src="https://images.unsplash.com/photo-1584419380058-da2710e88667?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80"/>
        <h4>Sweetgreen</h4>
        <strong>$ -American - Fast FooD - Burgers</strong>
        <strong className="delivery-time"> 20-30 </strong>
        <strong className="delivery-time"> $5.99 Delivery Fee </strong>
        </div>
        <div>
        <img src="https://images.unsplash.com/photo-1496379896897-7b57622f431b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"/>
        <h4>Starbucks</h4>
        <strong>$ -American - Fast FooD - Burgers</strong>
       
        <strong className="delivery-time"> $5.99 Delivery Fee </strong>
        </div>
        </div>
      </div>
      
    </StyledForm>
  );
};


export default App;
