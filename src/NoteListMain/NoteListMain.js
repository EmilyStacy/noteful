import React,{Component} from 'react';
// import Store from '../dummy_store';
import {Link} from 'react-router-dom';
import './NoteListMain.css';
import NotefulContext from '../notefulContext';
import ErrorBoundary from '../ErrorBoundary';
import Folders from '../Components/Folders';

export default class NoteListMain extends Component {
    static contextType = NotefulContext;
    render(){
        const noteId = this.props.match.params.noteId;
        const noteItem = this.context.notes.filter(note => 
            note.id ===noteId   ); 
        const Items = noteItem.map(note=> {
            return(
                <NotefulContext.Consumer>
                {(context)=> (
                <ErrorBoundary>
                <div className="notelistMain" key="note.id">
                <h2>{note.name}</h2>
                <p>{note.modified}</p>
                <p>{note.folderId}</p>
                <p>{note.content} </p>
                <button className="delete btn btn-dark text-center py-2 my-3 mx-3" onClick={()=>{context.deleteNote(note.id)}}>
                Delete note 
                </button> 
                </div>
                </ErrorBoundary>
                )
            }
               </NotefulContext.Consumer>
            )
        }
        
        )
        
        const currentNoteFolder = noteItem.length?noteItem[0].folderId:"";
         const folderItem = this.context.folders.filter (folder =>
            folder.id === currentNoteFolder);
            const folderName =folderItem.length?folderItem[0].name:""; 
        return(
                <>
                    <section className="left">
                       <div className="highlighted"> {folderName} </div>
                    </section>
                    <section className="right">
                    <Link to ="/"> <button id="returnbtn" className="btn btn-info py-2 my-2 mx-2">Return</button> </Link>
                        {Items}
                    </section>
                </>
        )
    }
}

