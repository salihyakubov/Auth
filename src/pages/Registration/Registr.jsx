import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Registr() {

    const navigate = useNavigate()

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [pas, setPas] = useState()

    const sendata = () => {
        axios.post('http://localhost:3000/users', {
            id,
            name: name,
            surname: surname,
            email: email,
            password: pas
        })
            .then(() => {
                if (name == '') {
                    alert('Заполните поля')
                } else {

                }
            })
            .then((res) => console.log(res), navigate('/login'))
    }


    return (
        <div className='container position'>
            <h1 className='headers_auth'>Регистрация</h1>
            <Form className='our_form'>
            <Button onClick={() => navigate(-1)} variant="primary" className='knopka'>Вернутся назад</Button>{' '}
          
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='form_label'>Никнейм</Form.Label>
                <Form.Control type="text" placeholder="Напишите имя" value={id} onChange={(e) => setId(e.target.value)} />
            </Form.Group>
          
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='form_label'>Имя</Form.Label>
                <Form.Control type="text" placeholder="Напишите имя" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='form_label'>Фамилия</Form.Label>
                <Form.Control type="text" placeholder="Напишите фамилию" value={surname} onChange={(e) => setSurname(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='form_label'>Email</Form.Label>
                <Form.Control type="email" placeholder="Напишите почту" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='form_label'>Пароль</Form.Label>
                <Form.Control type="password" placeholder="Придумайте пароль" value={pas} onChange={(e) => setPas(e.target.value)} />
            </Form.Group>
            <Button onClick={sendata} variant="primary" type="submit">
                Зарегистрироваться
            </Button>
        </Form>
        </div>
        
    );
}

export default Registr;