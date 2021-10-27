import { Button } from '@material-ui/core'
import firebaseApp from '../firebase/credentials'
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'

const auth = getAuth(firebaseApp)
const gProvider = new GoogleAuthProvider()

function Login() {
    function loginWithgoogle() {
        signInWithRedirect(auth, gProvider)
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://picsum.photos/420" alt="" />
            </div>
            <Button onClick={loginWithgoogle}>Enter with google</Button>
        </div>
    )
}

export default Login
