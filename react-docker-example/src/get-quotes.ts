import axios from "axios";

import { quote } from "./types";

const getQuotes = async (number:number = 1) => {

    const quoteURL = `https://bens-blog-fast-api-tfeo4yp7iq-uc.a.run.app/random/${number}` ;
    const response = await axios.get(quoteURL);

    return response.data?.map(
        (quote: quote) => {
            if(quote !== undefined 
                && quote.book !== undefined 
                && quote.author !== undefined
                && quote._id !== undefined){
        
                    return {
                        quote:quote.quote,
                        book: quote.book,
                        author:quote.author,
                        _id:quote._id,
                    };
            
        }
    return null;
    })
    ;
}

   


export default getQuotes;
