import React from "react";
import './Button.css';
export default function Button({ children }){
    return (
        <button className="button" 
        onClick={handleClick} 
        onDoubleClick={() => console.log('double clicked')}>
            {children}</button>
    )
            function handleClick() {
            console.log('button clicked');
        }
}