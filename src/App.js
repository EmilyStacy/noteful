import React,{Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
// import '@fortawesome/fontawesome-free-webfonts/fontawesome.css'
//React,{Component} = React.Component 
import './App.css';
import Main from './main/main';//notePageMain
import NoteListNav from './NoteListNav/NoteListNav';
import NoteListMain from './NoteListMain/NoteListMain';
import Header from '../src/Components/Header';
import config from './config';
import NotefulContext from './notefulContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
        folders :[],
        notes:[]
    };
  }

  setFolders = folders =>{
    this.setState({
      folders,
      errors:null
    })
  }

   

  deleteNote = noteid => {
    fetch(config.API_Note_ENDPOINT + `/${noteid}`, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${config.API_KEY}`
      }
    })
      .then(res => {
        if (!res.ok) {
          
          return res.json().then(error => {
            
            throw error
          })
        }
        return res.json()
      })
      .then(data => {
        this.updateDeletedNotes(noteid)
        this.props.history.push('/');
      })
      .catch(error => {
        console.error(error)
      })
  };

  updateDeletedNotes  = noteid => {
    const newNotes = this.state.notes.filter(note => note.id !== noteid);
    this.setState({
        notes: newNotes,
    });
  }

  setNotes= notes => {
    this.setState({
      notes,
      errors:null,
      
    })
  }
  componentDidMount(){
    Promise.all([fetch(config.API_Folder_ENDPOINT),fetch(config.API_Note_ENDPOINT)])
    .then(([res1,res2]) => {
     if(!res1.ok || !res2.ok)
     { console.log('about to throw errors');throw new Error(res1.status || res2.status)}
     return Promise.all([res1.json(), res2.json()]);
       })
      .then(([res1,res2]) =>
      { 
        this.setFolders(res1);
        this.setNotes(res2);
      //  console.log("this is",this.state.folders, "that is",this.state.notes);
      })
   .catch(error => this.setState({error}))
  }
  
  render(){
    console.log(this.props.history);
    const contextValue = {
      folders:this.state.folders,
      notes:this.state.notes,
      deleteNote:this.deleteNote
    }
    return (
        <div className="App">
          <div className="header">
            <Header/>
          </div>
            <div className="main"> 
              <NotefulContext.Provider value={contextValue} >
                <Route exact key= '/folder/:folderId' path='/folder/:folderId' 
                    component={NoteListNav}/>
                <Route exact path ='/' component={Main}/>
                <Route exact key= '/note/:noteId' path='/note/:noteId' component={NoteListMain} />
              </NotefulContext.Provider>
             </div> 
        </div>
    );
  }
}

export default withRouter(App);
