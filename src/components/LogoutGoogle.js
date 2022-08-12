import React from 'react';
import {Text} from '@chakra-ui/react';
import {GoogleLogout} from 'react-google-login';

const clientId='CLIENTID.apps.googleusercontent.com';

function LogoutGoogle() {
    const onSuccess = () => {
        alert('Loigout Success');
    }

    return (
        <div>
            <GoogleLogout
                cliendId={clientId}
                onLogoutSuccess={onSuccess}
                className='google-logout'
                ><Text color="black" fontSize='1em'>Sign Out</Text></GoogleLogout>
        </div>
    );
}

export default LogoutGoogle;