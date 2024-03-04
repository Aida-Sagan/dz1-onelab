import {useState} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
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


    const Form = styled('form-content')`
      height: 300px;
      background: white;
      border: 0 none;
      border-radius: 0px;
      box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
      padding: 20px 30px;
      box-sizing: border-box;
      width: 500px;
      margin: 0 10%;
      justify-content: center;
    `

    const InputField = styled.input`
      height: 40px;
      border: 1px solid #ccc;
      border-radius: 0px;
      margin-bottom: 10px;
      width: 100%;
      box-sizing: border-box;
      color: #2C3E50;
      font-size: 13px;
     

      &:focus {
        border: 2px solid #d32d99;
        outline: none;
        box-shadow: none;
        transition: border-color 0.5s ease-in;
      }
    `

    const Button = styled.button`
      width: 200px;
      background: #ee0979;
      font-weight: bold;
      color: white;
      border: 0 none;
      border-radius: 25px;
      cursor: pointer;
      padding: 10px 5px;
      margin: 10px 5px;
      align-self: center;
      
      &:hover {
        box-shadow: 0 0 0 2px white, 0 0 0 3px #ee0979
      }
    `

    return (
        <div className='form'>
            <Form className='form-content'>
                <InputField value={name} onChange={handleNameChange} type='text' name='name' placeholder='Your name'/>
                <InputField value={surname} onChange={handleSurnameChange} type='text' name='name' placeholder='Your surname'/>
                <InputField value={phone} onChange={handlePhoneChange} type='text' name='name' placeholder='Your phone'/>
                <Button onClick={onSave}>Save information</Button>
            </Form>
        </div>
    )
}