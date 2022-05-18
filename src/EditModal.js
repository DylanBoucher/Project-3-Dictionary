import React from 'react'

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000,
    borderRadius: '10px'
}

const OVERLAY_STYLES ={
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

function EditModal({ open, children }) {
    if(!open) return null
  return (
    <>
    <div style={OVERLAY_STYLES}/>
    <div style={MODAL_STYLES}>
        {children} 
    </div>
</> 
  )
}

export default EditModal