import { AuthUserProvider } from '../context/authContext'
import 'tailwindcss/tailwind.css'
import '/styles/dashboard.css'
import '@fortawesome/fontawesome-free/css/all.css'

import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 

function MyApp({ Component, pageProps }) {

    return <AuthUserProvider><Component {...pageProps} /></AuthUserProvider>

}

export default MyApp;
