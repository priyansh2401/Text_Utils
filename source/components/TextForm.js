import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log( " Uppercase was Clicked : " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase !", "success");
    }

    const handleLoClick = () => {
        // console.log( " Lowercase was Clicked : " + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase !", "success");

    }

    const handleClearClick = () => {
        // console.log( " Clear Text was Clicked : " + text);
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared !", "success");

    }
    
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value)
    }

    const handleCopy = () => {
        // console.log( " Copy Text : " + text);
        let text =document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied to Clipboard !", "success");

    }

    const handleExtraSpaces = () => {
        // console.log( "Remove Extra Spaces" );
        let newText = text.split(/[ ] +/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed !", "success");

    }

    const [text, setText] = useState('Enter Text Here');

  return (
<>
<div style={{color: props.mode==='dark'?'white':'black'}}  className='container my-3'>
    <h1 className='mb-4'>{props.heading}</h1>
    <div className="mb-3">
    <textarea className='form-control' value= {text} style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id='myBox' rows= "8"></textarea>
    </div>

    <div className='mb-3 my-3'>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
</div>

<div style={{color: props.mode==='dark'?'white':'black'}} className='container my-3'>
    <h2>Your Text Summary</h2>
    <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} minutes to Read</p>

    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to Preview !"}</p>
</div>
</>
  )
};
