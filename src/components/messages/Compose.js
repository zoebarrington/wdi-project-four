import React from 'react';
import { decodeToken } from '../../lib/auth';

function Compose(props) {
  return (
    <article className="media">
      <figure className="media-left">
        <p className="image is-64x64">
          <img src={decodeToken().image}/>
        </p>
      </figure>
      <div className="media-content">
        <div className="field">
          <p className="control">
            <textarea className="textarea"
              placeholder="Add a comment..."
              name="newMessage"
              value={props.newMessage || ''}
              onChange={props.handleChange}
              disabled={!props.withUserId}
            />
          </p>
        </div>
        <nav className="level">
          <div className="level-left">
            <div className="level-item" onClick={props.handleSubmit}>
              <a className="button is-info" disabled={!props.withUserId}>Submit</a>
            </div>
          </div>
        </nav>
      </div>
    </article>
  );
}

export default Compose;
