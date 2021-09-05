

import jsx from "./images/imageReact.jpg"

import  "./style.css"

function App() {
  return (
    <div className="App">
   <h1 className="titleRed">  React</h1><br/>
     <img className="img1" src="/images/imageReact.jpg" alt="react"/><br/>
     <img className="img2" src ={jsx} alt ="jsxp"/><br/>
     <video controls  src="/home/zied/videos/Eminem - Lose Yourself [HD].mp4"/>


    </div>
  );
}

export default App;
