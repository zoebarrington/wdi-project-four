import React from 'react';
import MessageBox from './MessageBox';

function Conversation({ messages, withUserId, handleDelete }) {
  const filtered = messages && messages.filter(message =>
    message.from._id === withUserId || message.to._id === withUserId
  );
  return (
    <div>
      {filtered && filtered.map(message =>
        <MessageBox key={message._id} message={message} handleDelete={handleDelete} />
      )}
    </div>
  );
}

export default Conversation;
