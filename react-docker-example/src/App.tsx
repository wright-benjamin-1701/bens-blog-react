import React, {useState,useEffect, useCallback} from 'react';

import Quotes from './Quotes';
import getQuote from './get-quote';

import './App.css';

import {quote} from "./types";
import RefreshQuotesButton from './RefreshQuotesButton';

function App() {

  const [quotes, setQuotes] = useState<quote[]>([]);  
  const BATCH_SIZE = 3;

  useEffect(()=>{
    
    const loadQuotes = async (numberOfQuotes:number) => {
      const tempQuotes = [];
      
      for(let i=0; i < numberOfQuotes; i++){
        const quote= await getQuote();
        if(quote !== undefined){
          tempQuotes.push(quote);
        }
      }
      setQuotes(tempQuotes.slice(0,numberOfQuotes));
    }

    if(quotes.length < BATCH_SIZE){
          loadQuotes(BATCH_SIZE);
    }
    

  },[quotes,quotes.length]);

  const refreshQuotes = useCallback(()=>{setQuotes([])},[setQuotes]);

  return (
    <div className="App">
      <div className="data">
        <Quotes quotes={quotes}></Quotes>
        <RefreshQuotesButton refresh={refreshQuotes}></RefreshQuotesButton>
      </div>
    </div>
  );
}

export default App;
