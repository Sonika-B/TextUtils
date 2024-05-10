import React,{useState} from 'react'

export default function TextForm(props) {
    // the below function works after clicking the button and converts into upper case 
    const handleUpClick=()=>{
       let newText=text.toUpperCase();
       setText(newText);
       props.showAlert("converted to uppercase","success");
    }
    const handleLoClick=()=>{
        console.log("lowercase has been clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success");
    }
    const handleClearClick=()=>{
        let newText="";
        setText(newText);
        props.showAlert("text has been cleared","success");
    }
    const handleAlterClick=()=>{
        let newText=text.toLowerCase();
        newText=newText.split("");
        for(let i=0;i<newText.length;i=i+2){
            newText[i]=newText[i].toUpperCase();
        }
        setText(newText.join(""));
        props.showAlert("converted to alternating text","success");
    }
    const handleCopy=()=>{
        // the below commented lines are not needed as we are using navigator in our code
        // let newText=document.getElementById("myBox");
        // newText.select();
        navigator.clipboard.writeText(Text);
        // document.getSelection().removeAllRanges();
        props.showAlert("text has been copied","success");
    }
    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("extra spaces have been removed","success");
    }
    // const handleCapitalClick=()=>{
    //     let newText=text.toLowerCase();
    //     newText.split(" ");
    //     for(let i=0;i<newText.length;i++){
    //         newText[i]=newText[i].charAt(0).toUpperCase()+newText[i].slice(1);
    //     }
    //     setText(newText.join());
    // }
    

    // if text in textarea changes then the below function make sures that the variable text is storing the updated value
    const handleOnChange=(event)=>{
        console.log("on change!");
        setText(event.target.value);
     }

    const [text,setText]=useState("");
    
    return (
        <>
        <br />
        <div className='container' style={{color:props.mode==='light'?'grey':'white'}} >
            <h2 >{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='light'?'grey':'white'}} value={text} rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}> Convert to Uppercase </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}> Convert to Lowercase </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}> Clear Text </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleAlterClick}> Alternating text  </button>
            {/* <button className="btn btn-primary mx-1" onClick={handleCapitalClick}> Captalized text  </button> */}
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}> Copy text  </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}> Remove Extra spaces  </button>
        </div>
        <br /> <br />
        <div className="container" style={{color:props.mode==='light'?'grey':'white'}} >
            <h1>Your Summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes is the average reading time </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"enter something in the textbox above to preview here"}</p>
        </div>
        </>
    )
}
    