import React,{Component} from 'react';
import {Route,Link} from 'react-router-dom';
// import '@fortawesome/fontawesome-free-webfonts/fontawesome.css'
//React,{Component} = React.Component 
import './App.css';
import Main from './main/main';//notePageMain
import NoteListNav from './NoteListNav/NoteListNav';
import NotePageNav from'./NotePageNav/NotePageNav';
import NoteListMain from './NoteListMain/NoteListMain';
//do I need Dummystore to be here?
import Dummystore from './dummy_store';
import {findFolder,findNote,getNoteforFolder} from './notes-helpers';
import Header from '../src/Components/Header';





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
        <div className="App">
          <div className="header">
            <Header/>
          </div>
         <div className="main"> 
            
            <Route exact key= '/folder/:folderId' path='/folder/:folderId' 
                    component={NoteListNav}/>
            <Route exact path ='/' component={Main}/>
            <Route exact key= '/note/:noteId' path='/note/:noteId' component={NoteListMain} />
             </div> 
       </div>
    );
  }
}

export default App;
