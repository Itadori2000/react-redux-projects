import React, { useRef } from 'react';

function BackgroundChanger() {
    const divRef = useRef(null);
    const inputRef = useRef(null);

    const changeColor = () => {
        if (divRef.current && inputRef.current)  {
            divRef.current.style.backgroundColor = inputRef.current.value;
        }
    };

    const resetColor = () => {
        if (divRef.current) {
            divRef.current.style.backgroundColor = 'white';
        }
    };

    return (
        <>
            <div ref={divRef} style={{ width: '300px', height: '200px', border: '1px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
                Change my background
            </div>
            <input ref={inputRef} type="text" placeholder="Enter a color" style={{padding: "0.5rem", borderRadius: "10px", margin: "10px"}}/>
            <br/>
            <button onClick={changeColor} style={{margin: "10px"}}>Change Color</button>
            <button onClick={resetColor} style={{margin: "10px"}}>Reset</button>
        </>
    );
}

export default BackgroundChanger;
