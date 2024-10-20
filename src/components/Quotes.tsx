import React from "react";
import SingleQuote from "./SingleQuote";
import { quote } from "../types";

import './styles/Quotes.css';

interface IProps {

    quotes: quote[],

}

function Quotes(props: IProps){

    const {quotes} = props;

    const jokeQuote = {quote:"Updates applying. 1% complete. Please wait for updates to complete.",
        book:"Windows 11",
        author:"Microsoft",
        _id:"0"

    }

    return (
    <div className="Quotes">


        
        {quotes.length > 0 ?  quotes.map((quote)=><SingleQuote key={quote._id} quote={quote}></SingleQuote>) :<SingleQuote key={jokeQuote._id} quote={jokeQuote}></SingleQuote> }

    
    </div>
    );
}

export default Quotes;