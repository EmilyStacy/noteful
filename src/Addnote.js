import React, {Component} from 'react';
import config from './config';
import NotefulContext from './notefulContext';
import PropTypes from 'prop-types';
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
          const newNote = {
              name: name.value,
              folderId: folderID.value,
              content:content.value
          }
          console.log(newNote);
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
          <option value={folder.id}>{folder.name}</option>
          )}): " ";
      }
        const error = this.state.error? <div className="error">{this.state.error}</div>: " ";
        
        //folder is not showing notes
        return(
            <div className="Addnotes">
                <h2>Add a note</h2>
                {error}
                <form className = "addnote_form" onSubmit={this.handleSubmit}>
                    <label htmlFor ="name">Name:{''} <Required /></label> 
                    <input type="text" name="name" id="name" placeholder="name" required/>
                    <select name="folderID">
                    {folderOption}
                    </select>
                    <label htmlFor ="content">Content:{''} <Required /></label> 
                    <input type="text" name="content" id="content" placeholder="Type in the content here" required/>
                    <button onClick={this.handleClickCancel}>Cancel</button>
                    <button type="submit">Save</button>
                    
                </form>
            
            </div>
        )
    }
    
}   

Addnote.propTypes = {
  name: PropTypes.string.isRequired,
  content:PropTypes.string.isRequired
}

Addnote.defaultProps={
  name: 'myNote',
  content: 'text'
}