import Modal from 'antd/lib/modal/Modal';
import React from 'react'
import ModalStyle from './ModalStyle';

const MyModal = (props) => {

    return (
        <ModalStyle>
            <Modal title = {props.title} >
                {props.children}
            </Modal>
        </ModalStyle>
    )
}

export default MyModal;