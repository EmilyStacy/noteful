import React,{Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
// import '@fortawesome/fontawesome-free-webfonts/fontawesome.css'
//React,{Component} = React.Component 
import './App.css';
import Main from './main/main';
import NoteListNav from './NoteListNav/NoteListNav';
import NoteListMain from './NoteListMain/NoteListMain';
import config from './config';
import NotefulContext from './notefulContext';
import Addfolder from './Addfolder';
import Addnote from './Addnote';


class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
        folders :[],
        notes:[]
    };
    this.addFolder=this.addFolder.bind(this);
    this.addNote=this.addNote.bind(this);
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
      errors:null
      
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
  addFolder(folder) {
    this.setState({
      folders:[...this.state.folders, folder]
    })
  }

  addNote(note) {
    console.log(this.state.notes);
    this.setState({
      notes:[...this.state.notes,note]
    })
  }
  
  render(){

    // console.log(this.props.history);
    const contextValue = {
      folders:this.state.folders,
      notes:this.state.notes,
      deleteNote:this.deleteNote,
      addFolder:this.addFolder,
      addNote:this.addNote
    }
    // console.log(contextValue);
    return(
      
      <div className="App">
        <NotefulContext.Provider value={contextValue}>
        <Route exact key= '/folder/:folderId' path='/folder/:folderId' 
                component={NoteListNav}/>
        <Route exact path ='/' component={Main}/>
        <Route exact key= '/note/:noteId' path='/note/:noteId' component={NoteListMain} />
        <Route exact path = '/addFolder' component={Addfolder}/>
        <Route exact path='/addNote' component={Addnote}/>

        </NotefulContext.Provider>

      </div>
      
    )
  }
}

export default withRouter(App);
