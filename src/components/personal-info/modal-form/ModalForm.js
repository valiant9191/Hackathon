import React, { useState } from 'react';
import './ModalForm.css'

const ModalForm = () => {

    // const [modalIsOpen, setModalOpen] = useState(false)
    

    return (

        
        
        <div className="modal-wrapper">
            
            {/* <ModalForm isOpen={modalIsOpen} />
            <button onClick={() => setModalOpen(true)}>open modal</button> */}

            <div className="modal-name">
                <label 
                    className="form-label-name">
                    Name : 
                </label>
                <input 
                    className="form-input-name"
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                />
            </div>

            <div className="modal-address">
                <label 
                    className="form-label-address">
                    Address : 
                </label>
                <input 
                    className="form-input-address"
                    type="text"
                    name="address"
                    placeholder="Enter Address"
                />
            </div>

            <div className="modal-hire">
                <label 
                    className="form-label-hire">
                    Number of Days :  
                </label>
                <input 
                    className="form-input-number"
                    type="number"
                    min="1"
                    max="365"
                />
            </div>

            <div className="modal-work">
                <label 
                    className="form-label-work">
                    Work Needed :  
                </label>
                <input 
                    className="form-input-work"
                    type="text"
                    name="details"
                    placeholder="A short description of work needed"
                />
            </div>

            <div className="modal-btn">
                <button 
                    className="form-input-btn-checkout"
                    type="submit">
                    Checkout
                </button>
                <button 
                    className="form-input-btn-back"
                    type="submit">
                    Back
                </button>
            </div>
        </div>

    )
}

export default ModalForm;