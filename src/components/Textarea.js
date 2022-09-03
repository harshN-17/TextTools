import React, {useState} from 'react'

export default function Textarea(props) {
    const changeToUpper = () => {
        setText(text.toUpperCase());
    }

    const changeToLower = () => {
        setText(text.toLowerCase());    
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const calcSpeed = () => {
        let words = text.trim().split(" ");
        let cnt = 0;
        words.forEach(element => {
            if(element !== " ") cnt++;
        });
        let time = Math.floor(0.008 * cnt * 60);
        let min = Math.floor(time / 60);
        let sec = Math.floor(time % 60);
        return min.toString() + " minutes and " + sec.toString() + " seconds";
    }
    
    const capitalise = () => {
        let newText = "";
        let sents = text.trim().split(".");
        sents.forEach(element=>{
            newText = newText + element.trim().charAt(0).toUpperCase() + element.slice(1).trim() + ". ";
        });
        setText(newText.trim("."));
    }

    const [text, setText] = useState("Paste your text here..")
    return (
        <div className="txt--container">
            <textarea className="txt--area" rows = "10" cols = "90" value = {text} onChange = {handleOnChange}>
                {props.content}
            </textarea>
            <div className="btn--container">
                <button className = "txt--btn" onClick = {changeToUpper}>
                    {props.upperbtn}
                </button>
                <button className="txt--btn" onClick = {changeToLower}> {props.lowerbtn} </button>
                <button className="txt--btn" onClick={capitalise}> {props.capital} </button>
            </div>
            <div className="txt--summary">
                <h3>Your Text Summary Is: </h3>
                <p className="word-count">Word Count: {text.trim().split(" ").length}</p>
                <p className="char-count">Character Count: {text.length}</p>
                <p className="speed">Reading Time: {calcSpeed()}</p>
            </div>
        </div>
    )
}
