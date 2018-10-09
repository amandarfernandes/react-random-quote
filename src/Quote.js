import React from 'react';
import quotes from './quotes.svg';
import styles from './App.module.css'


const Quote = ({quote,author,show}) => {
    const classes = [styles.Quote, show? styles.showQuote: styles.hideQuote];
 return(
     <div key={author} className={classes.join(" ")}>
         <img className={styles.quotes} src={quotes} alt="quotes" />
         <h1>{quote}</h1>
         <img className={[styles.quotes,styles.end].join(" ")} src={quotes} alt="quotes" />
        <h2>{author}</h2>

     </div>
 )
}

export default Quote;