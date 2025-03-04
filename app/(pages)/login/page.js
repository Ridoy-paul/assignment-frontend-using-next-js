'use client';
import LoginComponent from '@/app/components/Auth/LoginComponent';

export default function Login() {
    const handleOnLogin = (status) => {
        window.location.href = '/user/dashboard';
    }

    return (
        <main className="main__content_wrapper">
            <section className="auth-page-area">
                <div className="container">
                    <LoginComponent handleOnLogin={handleOnLogin} />
                </div>
            </section>
        </main>
    );
}
