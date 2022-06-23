import React,{useState} from 'react'





export default function About() {
    const [myStyle, SetMyStyle] = useState({
        color : 'black',
        backgroundColor : 'white',
        border : '1px solid black',
        
        
    });
    const [buttonTxt, setButtonTxt] = useState('Dark Mode');
  return (
    <div>
        <h1 className='my-3'>About Us</h1>
        <div style={myStyle} className="accordion" id="accordionExample">
            <div style={myStyle} className="card">
                <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                    <button style={myStyle} className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Collapsible Group Item #1
                    </button>
                </h2>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card-body">
                    Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> class.
                </div>
                </div>
            </div>
            <div style={myStyle} className="card">
                <div className="card-header" id="headingTwo">
                <h2 className="mb-0">
                    <button style={myStyle} className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Collapsible Group Item #2
                    </button>
                </h2>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div className="card-body">
                    Some placeholder content for the second accordion panel. This panel is hidden by default.
                </div>
                </div>
            </div>
            <div style={myStyle} className="card">
                <div className="card-header" id="headingThree">
                <h2 className="mb-0">
                    <button style={myStyle} className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Collapsible Group Item #3
                    </button>
                </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <div className="card-body">
                    And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
                </div>
                </div>
            </div>
            </div>
            <button onClick={changeMode} type="button" class="btn btn-primary my-3"> {buttonTxt} </button>
    </div>
  )
  function changeMode(){
    if(buttonTxt === 'Dark Mode'){
        SetMyStyle({
            color : 'white',
            backgroundColor : 'black',
            border : '1px solid white',
        });
        setButtonTxt('Light Mode');
    }
    else{
        SetMyStyle({
            color : 'black',
            backgroundColor : 'white',
            border : '1px solid black',
        });
        setButtonTxt('Dark Mode');
    }

    

};
}


