import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Hello");

  return (
    <div className='container'>
            <h4> {props.heading} </h4>
            <div className="form-group">
                <textarea value={text} onChange = {ClickToErase} className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            <button onClick={ConvertToUpperCase} type="submit" className="btn btn-primary">Upper Case</button>
            &nbsp;
            <button onClick={ConvertToLowerCase} type="submit" className="btn btn-primary">Lower Case</button>
            &nbsp;
            <button className='btn btn-primary' onClick={Cleartext}  >Clear Text</button>

            <h4>Your Text Summery</h4>
            <p>{text.split(" ").length} words {text.length} characters</p> 
            <p>Time Required to read this {0.008 * text.split(" ").length} min </p>
            <h4>Preview</h4>
            {text}

            <br></br><br></br>
   
    </div>

  )

  function ClickToErase(event){

    setText(event.target.value)

  }

  function ConvertToUpperCase(){
    
    //   console.log(count);
    // setText(event.target.value)
    // console.log(text);
    // setCount(10)
    
    var a = text.toUpperCase()
    
    setText(a);

  };

  function ConvertToLowerCase(){
    var a = text.toLowerCase()
    setText(a);
  };

  function Cleartext(){
    var a = text.replace(text,"")
    setText(a)
  }




}
