import React, { Component } from 'react';
import axios from 'axios';
import Quote from './Quote'
import styles from './App.module.css';
class App extends Component {
  state={
    quote:"",
    author:"",
    show: false
  }

  getQuote = ()=>{
    this.setState({quote:"",author:"",show:false},()=>{
      axios.get('https://talaikis.com/api/quotes/random/')
      .then(response=>{
        const {quote,author} = response.data;
        this.setState({quote,author,show:true})
      })
    })
    
  }
  componentDidMount() {
    if (!this.state.quote) this.getQuote();
  }
  render() {
    console.log(this.state)
    const {quote,author,show} = this.state;
    return (
      <div className={styles.App}>
        <button className={styles.Button} onClick={this.getQuote}>Get a Quote</button>
        <Quote quote={quote} author={author} show={show} />
      </div>
    );
  }
}

export default App;


/*<ReactCSSTransitionGroup
          transitionName="fade"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnter={false}
          transitionLeave={false}
       >
       <ReactCSSTransitionGroup
          transitionName={{
            enter: styles.fadeEnter,
            enterActive: styles.fadeEnterActive,
            leave: styles.fadeLeave,
            leaveActive: styles.fadeLeaveActive,
          }}
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnter={false}
          transitionLeave={false}
       >
       
       
       */