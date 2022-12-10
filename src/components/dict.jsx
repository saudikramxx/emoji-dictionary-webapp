import React from "react";

function Dictionary(procs){
    return (
    
     <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {procs.emoji}
            </span>
            <span>{procs.name}</span>
          </dt>
          <dd>
            {procs.meaning}
          </dd>
        </div>
    )
   
   
   
}

export default Dictionary;