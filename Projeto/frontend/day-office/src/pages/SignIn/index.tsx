import React from 'react';
import { useAutenticacao } from '../../hooks/auth';

const SignIn : React.FC = () => {        
    const { signIn,signOut, user } = useAutenticacao();
    debugger;
    if (user.user) {
        return (
            <>
            <button onClick={() => signOut()}>Deslogar</button>
            </>)
    }else{
        return (
            <>
            <button onClick={() => signIn()}>Login Microsoft</button>
            </>)
    }
};

export default SignIn;