import React,{Component} from 'react';
import {BrowseRouter,Route} from 'react-router-dom';
//React,{Component} = React.Component 

import './App.css';
import Main from './main/main';
// import Dynamicf from './dynamic_folder/dynamicf':look up folders; change the state of folders with adding notes

// import Note from './dynamic_folder/dynamic_note/dynamicn';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
        folders :[],
        notes:[]
    };
  }
  render(){
    return (
      <BrowseRouter>
        <div className="App">
          <Route path ='/' component={Main}/>
          <Route path='/folder/:folderId' component={Dynamicf}/>
        <Route path='/note/:noteId' component={Note} /> */}
      </div>
      </BrowseRouter>
    );
  }
}

export default App;
