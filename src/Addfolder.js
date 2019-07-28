import React, {Component} from 'react';
import NotefulContext from './notefulContext';
import config from './config';
import PropTypes from 'prop-types';

const Required = () => (
    <span className='Addfolder__required'>*</span>
  )
 export default class Addfolder extends Component {
    static contextType = NotefulContext;
   
    state ={
        error:null
    };

    handleSubmit= e => {
        e.preventDefault();
        const  {title} = e.target;
        const folderItem= {
            name:title.value,
            
        };
        this.setState({ error: null })
        const options ={
            headers:{'Content-Type': 'application/json'},
            method:'POST',
            body:JSON.stringify(folderItem)}
        fetch(config.API_Folder_ENDPOINT,options)
        .then(res=> {
            if(!res.ok) {
                throw new Error ("Something went wrong. Please try again later.");
            }
            return res.json();
        }) 
        .then(data=> {
            title.value = data.name;
            this.context.addFolder(data);
            this.props.history.push('/');
        })
        .catch(error => 
            {this.setState({error})
        }
        );
    }

    handleClickCancel = () =>{
        this.props.history.push('/')
      }

    render(){
        const error = this.state.error? <div className="error">{this.state.error}</div>: " ";
       
        return (
            <div className="Addfolder">
                <h2>Add Folder</h2>
                {error}
                <form className = "addfolder_form" onSubmit={this.handleSubmit}>
                <label htmlFor ="title">Title:{''} <Required /></label> 
                <input type="text" name="title" id="title" placeholder="Title"/>
                <div className = "addfolder_buttons">
                    <button onClick={this.handleClickCancel}>Cancel</button>
                    <button type="submit">Save</button>
                </div>
                </form>

            </div>
        )

     }
}


Addfolder.propTypes = {
    title:PropTypes.string.isRequired
    // id: (props) =>{
    // const prop = props[id];
    // if(!prop){
    //     return new Error (`${id}is required`)
    // };
    // if(typeof prop !='number') {
    //     return new Error(`${id} needs to be in numbers`)
    // };
    // if (prop.length < 6 || prop.length >10 || !prop.match(`/\d/g`)){
    //     return new Error(`${id} needs to have between 6-10 numbers`)
    // };
}
Addfolder.defaultProps= {
    title:'myFolder'
}




