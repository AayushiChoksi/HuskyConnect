import React from "react";
import ReactDOM from 'react-dom';
import './style2.css';
import imageSrc from './89125.jpg'; // Import the image

export class Card extends React.Component {
    render() {
      return (
          <div className="card">
            <img src={imageSrc} alt="Card Image" />
            <div className="card-body">
              <h2>{this.props.title}</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              <h5>{this.props.author}</h5>
            </div>
            <div>
            <div className="card2">
            <img src={imageSrc} alt="Card Image" />
            <div className="card-body">
              <h2>{this.props.title}</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              <h5>{this.props.author}</h5>
            </div>
            </div>
            </div>
          </div>
          
      );
    }
}

class App extends React.Component {
    render() {
      return (
        <>
         <div className="header">
           <h1>React Card Component</h1>
           <h3>A simple and responsive card component in React with clean hover effects. Copy and customise.</h3>
         </div>
        
         <div className='cards'>
           <Card
            title='What I learned from my visit to The Upside Down'
            author='Nancy Wheeler' />
        </div>  
        </>
      );
    }
}

// Final render
// ReactDOM.render(<App />, document.querySelector('#app'));
export default Card;