import { useState } from 'react'
import { useRouter } from 'next/router'

import { useAuth } from '../middlewares/authContext'

function SignUp (){
    

    return (
        <div className="px-5 mt-14">
            <div className="space-y-8">
                <h1 className="text-4xl">Faça login com a sua conta</h1>
                <GoogleSingInButton/>
                <div className="flex flex-row justify-between space-x-4 align-middle items-center">
                    <div className="border-t-2 border-gray-200 w-full"/>
                    <h4 className="font-medium text-gray-300 text-lg">Ou</h4>
                    <div className="border-t-2 border-gray-200 w-full"/>
                </div>
            </div>
            <Form/>
            <h3 className="text-center mt-4 mb-12 text-gray-600">Ainda não tem uma conta? <span className="underline"><a href="/signUp">Faça agora!</a></span></h3>
        </div>
    )

    
}

export default SignUp

function GoogleIcon() {
    
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107"/>
            <path d="M3.15295 7.3455L6.43845 9.755C7.32745 7.554 9.48045 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15895 2 4.82795 4.1685 3.15295 7.3455Z" fill="#FF3D00"/>
            <path d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5718 17.5742 13.3038 18.001 12 18C9.39903 18 7.19053 16.3415 6.35853 14.027L3.09753 16.5395C4.75253 19.778 8.11353 22 12 22Z" fill="#4CAF50"/>
            <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2"/>
        </svg>

    )
}


function EyePasswordIcon() {

    return (
        <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.855 8.05835C21.5954 3.6496 17.1221 0.666687 12 0.666687C6.87789 0.666687 2.40331 3.65169 0.144977 8.05877C0.0496613 8.24732 0 8.45563 0 8.6669C0 8.87817 0.0496613 9.08648 0.144977 9.27502C2.40456 13.6838 6.87789 16.6667 12 16.6667C17.1221 16.6667 21.5966 13.6817 23.855 9.2746C23.9503 9.08606 24 8.87775 24 8.66648C24 8.45521 23.9503 8.2469 23.855 8.05835ZM12 14.6667C10.8133 14.6667 9.65325 14.3148 8.66656 13.6555C7.67986 12.9962 6.91083 12.0591 6.4567 10.9628C6.00257 9.86643 5.88375 8.66003 6.11527 7.49615C6.34678 6.33226 6.91822 5.26316 7.75734 4.42405C8.59645 3.58493 9.66555 3.01349 10.8294 2.78198C11.9933 2.55046 13.1997 2.66928 14.2961 3.12341C15.3924 3.57754 16.3295 4.34657 16.9888 5.33327C17.6481 6.31996 18 7.48 18 8.66669C18.0004 9.45473 17.8454 10.2351 17.544 10.9632C17.2426 11.6914 16.8007 12.353 16.2435 12.9102C15.6862 13.4674 15.0247 13.9094 14.2965 14.2107C13.5684 14.5121 12.788 14.6671 12 14.6667ZM12 4.66669C11.6429 4.67168 11.2882 4.72479 10.9454 4.8246C11.228 5.20863 11.3636 5.68122 11.3276 6.15666C11.2917 6.63211 11.0865 7.07891 10.7494 7.41606C10.4122 7.75321 9.96539 7.95837 9.48995 7.99434C9.01451 8.0303 8.54192 7.8947 8.15789 7.6121C7.93921 8.41777 7.97869 9.27172 8.27076 10.0538C8.56283 10.8358 9.0928 11.5066 9.78607 11.9717C10.4793 12.4367 11.301 12.6727 12.1354 12.6464C12.9698 12.62 13.7749 12.3326 14.4374 11.8247C15.1 11.3168 15.5865 10.6139 15.8287 9.81502C16.0708 9.01609 16.0563 8.16135 15.7872 7.37109C15.5181 6.58084 15.008 5.89487 14.3286 5.40973C13.6492 4.9246 12.8348 4.66472 12 4.66669Z" fill="#4B5563"/>
        </svg>
    )
}


function GoogleSingInButton () {
    const { signWithGoogle } = useAuth()
    const router = useRouter()

    const onSubmit = async (event) => {
        signWithGoogle()
            .then(authUser => {
                router.push(`/${authUser.user.uid}`)
            })
    }

    return (
        <div className="text-center bg-gray-50 border border-gray-300 rounded-lg">
            <button className="w-full py-5" onClick={onSubmit}>
                <div className="flex justify-between px-16">
                    <GoogleIcon/>
                    <h2 className="font-medium">Fazer login com Google</h2>
                </div>
            </button>
        </div>
    )

}


function Form() {

    const [email, setEmail] = useState("")
    const [passwordOne, setPasswordOne] = useState("")
    const [passwordTwo, setPasswordTwo] = useState("")
    const router = useRouter()
    const [error, setError] = useState(null)

    const { signInWithEmailAndPassword } = useAuth()


    const onSubmit = event => {
        setError(null)
        signInWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                router.push(`/${authUser.user.uid}`)
            })
            .catch(error => {
                setError(error.message)
            })

        event.preventDefault()
    }

    return (
        <div className="mt-10">
            <form onSubmit={onSubmit} className="space-y-8">
                <div className="space-y-6">
                    <div className="flex flex-col space-y-2">
                        <label>E-MAIL</label>
                        <input
                            className="py-4 w-full rounded-2xl border border-gray-200 px-2" 
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            name="email"
                            id="signUpEmail"
                            placeholder="Email"/>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label>SENHA</label>
                        <input 
                            className="py-4 w-full border rounded-2xl border-gray-200 px-2"
                            type="password"
                            name="password"
                            value={passwordOne}
                            onChange={(event) => setPasswordOne(event.target.value)}
                            id="signUpPassword"
                            placeholder="Password"/>
                    </div>
                </div>
                <button className="w-full rounded-2xl py-4 bg-purple-500 font-medium text-white text-center" onClick={onSubmit} >Acessar minha conta</button>
            </form>
        </div>
    )
}