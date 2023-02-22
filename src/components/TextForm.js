import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+ text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success");
    }
    const handleLowClick=()=>{
        // console.log("Uppercase was clicked"+ text);
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success");
    }
    const handleClearClick=()=>{
        // this function will clear the textbox
        let newText="";
        setText(newText);
    }
    const handleReverseClick=()=>{
        // this function will reverse the string
        let newText=text.split(" ");
        let reverse=newText.reverse();
        let revrese_text = reverse.join(" ");
        setText(revrese_text);
    }
    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // setText("")
    return (<>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleReverseClick}>Reverse Text</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your text summery</h2>
            <p>{text.split(" ").length} words and {text.length} character</p>
            <p>{0.008*text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in textbox above to preview here"}</p>
        </div>
    </>
    )
}
