import React from "react";
import { useHistory } from "react-router-dom";
import "../App.css"

const Navbar = ({children}) => {


    return (
        <div className='navbar'>
            <div className='navtext'>
                <form className='form'>

                    {children}
                </form>
            </div>
        </div>
    )
}

export default Navbar