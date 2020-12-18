import React, { useState } from 'react';
import './ModalForm.css'
import StripeCheckoutButton from './payment';

const ModalForm = ({ open, onClose }) => {

    // if (!open) return null

    // const [isOpen, setIsOpen] = useState(false)

    // <ModalForm open={isOpen} onClose={() => setIsOpen(false)}> </ModalForm>
    //         <button onClick={() => setIsOpen(true)}>Hire</button>
    

    return (

        <div className="modal-wrapper">
            
            <span
             onClick={() => onClose()} 
             className="close-modal-btn">x</span>

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
                    // placeholder="A short description of work needed"
                />
            </div>

            <div className="modal-btn">
                <StripeCheckoutButton price="100 dinar"/>
                
                {/* <button 
                    className="form-input-btn-checkout"
                    type="submit">
                    Checkout
                </button> */}
                <button 
                    className="form-input-btn-back"
                    type="submit"
                    onClick={() => onClose()}
                    >
                    Back
                </button>
            </div>
        </div>

    )
}

export default ModalForm;