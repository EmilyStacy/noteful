import React,{Component} from 'react';
import './main.css';
import NotefulContext from '../notefulContext';
import Notes from '../Components/Notes';
import Folders from '../Components/Folders';
import Header from '../Components/Header';
import ErrorBoundary from '../ErrorBoundary';

class Main extends Component {
    static contextType = NotefulContext;
    render(){
        return(
            
             <div className="container">
            <Header/>
            <div className="row">
            <ErrorBoundary>
             <section className="col-3">
                 <Folders stores={this.context.folders} /> 
            </section>
            </ErrorBoundary>
            <section className="col-9" id="noteList">
                <Notes stores={this.context.notes}/>
            </section>
            </div>
            </div>
            )
           
        }

      
        
}

export default Main;
