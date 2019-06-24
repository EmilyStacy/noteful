import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import './main.css';
import Header from '../Components/Header';
import Store from '../dummy_store';
import Notes from '../Components/Notes';
import Folders from '../Components/Folders';
//set an initial state
//set a state change LATER after folder has finished
class Main extends Component {
    //showing all notes and change based on the dynamic folder
    render(){
        console.log(Store.notes);
        return(
            <div className="main">
            <Header/>
            <section className="right"></section>
                <Notes stores={Store.notes}/>
            <section className="left">
                <Folders />
            </section>
            </div>
            )
           
        }

      
        
}

export default Main;