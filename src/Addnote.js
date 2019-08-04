import React, {Component} from 'react';
import config from './config';
import NotefulContext from './notefulContext';
import Header from './Components/Header';
const Required = () => (
    <span className='Addfolder__required'>*</span>
  ) ;
export default class Addnote extends Component {
    static contextType = NotefulContext;
    state = {
        error: null,
      };
    
      handleClickCancel = () =>{
        this.props.history.push('/')
      }

      handleSubmit = e => {
          e.preventDefault();
          const {name, folderID, content} = e.target;
          const date = new Date();
          const dateIso = date.toISOString();
          const newNote = {
              name: name.value,
              folderId: folderID.value,
              content:content.value,
              modified: dateIso
          }
          this.setState({error:null});
          const options = {
            headers:{'Content-Type': 'application/json'},
              method:"POST",
              body:JSON.stringify(newNote)
            };
            fetch(config.API_Note_ENDPOINT,options)
          .then(res => {
            if(!res.ok) {
                throw new Error ("Something went wrong. Please try again later.");
            }
            return res.json();
          }) 
          .then(data=> {
              name.value=data.name;
              folderID.value = data.folderID;
              content.value=data.content;
              this.context.addNote(data);
              this.props.history.push('/');
          })
          .catch(error => {
              this.setState({error})
          
          });
        }
          
      
    render(){
      let returnFolders = this.context.folders; 
      let folderOption;
      if (returnFolders === undefined) {
        folderOption =null;
      }else {
        folderOption = returnFolders.length?returnFolders.map(folder=> {
          return(
          <option key={folder.id} value={folder.id}>{folder.name}</option>
          )}): " ";
      }
        const error = this.state.error? <div className="error">{this.state.error}</div>: " ";
        
        //folder is not showing notes
        return(
            <div className="container my-3">
                <Header/>
                <h2 className="text-center page-header my-3">Add a note</h2>
                {error}
                <form className = "addnote_form" onSubmit={this.handleSubmit}>
                <div className="form-group my-3">
                    <label htmlFor ="name">Name:{''} <Required /></label> 
                    <input aria-label = "name" aria-required="true" aria-describedby="nameAnote" type="text" name="name" id="name" placeholder="name" required/>
                    </div>
                    <div className="form-group my-3">
                    <label htmlFor="chooseFolder">Choose a folder: <Required /></label>
                    <select  aria-required="true" className="custom-select mr-sm-1" id="folderID">
                    {folderOption}
                    </select>
                    </div>
                    <div className="input-group my-3">
                    <label htmlFor ="content">Content:{''} <Required /></label> 
                    <div className="input-group-prepend my-3">
                    <textarea className="form-control col-12" aria-required="true" aria-label="With textarea" required id="content"></textarea>
                    </div>
                    </div>
                    <div className="container-fluid">
                    <div className="py-1 my-3">
                    <button className="btn btn-secondary mx-1" onClick={this.handleClickCancel}>Cancel</button>
                    <button  className="btn btn-secondary mx-1" type="submit">Save</button>
                    </div>
                    </div>
                    
                </form>
            
            </div>
        )
    }
    
}   

