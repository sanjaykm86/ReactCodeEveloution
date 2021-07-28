import React from 'react'
import './myStylesheet.css'
import styles from './myStyles.module.css'
import http from 'axios';

function Stylesheet(props) {
   http.get("https://www.nseindia.com/api/equity-stockIndices?index=NIFTY%2050")
   .then(response => console.log(response));
   let color = props.color?"primary" : "none"
   http.get('www.google.com') 
    return (
        <div>
            <h1 class={color}>Stylesheet</h1>
            <h1 className={styles.colour}>Stylesheet Module</h1>
        </div>
    )
}

export default Stylesheet
