import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap/';


function Chatbox(props) {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const { show, handleClose, name} = props;

  const handleMessageSend = () => {
    if (inputValue) {
      setMessages([...messages, inputValue]);
      setInputValue('');
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header>
            <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="chatbox">
                <div className="chatbox-messages">
                    {messages.map((message, index) => (
                    <div key={index} className="chatbubble">
                        {message}
                    </div>
                    ))}
                </div>
                <div className="chatbox-input">
                    <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    />
                    <button onClick={handleMessageSend}>Send</button>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default Chatbox;