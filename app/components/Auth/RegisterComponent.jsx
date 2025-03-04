// LoginForm.js
'use client';
import { Link, Image, NetworkCaller, routes, Urls } from '@/app/components/Link';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import UserData from '@/app/lib/data/utility/UserData';
import { axiosInstance, setBearerToken } from '@/app/lib/axios';
import { AuthenticationSystem } from '@/hooks/Authentication';
import GoogleAuth from './GoogleAuth';

const RegisterComponent = ({ onRegister, isShowOtherInfo = true }) => {
    const { csrf, mutate } = AuthenticationSystem();
    const networkCaller = new NetworkCaller();

    return (
        <div className="align-middle">
            <div className="card">
                <div className="card-body">
                <div className="m-sm-3">
                    <form>
                    <div className="mb-3">
                        <label className="form-label">Full name<span className='text-danger'>*</span></label>
                        <input
                            className="form-control form-control-lg"
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email<span className='text-danger'>*</span></label>
                        <input
                            className="form-control form-control-lg"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password<span className='text-danger'>*</span></label>
                        <input
                            className="form-control form-control-lg"
                            type="password"
                            name="password"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <a href="index.html" className="btn btn-lg btn-primary">
                            Sign up
                        </a>
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

const Spinner = () => (
    <div className="spinner-border spinner-border-sm" role="status">
      <span className="sr-only">Loading...</span>
    </div>
);
  

export default RegisterComponent;
