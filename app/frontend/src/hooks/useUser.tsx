import { useLocalStorage } from 'usehooks-ts';
import UserType from '../types/UserType';

export default function useUser() {
    const [token, setToken] = useLocalStorage<UserType | null >('user-data', {
        id: 0,
        name: '',
        email: ''
    });
   
    function handleDeleteToken() {
        setToken(null);
        localStorage.removeItem('user-data');
    }

    return {
        token,
        handleDeleteToken,
        setToken,
    };
}
