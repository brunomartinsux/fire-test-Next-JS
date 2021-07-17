import { useRouter } from "next/router";

import { faGraduationCap, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function FooterComponent(){

    const router = useRouter();

    return(
        <div className="flex flex-row footer">
            <FontAwesomeIcon 
            icon={faHome} 
            size="lg" 
            opacity="50%" 
            className={router.pathname == "/" ? "active" : ""}
            onClick={() => router.push('/')}
            />
            <FontAwesomeIcon 
            icon={faGraduationCap } 
            size="lg" 
            opacity="50%"
            className={router.pathname == "/test" || router.pathname == "/test/subject" ? "active" : ""}
            onClick={() => router.push('/test')}
            />
            <FontAwesomeIcon icon={faUser} size="lg" opacity="50%"
            className={router.pathname == "/user" ? "active" : ""}
           
            />

        </div>
    )
}

export default FooterComponent