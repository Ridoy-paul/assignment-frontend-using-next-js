// LoginForm.js
'use client';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';

const LoginRegistrationComponent = () => {
    
    const handleOnLogin = (status) => {
        window.location.href = '/user/dashboard';
    }

    const handleOnRegister = (status) => {
        if(status == false) {
            window.location.href = '/user/mess-system/my-mess-list';
        } else {
            window.location.href = '/user/dashboard';
        }
    }

    return (
        <div className="row">
            <div className="col-lg-5 col-xl-5 col-md-5 col-12 mt-5">
                <RegisterComponent onRegister={handleOnRegister} isShowOtherInfo="false" />
            </div>
            <div className="col-md-1"></div>
            <div className="col-lg-5 col-xl-5 col-md-5 col-12 login-registration-login">
                <LoginComponent onLogin={handleOnLogin} isShowOtherInfo="false" />
            </div>
        </div>
    );
};

export default LoginRegistrationComponent;
