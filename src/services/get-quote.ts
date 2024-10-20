import axios from "axios";



const getQuote = async () => {

    const quoteURL = 'https://bens-blog-fast-api-tfeo4yp7iq-uc.a.run.app/random' ;

    const response = await axios.get(quoteURL);

    if(response.data?.quote !== undefined 
        && response.data?.book !== undefined 
        && response.data?.author !== undefined
    && response.data?._id !== undefined){
        
        return {
            quote:response.data.quote,
            book: response.data.book,
            author:response.data.author,
            id:response.data._id,
        };

    }
}

export default getQuote;
