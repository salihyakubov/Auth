import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername]= useState('');
    const [pass, setPass] = useState('')

    const navigate = useNavigate()



    const LoginProcess = (e) => {
        e.preventDefault()
        if(validate()){
            axios.get(`http://localhost:3000/users/${username}/`)
            .then((res) => {
                if(res.data.password === pass){
                    navigate('/')
                }
            })
            .catch(err => console.log('Введите корректние данные'))
            
        }
    }



    const validate= () => {
        let result = true
        if(username === '' || username === null){
            result =false;
            alert('Заполните никнейи')
        }
        if(pass === '' || pass === null){
            result= false;
            alert('Введите пароль')
        }
        return result

    }
 



    return (
        <div className='container'>
            <h1 className='headers_auth'>Авторизация</h1>
                  <Form className='our_form'>
                  <Button onClick={() => navigate(-1)} className='knopka' variant="primary">Вернутся назад</Button>{' '}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='form_label'>Имя</Form.Label>
        <Form.Control value={username} onChange={(e) => setUsername(e.target.value)}  type="text" placeholder="Напишите имя"  />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='form_label'>Пароль</Form.Label>
        <Form.Control value={pass} onChange={(e) => setPass(e.target.value)}  type="password" placeholder="Напишите пароль" />
      </Form.Group>
      <Button className='open_btn' onClick={LoginProcess} variant="primary" type="submit">
        Войти
      </Button>
      <br></br>
      <Button onClick={() => navigate('/registr')}  variant="primary" type="submit">
        Регистрация
      </Button>
    </Form>
        </div>
    );
};

export default Login;