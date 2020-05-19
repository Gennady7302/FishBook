import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = props.state.messages
        .map(m => <Message message={m.message} />)

    let messageElement = React.createRef();

    let addMessage = () => {
        let mess = messageElement.current.value;
        alert (mess);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <textarea ref= {messageElement}></textarea>
                <div>
                    <button onClick={addMessage} >Add message</button>
                </div>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;