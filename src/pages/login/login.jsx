import React, { useState } from 'react';
import Modal from "../../components/modal-component/modal";
import Input from "../../components/input/input";
import Checkbox from "../../components/checkbox/checkbox";
import Button from "../../components/button/button";
import MySvgComponent from '../../components/svg-component/svgcomponent';
import PageTitle from '../../components/page-title/pagetitle';
import "./login.css";

const Login = ({ onLogin }) => {
    const [isRemembered, setRemember] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const rememberChangeHandle = () => setRemember(!isRemembered);

    const handleLoginClick = () => {
        onLogin({ email, password });
    };

    return (
        <div className="login-page">
            <MySvgComponent />
            <div className="container">
                <PageTitle title={'Bejelentkezés'} />
                <Modal>
                    <Input fieldLabel="Email cím:" isPassword={false} onChange={setEmail} value={email} />
                    <Input fieldLabel="Jelszó:" isPassword={true} onChange={setPassword} value={password} />
                    <Checkbox 
                        label="Emlékezem rám!" 
                        isChecked={isRemembered} 
                        onCheckboxChange={rememberChangeHandle}
                    />
                    <Button text="Bejelentkezés" onClick={handleLoginClick} />
                </Modal>
            </div>
        </div>
    );
};

export default Login;
