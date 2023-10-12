import React from 'react';

const divStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const boxStyle = {
  border: '1px solid black',
  padding: '20px',
  backgroundColor: 'white',
};

function Popup({ message, onConfirm, onCancel, confirmText, cancelText }) {
  return (
    <div style={divStyle}>
      <div style={boxStyle}>
        <h5>{message}</h5>
        {cancelText && (
          <button className="btn btn-primary" onClick={onCancel}>
            {cancelText}
          </button>
        )}
        {confirmText && (
          <button className="btn btn-danger" onClick={onConfirm}>
            {confirmText}
          </button>
        )}
      </div>
    </div>
  );
}

export default Popup;
