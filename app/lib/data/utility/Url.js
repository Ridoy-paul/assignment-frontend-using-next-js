
const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


const Urls = {

    getStorageUrl: () => STORAGE_URL,

    verifySettingsCode: () => `${BASE_URL}/verify-settings-code`,

    authLogin: () => `${BASE_URL}/login`,
    authLogout: () => `${BASE_URL}/logout`,

   
    authProfile: () => `${BASE_URL}/profile`,

    saveProperty: () => `${BASE_URL}/save-property`,
    getAllProperties: () => `${BASE_URL}/get-all-properties`,
    deletePropertyUrl: () => `${BASE_URL}/delete-property`,
    getPropertyItem: () => `${BASE_URL}/get-property-item`,
    
    
    

    
    

};

export default Urls;