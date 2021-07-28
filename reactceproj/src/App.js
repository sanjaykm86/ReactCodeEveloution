import logo from './logo.svg';
import React from 'react'
import './App.css';
import { Component } from 'react';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Message from './Components/Message'
import Counter from './Components/Counter'
import FunctionClick from './Components/FunctionClick'
import ClassClick from './Components/ClassClick'
import Eventbind from './Components/Eventbind'
import ParentComponent from './Components/ParentComponent'
import UserGreeting from './Components/UserGreeting'
import List from './Components/List'
import Person from './Components/Person'
import Stylesheet from './Components/Stylesheet'
import Inline from './Components/Inline';
import PostList from './Components/PostList';
import PostForm from './Components/PostForm';
import ClassAxios from './Components/ClassAxios';
import HooksCounter from './Components/HooksCounter';
import FunctionAxios from './Components/FunctionAxios';
import HookForm from './Components/HookForm';
import HooksFormArray from './Components/HooksFormArray';
import HookCounterUseEffect from './Components/HookCounterUseEffect';
import HooksMouseMoveClass from './Components/HooksMouseMoveClass';
import HooksMouseMoveFunction from './Components/HooksMouseMoveFunction';
import HooksMouseContainer from './Components/HooksMouseContainer';
import HooksTimer from './Components/HooksTimer';
import FnO from './Components/FnO';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import ComponentAContext from './Components/ComponentAContext';
import ComponentUseContext from './Components/ComponentUseContext';
import UseReducerCounter from './Components/UseReducerCounter';
import CalabrioFetch from './Components/CalabrioFetch';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();


class App extends Component{
  constructor(){
    super();
    this.state={
      month : 1
    }
  }

  setMonth = ()=>{
    this.setState({
      month : document.getElementById('monthValue').value
    
    })
  }

  render(){
    console.log(`Month is ${this.state.month}`);
    return (
      <div className="App">
        {/* <Form>
          <Form.Group controlId="monthValue" onChange={this.setMonth}>
            <Form.Label>Select Month</Form.Label>
            <Form.Control as="select" custom>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              </Form.Control>
              </Form.Group>
              </Form> */}
       {/* <Greet name="Batman"/>
       <Welcome/>
       <Hello Name ="Nandini">Children</Hello>
       <Message></Message> */}
       {/* <Counter/>
       <FunctionClick></FunctionClick>
       <ClassClick></ClassClick>
       <Eventbind/>
       <ParentComponent/>
       <UserGreeting/>
       <List/>
       <Stylesheet color={true}/>
       <Inline/> */}
       {/* <Form/> */}
       {/* <PostList/> */}
       {/* <PostForm/> */}
       {/* <ClassAxios/> */}
       {/* <HooksCounter/> */}
       {/* <FunctionAxios/> */}
       {/* <HookForm/> */}
       {/* <HooksFormArray/> */}
       {/* <HookCounterUseEffect/> */}
       {/* <HooksMouseMoveClass/>
       <HooksMouseMoveFunction/> */}
       {/* <HooksMouseContainer/>
       <HooksTimer/> */}
       {/* <FnO monthVal={this.state.month}/> */}
       {/* <UserContext.Provider value={'Sanjay'}>
         <ChannelContext.Provider value={'Code Evolution'}>
      <ComponentUseContext></ComponentUseContext>
       </ChannelContext.Provider>
       </UserContext.Provider> */}
       {/* <UseReducerCounter/> */}
       <CalabrioFetch/>
      </div>
    )
  }
}

export default App;
