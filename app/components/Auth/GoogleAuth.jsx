import { axiosInstance } from '@/app/lib/axios';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

const GoogleAuth = () => {
  const handleGoogleSuccess = async (response) => {
    const { code } = response;

    try {
      const res = await axiosInstance.post('/auth/google', { code });
      localStorage.setItem('access_token', res.data.access_token);
      localStorage.setItem('refresh_token', res.data.refresh_token);
    } catch (error) {
      console.error('Google authentication failed', error);
    }
  };

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <GoogleLogin onSuccess={handleGoogleSuccess} onError={() => console.log('Google login failed')} />
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;
