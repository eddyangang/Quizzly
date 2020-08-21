import React from 'react';
import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form style={{position: "relative"}} className="container-fluid form">
    <input
      className="input bg-light"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
  </form>
)

export default Input;
