import React, {useState} from "react";
import { validateEmail, capitalizeFirstLetter } from '../../utils/helpers';

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } 
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${capitalizeFirstLetter(e.target.name)} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }

    }

    function handleSubmit(e) {
        e.preventDefault();
    }


    return (
        <section className="section-container">
            <div className="section-left">
                <h2 className="font-size-heading">Contact me</h2>
            </div>     
            <div className="section-right">
                <p className="about-me-p font-size-text">
                        Elena Konradi
                </p>
                <p className="about-me-p font-size-text">
                        Email: evkonradi@gmail.com
                </p>
                <p className="about-me-p font-size-text">
                        Phone: (512)423-4516
                </p>
                <p className="about-me-p font-size-text">
                        Location: Austin, TX
                </p>

            </div>       

        </section>
    )
}

export default Contact;