import React from "react";
import cm from "./MyModal.module.css"


const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [cm.modal]

    if (visible) {
        rootClasses.push(cm.active)
    }


    return ( 
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cm.modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MyModal