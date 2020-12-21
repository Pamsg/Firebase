import React from 'react';
import { useFirebaseApp } from 'reactfire';
import { Container, Form, Button } from 'react-bootstrap';
import logo from '../../assets/img/Logo.svg';
import './index.css';

const Login = () => {

    const firebase = useFirebaseApp();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const logar = (event) => {
        event.preventDefault();
        
        console.log('${email} - ${senha}');

        firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(result => {
            localStorage.setItem('nyous', result.user.refreshToken);
            alert('Seja ben vindo');
        })
        .catch(error => {
            alert('Email ou senha inválidos');
            console.error(error);
        })
    }
    return(
        <Container>
            <Form className='form-signin' onSubmit={event => logar(event)}> 
                <div className='text-center'>
                    <img src={logo} alt='NYOUS' style={{ width : '64px'}} />
                </div>
                <br/>
                <small>Informe seus dados abaixo</small>
                <hr/>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Informe o email" value={email} onChange={event => setEmail(event.target.value)} required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Senha" value={senha} onChange={event => setSenha(event.target.value)} required/>
                </Form.Group>

                <Button variant="primary" type="submit" >
                    Enviar
                </Button>

                <br/><br/>
                <a href='/login' style={{marginTop :'30px'}}>Ainda não tenho conta!</a>
            </Form>
        </Container>
    )
}

export default Login;