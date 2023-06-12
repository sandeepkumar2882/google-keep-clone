import React, { useEffect, useState } from 'react';
import EditNote from '../EditNote/EditNote';
import './Note.scss';
import { Button } from '@mui/base';
import { BorderColorRounded, DeleteRounded } from '@mui/icons-material';

const Note = (props) => {

    {/* state for maintain gotted notes and useEffect dependency */ }
    const [notes, setNotes] = useState([]);

    {/* state for maintaing the editing of a particular item */ }
    const [isEdit, setIsEdit] = useState(false);

    {/* state for input data while editing a item */ }
    const [data, setData] = useState({
        dataTitle: "",
        dataContent: ""
    })

    {/* Load all notes after every reload and state changed(notes) */ }
    useEffect(() => {
        setNotes(JSON.parse(localStorage.getItem('keep-clone')));
    }, [notes]);

    {/* function called for deleting an item from localStorage */ }
    const onDelete = (id, title) => {
        if(window.confirm(`Note will be deleted with title as ${title}`)){
            setNotes(notes.splice(id, 1));
            localStorage.setItem('keep-clone', JSON.stringify(notes));
        } 
    }

    {/* function called for getting item's data for editing and responsible for display a modal with editing form */ }
    const onEdit = (id) => {
        setIsEdit(true);
        let editData = JSON.parse(localStorage.getItem('keep-clone'));
        editData.map((currentElement, index) => {
            if (id == index) {
                setData(() => {
                    return {
                        dataTitle: currentElement.title,
                        dataContent: currentElement.content,
                        id: index
                    }
                })
            };
        });
    }

    {/* called function from the child component (EditNote.jsx) for closing the modal */ }
    const changeState = () => {
        setIsEdit(false);
    }

    return (
        <>
            {notes ? notes.map((currentNote, index) => {
                return (
                    <div className='note' id={index} key={index}>
                        <div className='noteTitle'>
                            <h1>{currentNote.title}</h1>
                        </div>
                        <div className='noteContent'>
                            <p>{currentNote.content}</p>
                        </div>
                        <div className='buttonWrapper'>
                            <Button onClick={() => onDelete(index, currentNote.title)} className='buttonIcon' >
                                <DeleteRounded />
                            </Button>
                            <Button onClick={() => onEdit(index)} className='buttonIcon' >
                                <BorderColorRounded />
                            </Button>
                        </div>
                    </div>
                )
            }) : null}

            {/* called child component if isEdit state is true */}
            {isEdit && <EditNote title={data.dataTitle} content={data.dataContent} id={data.id} changeState={changeState} />}
        </>
    )
}

export default Note