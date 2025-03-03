'use client';
import { Link, Image, routes, NetworkCaller, Urls } from '@/app/components/Link';
import { toast } from 'react-toastify';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import UserData from '@/app/lib/data/utility/UserData';
import { setBearerToken } from '@/app/lib/axios';
import { AuthenticationSystem } from '@/hooks/Authentication';

const LoginComponent = ({ onLogin, isShowOtherInfo = true }) => {
    const { csrf, mutate } = AuthenticationSystem();
    const router = useRouter();
    const networkCaller = new NetworkCaller();

    const searchParams = useSearchParams();
    const redirected = searchParams.get('r');

    useEffect(() => {
        if (redirected) {
            toast.warning('Please log in to access this.');
        }
    }, [redirected]);

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

    const handleFinalSubmit = async (e) => {
        e.preventDefault();
        setFormProcessing(true);

        const body = {
            phone: formData.phone,
            password: formData.password,
        }

        const formDataN = new FormData();
        formDataN.append('phone', formData.phone);
        formDataN.append('password', formData.password);
        
        const response = await networkCaller.postRequest(Urls.authLogin(), formDataN);

        if (response && response.isSuccess) {
            mutate();
            const { _token, ...userData } = response.responseData;

            await UserData.storeToken(_token);
            await UserData.storeUserData(userData);
            setBearerToken(_token);

            toast.success('Login successful!');
            onLogin(true);
            //window.location.href = '/user/dashboard';
        }
        if(!response.isSuccess) {
            toast.warning(response.errorMessage);
        }
        setFormProcessing(false);
    }


    return (
        <div className="auth-card">
            <div className="auth-card-head">
                <div className="auth-card-head-icon">
                    <Image 
                        className="rounded-pill shadow border"
                        src="/assets/img/login-img.gif" 
                        alt="Login Icon" 
                        width={100} 
                        height={100} 
                        loading="lazy"
                    />
                </div>
                <h4 className="auth-card-title">Login</h4>
            </div>
            
            <div className="auth-card-form-body">
                <form className="auth-card-form" onSubmit={handleFinalSubmit} method="post">
                    <div className="form-group">
                        <div className="form-group-icon">
                            <i className="fi fi-ss-user" />
                        </div>
                        <input
                            name="phone"
                            placeholder="Ex. 017264xxxxx"
                            required
                            type="number"
                            id="phone"
                            className="form-control"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-group-icon">
                            <i className="fi fi-ss-lock" />
                        </div>
                        <input
                            name="password"
                            placeholder="Password"
                            required
                            type="password"
                            id="password"
                            className="form-control"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="auth-card-info">
                        {isShowOtherInfo == true && (
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    id="custom-checkbox"
                                    className="form-check-input"
                                />
                                <label
                                    title=""
                                    htmlFor="custom-checkbox"
                                    className="form-check-label"
                                >
                                    Remember me
                                </label>
                            </div>
                        )}
                        
                        <Link href={routes.forgot_password}>Forgotten password?</Link>
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
                {isShowOtherInfo == true && (
                    <div className="auth-card-bottom">
                        <p className="auth-card-bottom-link">
                            Have no account?
                            <Link href={routes.register}>Register account</Link>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginComponent;
