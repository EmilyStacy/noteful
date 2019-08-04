
import React,{Component} from 'react';
import Folders from '../Components/Folders';
import NotefulContext from '../notefulContext';
import {Link} from 'react-router-dom';
import Header from '../Components/Header';
import PropTypes from 'prop-types';
export default class NoteListNav extends Component {
    static contextType = NotefulContext;
    render(){
        // let newFolders = this.context.folders;
       
        // console.log(folderId);
        // if (newFolders.length !==0 && newFolders.find(Folder=> Folder.id!==folderId))
           
        // {
        //     console.log('it ran');
        //     console.log(newFolders[0].id)
        //   return ( <Badfolder/>)
        // }
        const folderId = this.props.match.params.folderId;
        const filterNotes = this.context.notes.length>0?this.context.notes.filter(note => 
            note.folderId ===folderId):"";
        const finalNotes= this.context.notes.length?filterNotes.map(note=> {
            return(
            <NotefulContext.Consumer key={note.id}>
            {(context)=> (
            <div className="card">
                <Link to={`/note/${note.id}`}>
                <h2 className="card-title px-3 py-3 my-3 mx-3">{note.name}</h2></Link>
                <p className="card-text px-3">{note.modified}</p>
                <div>
                <button className="btn btn-dark my-3" onClick={()=>{context.deleteNote(note.id)}}>
                    Delete note
                </button>
                </div>
            </div>
            )
            }
            </NotefulContext.Consumer>
            )
        }): "";
        return(
            
            <div className="container-fluid">
                <Header/>
                <div className="row ">
                <section className="my-2 py-2 col-3">
                    <Folders folderId={folderId} stores={this.context.folders}/>
                </section>
                <section className="my-5 py-3 text-center col-6">
                <div className="px-1 py-1 mx-3  my-3 btn btn-primary ">
                        <Link to ="/"> <button id="returnbtn">Return</button> </Link>
                    </div>
                    <div className="col-sm-12 text-center">
                    {finalNotes}
                    </div>
                    {/* <div className="button">
                        <button className="btn btn-primary px-3 py-3 mx-3 my-3">
                            Add notes
                        </button>
                    </div>   */}    
                </section>
                </div>
            </div>
           
            )
           
        }
        
    

}

Folders.propTypes = {
    folderID:PropTypes.object,
    stores:PropTypes.array
}