'use client';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { NetworkCaller, Urls } from '@/app/components/Link';
import { setBearerToken } from '@/app/lib/axios';
import { AuthenticationSystem } from '@/hooks/Authentication';

const LoginForm = ({ onLogin }) => {
    const { csrf, mutate } = AuthenticationSystem();
    const [formProcessing, setFormProcessing] = useState(false);
    const [formData, setFormData] = useState({
        phone: '',
        password: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormProcessing(true);

        const body = {
            phone: formData.phone,
            password: formData.password,
        };

        const networkCaller = new NetworkCaller();
        const response = await networkCaller.postRequest(Urls.authLogin(), body);
        
        if (response && response.data && response.data.isSuccess) {
            
            mutate();
            const { _token, ...userData } = res.data.responseData;
            Cookies.set('token', _token, { expires: 7 });
            Cookies.set('userData', JSON.stringify(userData), { expires: 7 });
            setBearerToken(_token);

            toast.success('Login successful!');
            onLogin(_token);
        } else {
            toast.error('Login failed. Please check your credentials.');
        }
        
        
        setFormProcessing(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    placeholder="Ex. 01627...."
                    required
                    type="number"
                    id="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <input
                    placeholder="Password"
                    required
                    type="password"
                    id="password"
                    className="form-control"
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>
            <button
                type="submit"
                className="auth-card-form-btn primary__btn"
                disabled={formProcessing}
            >
                {formProcessing ? (
                    <div className="spinner-border spinner-border-sm" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                    'Sign in'
                )}
            </button>
        </form>
    );
};

export default LoginForm;
