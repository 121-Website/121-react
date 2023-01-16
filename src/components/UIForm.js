import React, { useState } from 'react';
import UIInput from '../components/UI/UIInput';
import UIButton from '../components/UI/UIButton';
import { postLeadsAPI } from '../utils/postLeads';
import { useNavigate } from 'react-router-dom';

export default function UIForm() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState(false);
    const [message, setMessage] = useState('');
    const [messageError, setMessageError] = useState(false);

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
        if (e.trim().length !== 0) {
            setName(e);
            setNameError(false);
        } else {
            setName(e);
            setNameError(true);
        }
    }

    function handleChangeEmail(e) {
        if (e.includes('@') && e.includes('.')) {
            setEmail(e);
            setEmailError(false);
        } else {
            setEmail(e);
            setEmailError(true);
        }
    }
    function handleChangePhone(e) {
        if (e.trim().length !== 0) {
            if (e.length <= 12) {
                setPhone(e.slice(0, 12));
            } else {
                setPhone(e.slice(0, 12));
            }
            setPhoneError(false);
        } else {
            setPhone(e);
            setPhoneError(true);
        }
    }
    function handleChangeMessage(e) {
        if (e.trim().length !== 0) {
            setMessage(e);
            setMessageError(false);
        } else {
            setMessage(e);
            setMessageError(true);
        }
    }

    function handleSubmit() {
        if (name.trim().length === 0) {
            setNameError(true);
        }
        if (!email.includes('@') || !email.includes('.')) {
            setEmailError(true);
        }
        if (phone.trim().length === 0) {
            setPhoneError(true);
        }
        if (message.trim().length === 0) {
            setMessageError(true);
        }
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
                        error={nameError}
                        placeholder="Nombre y Apellido *"
                        handleChange={(e) => handleChangeName(e)}
                    />
                    <UIInput
                        className="bg-white"
                        label="Email *"
                        error={emailError}
                        errorText="Por favor ingresa un email válido"
                        type="email"
                        value={email}
                        placeholder="tucorreo@gmail.com"
                        handleChange={(e) => handleChangeEmail(e)}
                    />
                    <UIInput
                        maxLength={5}
                        className="bg-white"
                        label="Teléfono *"
                        type="number"
                        value={phone}
                        error={phoneError}
                        placeholder="999999999"
                        handleChange={(e) => handleChangePhone(e)}
                    />
                    <UIInput
                        className="bg-white"
                        label="Escribe tu Mensaje *"
                        value={message}
                        error={messageError}
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
