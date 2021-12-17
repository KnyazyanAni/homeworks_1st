import React, { Component } from 'react';
import MainDiv from './Components/MainDiv/maindiv.js';

class App extends Component {
  render(){
    return (
      <MainDiv/>
    );
  }

  
}

export default App;
//Ստեղծեք react application և ռեալիզացրեք որոնման ֆունկցիան։ 
//https://jsonplaceholder.typicode.com/todos հղումով ներբեռնեք տվյալները։ 
//Ստեղծեք ինպուտ, որի մեջ տեքստ գրելուց համընկնող title-ներով todo-ները կնկարվեն 
//ինպուտի ներքևը։ Բարդության երկու տարբերակ կա՝
//1) ստեղծել button, նրան սեղմելուց ցույց տա համընկնող todo-ները
//2) տեքստը տպելու ժամանակ բերի համընկնող todo-ները
