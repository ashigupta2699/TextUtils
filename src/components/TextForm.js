import React, {useState} from 'react'



const TextForm = (props) => {

    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("converted to Uppercase", 'success')

    }
    const handleLoClick = () =>{
      // console.log("Uppercase was clicked" + text);
      let newText= text.toLowerCase();
      setText(newText)
      props.showAlert("converted to Lowercase", 'success')

  }
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
const handleClearClick = () =>{
  let newText= '';
  setText(newText)
} 

const handleCopy = () =>{
  // var text = document.getElementById("mybox")
  // text.select()
  // navigator.clipboard.writeText(text.value);
  navigator.clipboard.writeText(text);

  // document.getSelection().removeAllRanges();
  props.showAlert("copied", 'success')

}
const handleExtraSpaces = () =>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra spaces Removed", 'success')

}
const [text, setText] = useState('enter text here');
// setText('enter here');
  return (
    <>
<div className='container'  style={{ color: props.mode==='dark'?'white':'#042743'}}>
<h1 > {props.heading}  </h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#5a6472':'white', color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
</div>
<div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1 button"  onClick={handleUpClick} >Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1 button" onClick={handleLoClick} >Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1 button" onClick={handleCopy} >Copy</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1 button"  onClick={handleClearClick} >Clear</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1 button"  onClick={handleExtraSpaces} >Remove Extra Spaces</button>
</div>
</div>
<div className="container my-3" style={{ color: props.mode==='dark'?'white':'##042743'}}>
<h1>Your text summary </h1>
<p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
<p> {0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read </p>
<h2>Preview</h2>
<p> {text.length>0?text:"Nothing to preview"} </p>

</div>
</>
  )
}

export default TextForm