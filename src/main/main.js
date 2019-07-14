import React,{Component} from 'react';
import './main.css';
import NotefulContext from '../notefulContext';
import Notes from '../Components/Notes';
import Folders from '../Components/Folders';
//set an initial state
//set a state change LATER after folder has finished
class Main extends Component {
    static contextType = NotefulContext;
    render(){
        console.log('main loaded');
        
        return(
             
             <>
             <section className="left">
                <Folders stores={this.context.folders} />
            </section>
            <section className="right">
                <Notes stores={this.context.notes}/>
            </section>
            </>
            )
           
        }

      
        
}

export default Main;