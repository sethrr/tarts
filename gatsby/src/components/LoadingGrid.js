import React from 'react';

export  function FeaturedImageLoader({ count }) {
    return <div>
        {Array.from({length: count}, (_, i,) => (
            
            <div key={i}>
                <p className="mark">Loading...</p>
         
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="  
                      width="860" height="500" className="loading2" alt="loading2" /> 
                      
            </div>
        ))}
    </div>
}

export  function FeaturedTartsLoader({ count }) {
    return <div>
        {Array.from({length: count}, (_, i,) => (
            
            <div key={i}>
                <p className="mark">Loading...</p>
                <img src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAECAQAAADsOj3LAAAADklEQVR42mNkgANGQkwAAJoABWH6GPAAAAAASUVORK5CYII="
                      className="loading" alt="loading" width="500" height="400" />
            </div>
        ))}
    </div>
}