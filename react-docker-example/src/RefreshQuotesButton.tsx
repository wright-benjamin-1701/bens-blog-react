import React from "react";



interface IProps{
    refresh:Function,
}

function RefreshQuotesButton(props:IProps){

    const {refresh} = props;

    return(
        <div className="RefreshQuotesButton">
            <button type="button" onClick={()=>refresh()} >Get new quotes</button>
        </div>
    )
}

export default RefreshQuotesButton;