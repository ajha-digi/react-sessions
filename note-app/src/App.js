import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { BsFillTrash3Fill } from "react-icons/bs";

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditableModalOpen, setIsEditableModalOpen] = useState(false);
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");


  const handleChange = e => {
    setNote(e.target.value);
  }

  const handleAddNote = () => {

    if(note.trim().length < 10) {
      setError("Please Enter 10 char !!");
      return false;
    }

    const newNote = {
      id: Math.floor(Math.random() * 100000),
      text: note,
      date: new Date().toLocaleDateString("en-US"),
      backgroundColor: getRandomColor()
    }
    setNotes([...notes, newNote])
    setIsModalOpen(false);
    setNote("");
    setError("");
  }

  const getRandomColor = () => {
    return 'hsl(' + (Math.random() * 360) + ', 100%, 75%)';
  }

  const handleClose = () => {
    setIsModalOpen(false); 
    setNote("");
    setError("");
  }

const handleEdit = (id) => {
  console.log("++++", id);
  setIsEditableModalOpen(true);

}

  return (
    <div className="App">
      {isModalOpen && (<div className="overlay">
        <div className="modal">
          <textarea rows="10" cols="30" onChange={handleChange}></textarea>
          {
            error && (
              <p className='error'>{error}</p>
            )
          }
          
          <button onClick={handleAddNote}>Add Note</button>
          <button className="close" onClick={handleClose}>Close</button>
        </div>
      </div>)
      }

      {isEditableModalOpen && (<div className="overlay">
        <div className="modal">
          <textarea rows="10" cols="30" onChange={handleChange}></textarea>
          <button>Update Note</button>
          <button className="close" onClick={() => setIsEditableModalOpen(false)}>Close</button>
        </div>
      </div>)
      }

      <div className="container">
        <header>
          <h1>Notes</h1>
          <button onClick={() => setIsModalOpen(true)}>+</button>
        </header>
        <div className="cards-container">
          {
            notes.map(note => (
              <div className="card" key={note.id} style={{ backgroundColor: note.backgroundColor }}>
                <p className="main-text">
                  {note.text}
                </p>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}>
                  <p className="date">
                    {note.date}
                  </p>
                  <div>
                    <FaEdit className='icon' onClick={()=>handleEdit(note.id)} />
                    <BsFillTrash3Fill className='icon' />
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  );
}

export default App;
