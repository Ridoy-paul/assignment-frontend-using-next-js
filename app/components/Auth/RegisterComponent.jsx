'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { axiosInstance } from '@/app/lib/axios';
import { toast } from 'react-toastify';
import GoogleAuth from './GoogleAuth';

const RegisterComponent = ({ onRegister, isShowOtherInfo = true }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        setLoading(true);

        try {
            const response = await axiosInstance.post('/register', {
                name,
                email,
                password
            });

            if (response.status === 201) {
                toast.success('Registration successful!');
                //router.push('/login');  // Redirect to login page after successful registration
            } else {
                toast.error('Registration failed!');
            }
        } catch (error) {
            //console.error('Error registering:', error);
            toast.error('An error occurred during registration');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="align-middle">
            <div className="card">
                <div className="card-body">
                    <div className="m-sm-3">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label mb-1">Full name<span className='text-danger'>*</span></label>
                                <input
                                    className="form-control form-control-lg"
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label mb-1">Email<span className='text-danger'>*</span></label>
                                <input
                                    className="form-control form-control-lg"
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label mb-1">Password<span className='text-danger'>*</span></label>
                                <input
                                    className="form-control form-control-lg"
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter password"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label mb-1">Confirm Password<span className='text-danger'>*</span></label>
                                <input
                                    className="form-control form-control-lg"
                                    type="password"
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm your password"
                                    required
                                />
                            </div>

                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-lg btn-primary" disabled={loading}>
                                    {loading ? (
                                        <span className="spinner-border spinner-border-sm" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </span>
                                    ) : (
                                        "Sign Up"
                                    )}
                                </button>
                            </div>
                        </form>

                        <div className="mt-4">
                            <GoogleAuth />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterComponent;
