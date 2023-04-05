import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'usuario',
        email: 'usuario1@email.com'
    });

    const {username, email} = formState;

    const onInputChange = ({target}) =>{
        const {value, name} = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }
    
    useEffect(() => {
        console.log('useEffect called!')
    }, [])
    
    useEffect(() => {
        console.log('formState change!')
    }, [formState])
    
    useEffect(() => {
        console.log('email change!')
    }, [email])

    

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            {
                (username === 'usuario') && <Message/>
            }
            
            <input
                type="email"
                className="form-control mt-2"
                placeholder="usuario@correo.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            
        </>
    )
}
