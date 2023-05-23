import React from 'react';
import Modal from '../../components/modal-component/modal';
import Button from '../../components/button/button';
import MySvgComponent from '../../components/svg-component/svgcomponent';
import PageTitle from '../../components/page-title/pagetitle';
import './auth.css';

const Auth = ({ userName, onLogout }) => {
    return (
        <div className="auth-page">
            <MySvgComponent />
            <div className="container">
                <PageTitle title={'Bejelentkezve'} />
                <Modal>
                    <div className="auth-content">
                        <h2>Welcome, {userName}!</h2>
                        <Button text="Kijelentkezés" onClick={onLogout} />
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default Auth;
