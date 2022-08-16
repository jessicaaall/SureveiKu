import React from 'react';
import {Text} from '@chakra-ui/react';
import {GoogleLogin} from 'react-google-login';

const clientId='CLIENTID.apps.googleusercontent.com';

function LoginGoogle() {
    const onSuccess = (response) => {
        console.log('[Login Success] currentUser:', response.profileObj);
    }

    const onFailure = (response) => {
        console.log('[Login Failed] response:', response);
    }
    return (
        <div>
            <GoogleLogin
                cliendId={clientId}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                ><Text color="black" fontSize='1em'>Sign in with Google</Text></GoogleLogin>
        </div>
    );
}

export default LoginGoogle;