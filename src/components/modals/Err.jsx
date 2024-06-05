import React from 'react'

const Err = ({err, onClose}) => {
  return (
    <div className='modal modal-err'>
        <img  onClick={onClose} src="/close.png" alt="" className="modal__close" />
        <div className="modal-err__text">{err}</div>
    </div>
  )
}

export default Err