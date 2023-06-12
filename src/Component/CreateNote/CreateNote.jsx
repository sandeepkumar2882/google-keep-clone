import React, { useState } from 'react';
import './CreateNote.scss';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {
  {/* Component for creating notes */ }

  {/* state for expand the content text area onclick */ }
  const [expand, setExpand] = useState(false);

  {/* state for both fields to set data */ }
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  {/* function called onchange event on fields */ }
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setNote((prevnotesList) => {
      return {
        ...prevnotesList,
        [name]: value,
      }
    });
  }

  {/* function called onclick event of add button to add the notes in localStorage */ }
  const addNote = () => {

    if (note.title == '' || note.content == '') {
      alert("Please fill the details first!!!");
    }
    else {

      {/* create a blank array to store notes */ }
      const notesList = [];

      {/* get all notes from localStorage */ }
      const notesData = JSON.parse(localStorage.getItem('keep-clone'));

      {/* Check available notes in localStorage and push the latest note into the localStorage */ }
      if (notesData) {
        notesData.map((currentElement, index) => {
          return (
            notesList.push(currentElement)
          );
        });
        notesList.push(note);
      }
      else {
        notesList.push(note);
      }

      {/* Make input fields blank after successfully added to new note */ }
      setNote({
        title: "",
        content: ""
      });

      {/* add latest notesList to the localStorage */ }
      localStorage.setItem("keep-clone", JSON.stringify(notesList));
    }
  };

  //toggle css for text area, expand the size
  const addCss = (e) => {
    e.target.classList.add("expandTextArea");
  }

  const removeCss = (e) => {
    e.target.classList.remove("expandTextArea");
  }

  return (
    <>
      <div className='createNote'>
        <form>
          <div className="formGroup">
            {expand ?
              <input
                type='text'
                placeholder='Title'
                autoComplete='off'
                name='title'
                value={note.title}
                onChange={InputEvent}
              /> : null}
            <textarea
              rows=''
              column=''
              placeholder='Write a note...'
              name='content'
              value={note.content}
              onChange={InputEvent}
              onClick={() => { setExpand(true) }}
              onDoubleClick={() => { setExpand(false) }}
              onFocus={addCss}
              onBlur={removeCss}
            />
          </div>
          {expand ?
            <Button onClick={addNote}>
              <AddIcon className='buttonIcon' />
            </Button>
            : null}
        </form>
      </div>
    </>
  )
}

export default CreateNote