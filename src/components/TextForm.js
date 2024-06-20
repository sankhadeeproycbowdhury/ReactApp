import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');

  const handleUpClick = () => {
    const newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to UpperCase!", "success");
  }

  const handleOnchange = (event) => {
    setText(event.target.value)
  }

  const handleLoClick = () => {
    const newText = text.toLocaleLowerCase()
    setText(newText)
    props.showAlert("Converted to LowerCase!", "success");
  }

  const handlClear = () => {
    const newText = ""
    setText(newText)
  }

  const countWord = (text)=>{
    let textContainer = text.split(" ").filter(item => item !=='');
    return textContainer.length;
  }

  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea rows={15} className="form-control" onChange={handleOnchange} id="myBox" style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} />
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick} >Convert UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick} >Convert LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlClear} >Clear Text</button>
      </div>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h3>Your Text Summery:</h3>
        <p>{countWord(text)} Words, {text.length} Characters</p>
        <p>{0.008 * countWord(text)} Minutes to Read</p>
        <h3>Preview</h3>
        <p>{text.length > 0?text:"Enter Something to Preview here"}</p>
      </div>

    </>
  )
}
