import React from 'react';
import FormComponent from '../../components/FormComponent/FormComponent';
import {useAccount} from "../../context/AuthContext";
import {Link} from "react-router-dom";

const loginFields = [
    { name: 'email', type: 'email', placeholder: '이메일' },
    { name: 'password', type: 'password', placeholder: '비밀번호' }
];

export default function Login() {
    const {login} = useAccount();
    const handleLogin = (token) => login(token);

    return (
        <>
            <div className={'col-12'}>Login</div>
            <FormComponent
                END_POINT={process.env.REACT_APP_ENDPOINT_SIGNIN}
                method={'POST'}
                fields={loginFields}
                useToken={true}
                onSignIn={handleLogin}
            />
            <Link to={'/auth/register'}>회원가입</Link>
        </>
    );
}