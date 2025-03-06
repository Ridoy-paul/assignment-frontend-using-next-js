import { axiosInstance } from '@/app/lib/axios';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { toast } from 'react-toastify';
import { setBearerToken } from '@/app/lib/axios';
import { UserData } from '@/app/components/Link';

const GoogleAuth = () => {

    const handleGoogleSuccess = async (credentialResponse) => {
    
    try {
        const { credential, clientId } = credentialResponse;

        const response = await axiosInstance.post('/auth/google/callback', JSON.stringify({
            token: credential,
            client_id: clientId,
        }));

        const responseData = response?.data;
            
        if(responseData.isSuccess == true) {
            mutate()
            const { _token, userData } = responseData.responseData;
            await UserData.storeToken(_token);
            await UserData.storeUserData(userData);
            setBearerToken(_token);
            toast.success('Registration successful!');
            window.location.href = '/user/dashboard';
        }
        else {
            toast.error(response.errorMessage);
        }

    } 
    catch (error) {
        
    }
  };

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <GoogleLogin onSuccess={handleGoogleSuccess} onError={() => console.log('Google login failed')} />
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;
