import React, { useState } from 'react';
import UIInput from '../components/UI/UIInput';
import UIButton from '../components/UI/UIButton';
import { postLeadsAPI } from '../utils/postLeads';
import { useNavigate } from 'react-router-dom';

export default function UIForm() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    let body = {
        data: {
            name: name,
            email: email,
            phone: phone,
            message: message,
        },
    };

    function handleChangeName(e) {
        setName(e);
        console.log(body);
    }
    function handleChangeEmail(e) {
        setEmail(e);
        console.log(body);
    }
    function handleChangePhone(e) {
        setPhone(e);
        console.log(body);
    }
    function handleChangeMessage(e) {
        setMessage(e);
        console.log(body);
    }

    function handleSubmit() {
        postLeadsAPI(JSON.stringify(body)).then((data) => {
            //if AxiosError
            if (data === undefined) {
                console.log('error', data);
                setError(true);
            } else {
                console.log('success', data);
                setSuccess(true);
                navigate('/hablemos-gracias');
            }
        });
    }

    return (
        <div className="flex w-full p-8 bg-indigo">
            {success ? (
                <div className="flex flex-col justify-start w-full gap-2 p-6 text-4xl font-bold text-white">
                    Mensaje enviado Correctamente
                </div>
            ) : (
                <div className="flex flex-col justify-start w-full gap-2">
                    <div className="mb-4 text-2xl font-bold text-white">
                        Ingresa tus datos
                    </div>
                    <UIInput
                        className="bg-white"
                        label="Nombre y Apellidos"
                        value={name}
                        placeholder="Nombre y Apellido *"
                        handleChange={(e) => handleChangeName(e)}
                    />
                    <UIInput
                        className="bg-white"
                        label="Email *"
                        value={email}
                        placeholder="tucorreo@gmail.com"
                        handleChange={(e) => handleChangeEmail(e)}
                    />
                    <UIInput
                        className="bg-white"
                        label="Teléfono *"
                        value={phone}
                        placeholder="999999999"
                        handleChange={(e) => handleChangePhone(e)}
                    />
                    <UIInput
                        className="bg-white"
                        label="Escribe tu Mensaje *"
                        value={message}
                        placeholder="Escribe tu mensaje"
                        handleChange={(e) => handleChangeMessage(e)}
                    />
                    {error && (
                        <div className="text-xs font-bold text-right text-red-500 animate-appear">
                            * Por favor completa los campos obligatorios
                        </div>
                    )}
                    <UIButton
                        className={'ml-auto'}
                        onClick={() => handleSubmit()}>
                        <div className={'text-2xl'}>Enviar</div>
                    </UIButton>
                </div>
            )}
        </div>
    );
}
