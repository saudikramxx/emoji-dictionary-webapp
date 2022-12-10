import React from "react";
import Dictionary from "./dict"
import emojipedia from "F:/programing/webdevelopment/mapping-components-practice-forked/src/emojipedia.js"
function createDictionary(emoji){
  return(
    <Dictionary 
      name = {emoji.name}
      emoji = {emoji.emoji}
      meaning ={emoji.meaning}   
      />

  )
  
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map(createDictionary)}
      </dl>
      
    </div>
  );
}

export default App;
