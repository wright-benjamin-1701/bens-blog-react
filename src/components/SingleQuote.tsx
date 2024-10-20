import {quote} from "../types";
import './styles/SingleQuote.css';

interface IProps{
    quote:quote,
    key:string,
}

function SingleQuote(props:IProps){

    const {quote} = props;

    return(
        <div className="SingleQuote">
            
            <p> <b>{quote.quote}</b> - {quote.author}, <i>{quote.book}</i></p>
            
        </div>
    )
}

export default SingleQuote;