import React, {useState,useEffect, useCallback} from 'react';

import Quotes from './components/Quotes';
import getQuotes from './services/get-quotes';

import './App.css';

import {quote} from "./types";
import RefreshQuotesButton from './components/RefreshQuotesButton';

function App() {

  const [quotes, setQuotes] = useState<quote[]>([]);  

  useEffect(()=>{
    
    const loadQuotes = async (numberOfQuotes:number) => {

      const tempQuotes =  await getQuotes(numberOfQuotes);
      setQuotes(tempQuotes.filter((quote:quote)=>{return quote!==null}));
    }
   
    if(quotes.length < 3){
          loadQuotes(3);
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
