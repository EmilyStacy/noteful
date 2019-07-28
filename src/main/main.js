import React,{Component} from 'react';
import './main.css';
import NotefulContext from '../notefulContext';
import Notes from '../Components/Notes';
import Folders from '../Components/Folders';

class Main extends Component {
    static contextType = NotefulContext;
    render(){
        return(
           
             <div className="container">
             <section className="left">
                 <Folders stores={this.context.folders} /> 
            </section>
            <section className="right">
                <Notes stores={this.context.notes}/>
            </section>
            </div>
            )
           
        }

      
        
}

export default Main;
