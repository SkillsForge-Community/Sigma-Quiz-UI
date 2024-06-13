import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { LuPlusCircle } from "react-icons/lu";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { CiTrash } from "react-icons/ci";
import AddSchoolModal from '../../Global Components/Modals/AddSchoolModal/AddSchoolModal';
import './styles.css'; 

type AddSchoolProps = {
    quizName: string;
    dateCreated: string; 
};

const AddSchool: React.FC<AddSchoolProps> = ({ quizName, dateCreated }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [schools, setSchools] = useState<string[]>([]);

    const handleAddSchool = (schoolName: string) => {
        setSchools([...schools, schoolName]);
        handleCloseModal();
    };

    const handleDeleteSchool = (schoolToDelete: string) => {
        setSchools(schools.filter((school) => school !== schoolToDelete));
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="addschool">
            <div className="navbar">
                <div>
                    <Link className="back" to="/select-quiz">
                        <IoIosArrowBack className="back-icon" />
                        Back
                    </Link>
                </div>
                <div className="header">
                    <h1>Edit/Add School</h1>
                </div>
                <div className="profile">
                    <h3>Welcome, Jenner</h3>
                    <div className="profile-image"></div>
                    <IoIosArrowDown />
                </div>
            </div>
            <div className="school-container">
                <div className="form-field quiz-field">
                    <label>Quiz Name</label>
                    <input type="text" value={quizName} readOnly className='input-field'/>
                </div>
                <div className="form-field date-field">
                    <label>Date Created</label>
                    <input type="date" value={dateCreated} placeholder='2024 - 05 - 30' readOnly className='input-field' />
                </div>
            </div>
            <div className="added-schools">
                <h3>Authorised schools ({schools.length})</h3>
                <div className="schools-list">
                    {schools.map((school, index) => (
                        <div key={index} className="school-item">{school} <div onClick={() => handleDeleteSchool(school)}><CiTrash className='trash-icon'/>Remove</div></div>
                    ))}
                </div>
                <button className="addschool-btn" onClick={handleOpenModal}>
                    <LuPlusCircle size={24} className="plus-icon" />
                    Add School
                </button>
            </div>
            {isModalOpen && (
                <>
                    <div className="modal-background"></div>
                    <AddSchoolModal onClose={handleCloseModal} onAddSchool={handleAddSchool}/>
                </>
            )}
        </div>
    );
}

export default AddSchool;
