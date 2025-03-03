'use client';
import LoginRegistrationComponent from '@/app/components/Auth/LoginRegistrationComponent';

export default function Login() {
    const handleOnLogin = (status) => {
        window.location.href = '/user/dashboard';
    }

    return (
        <main className="main__content_wrapper">
            <section className="auth-page-area">
                <div className="container">
                    <LoginRegistrationComponent />
                </div>
            </section>
        </main>
    );
}
