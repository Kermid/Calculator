import React,{useState} from "react"; 
import './App.css'
function Calculator()
{
    const [input, setInput] = useState("");
    const [outcome, setOutcome] = useState("");
    
    function addChar(number)
    {
        setOutcome("");
        setInput(o => o + number);
        console.log(outcome);
    }
    function Calculate()
    {
        setOutcome(eval(input));
        setInput("");
    }
    function Clear()
    {
        setOutcome("");
        setInput("");
    }
    return(
        <>
        <div className="outcome">
            <p>{outcome}</p>
            <p className="input">{input}</p>
        </div>
        <div className="buttons">
            {"123+456-789*/0".split("").map((char) => (
                <button key={char} className=""onClick={() => addChar(char)}>
                    {char}
                </button>
            ))}
            <button onClick={Calculate}>=</button>
            <button onClick={Clear}>C</button>
        </div>
        
        </>
    )
}
export default Calculator