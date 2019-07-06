import React,{Component} from 'react';
import Folders from '../Components/Folders';
import Notes from '../Components/Notes';
import Store from '../dummy_store';
import {Link} from 'react-router-dom';
import './NoteListMain.css';

// item

// index

// className={}

export default class NoteListMain extends Component {
   
    render(){
        const noteId = this.props.match.params.noteId;
        const noteItem = Store.notes.filter(note => 
            note.id ===noteId); 
        const Items = noteItem.map(note=> {
            return(
                <>
                <h2>{note.name}</h2>
                <p>{note.modified}</p>
                <p>{note.folderId}</p>
                <button>delete</button>
                <p>{note.content} </p>
                </>
                
            )
        }
        
        )
        console.log(noteItem[0].folderId);
        console.log(noteItem);
         const folderItem = Store.folders.filter (folder =>
            folder.id === noteItem[0].folderId);
         const folderName =folderItem[0].name;
        return(
                <>
                    <section className="left">
                       <div className="highlighted"> {folderName} </div>
                    </section>
                    <section className="right">
                    <Link to ="/"> <button id="returnbtn">Return</button> </Link>
                        {Items}
                    </section>
                </>
        )
    }
}
