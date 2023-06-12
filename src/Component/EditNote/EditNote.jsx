import { Button } from '@mui/base';
import { CloseRounded, CreditScoreRounded } from '@mui/icons-material';
import React, { useState } from 'react';
import './EditNote.scss';

const EditNote = (props) => {

    {/* get all data from localStorage */ }
    const userData = JSON.parse(localStorage.getItem('keep-clone')) || {};

    {/* store particular item in state */ }
    const [note, setNote] = useState(userData[props.id]);

    {/* function for get input from modal form */ }
    const getInput = (event) => {
        const { name, value } = event.target;
        setNote((prevnotesList) => {
            return {
                ...prevnotesList,
                [name]: value,
            }
        });
    }

    {/* main function for responsible to edit the particular item */ }
    const updateNote = () => {
        userData.map((item, index) => {
            if (props.id == index) {
                item.title = note.title;
                item.content = note.content;
            }
        })
        localStorage.setItem("keep-clone", JSON.stringify(userData));
    }

    const changeState = () => {
        props.changeState(false);
    }

    return (
        <>
            <div className="modal">
                <div className="modal-container">
                    <div className='closeModal'>
                        <Button onClick={props.changeState} className='buttonIcon' >
                            <CloseRounded />
                        </Button>
                    </div>
                    <div className='editModalInput'>
                        <input
                            type='text'
                            name='title'
                            value={note.title}
                            onChange={getInput}
                        />
                        <textarea
                            name='content'
                            value={note.content}
                            onChange={getInput}
                        />
                    </div>
                    <div className='editNote'>
                        <Button onClick={function(event){ updateNote(); changeState();}}  className='buttonIcon' >
                            <CreditScoreRounded />
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditNote