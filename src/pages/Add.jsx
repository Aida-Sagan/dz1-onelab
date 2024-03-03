import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Add() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');

    const navigateTo = useNavigate();

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleSurnameChange = (e) => {
        setSurname(e.target.value);
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }

    const onSave = () => {
        if(!name || !surname || !phone) return;

        let list = sessionStorage.getItem('list');
        if(!list) {
            list = [];
        } else {
            list = JSON.parse(list)
        }

        list.push({
                name,
                surname,
                phone
        })
        sessionStorage.setItem("list", JSON.stringify(list));
        navigateTo('/');
    }



    return (
        <div className='form'>
            <div className='form-content'>
                <input value={name} onChange={handleNameChange} type='text' name='name' placeholder='Your name'/>
                <input value={surname} onChange={handleSurnameChange} type='text' name='name' placeholder='Your surname'/>
                <input value={phone} onChange={handlePhoneChange} type='text' name='name' placeholder='Your phone'/>
                <button onClick={onSave}>Save information</button>
            </div>
        </div>
    )
}