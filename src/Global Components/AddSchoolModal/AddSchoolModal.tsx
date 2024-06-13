// AddSchoolModal.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { LuPlusCircle } from "react-icons/lu";
import './addschoolmodal.css';

interface AddSchoolModalProps {
    onClose: () => void;
    onAddSchool: (school: string) => void;
}

const AddSchoolModal: React.FC<AddSchoolModalProps> = ({ onClose, onAddSchool }) => {
    const [schoolName, setSchoolName] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (schoolName.trim()) {
            onAddSchool(schoolName);
            setSchoolName("");
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="head">
                    <div>
                        <Link className="back" to="/Addschool" onClick={onClose}>
                            <IoIosArrowBack />
                        </Link>
                    </div>
                    <h2>Add School to Quiz</h2>
                </div>
                <div className="container">
                    <div className="modal-form school-field">
                        <label>School Name</label>
                        <input type="text"
                            value={schoolName}
                            onChange={(e) => setSchoolName(e.target.value)}
                            placeholder='Ambassadors College'
                            className='input-field' />
                    </div>
                    <div className="modal-form date-field">
                        <label>Date Created</label>
                        <input type="date" value='2024 - 05 - 30' readOnly className='input-field' />
                    </div>
                </div>
                <button type="submit" onClick={handleSubmit} className="add-school-btn">
                    <LuPlusCircle size={24} className="plus-icon" />
                    Add School
                </button>
            </div>
        </div>
    );
};

export default AddSchoolModal;
