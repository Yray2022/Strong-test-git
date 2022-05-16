import React from "react";
import "../App.css"
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";
import MyModal from "../UI/MyModal/MyModal";

const ModalAbout = ({visible, setVisible, closeModal, openModal}) => {
    return (
        <div className="divOpenModal">
            <div className="modalAboutOpen">
                <MyButton onClick={openModal}>
                    Открить модалку   
                </MyButton>
            </div>
            <MyModal visible={visible} setVisible={setVisible}>
                Эта страниса была зделана для модального окна спецеально, 
                потомушто происходит казус с css стилями, на страниые с постами
            <h3>
                Закрить можно просто кликом на чорную область
            </h3>
            </MyModal>
            
        </div>
    )
}



export default ModalAbout