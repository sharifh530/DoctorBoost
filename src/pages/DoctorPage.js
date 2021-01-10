import React, {useState, useEffect} from 'react';
import Cards from '../Components/Cards';

function DoctorPage(props) {
    console.log(props)
    return (
        <div className= "doctor-page">
            <div className="doctors">
            <Cards />
            </div>
        </div>
    )
}

export default DoctorPage
