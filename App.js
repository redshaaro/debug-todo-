 
import { Component } from 'react';
import './App.css';
import Additems from './Components/Additems';
import Listitems from './Components/Listitems';

class App extends Component {
  state={
    items:[
      {id:1,task:"eat the salad",time:"sunday"},
      {id:2,task:"cut the onion",time:"monday"},
      {id:3,task:"throw the trash",time:"wednesddy"}

    ]
  }
  handleDelete=(id)=>{
    let items=this.state.items.filter((item)=>{
      return item.id !== id

    })
    this.setState({items})

  }

  addItem=(item)=>{
    item.id=Math.random()
    let items=this.state.items;
    items.push(item);
    this.setState({items});

  }



  render(){


  return (
    <div className="App">
      <Listitems items={this.state.items} handleDelete={this.handleDelete}></Listitems>
      <Additems addItem={this.addItem}></Additems>
      
    </div>
  );
}
}

export default App;
