import { useRouter } from "next/router";

import { faGraduationCap, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function FooterComponent({ uid }) {
    const router = useRouter();

    return (
        <div className="flex flex-row footer">
            {
                uid && <FontAwesomeIcon
                    icon={faHome}
                    size="lg"
                    opacity="50%"
                    className={router.pathname == "/" ? "active" : ""}
                    onClick={() => router.push(`/${uid}`)}
                    />
            }
            {
                uid && <FontAwesomeIcon
                    icon={faGraduationCap}
                    size="lg"
                    opacity="50%"
                    className={router.pathname == "/start" || router.pathname == "/start/subject" ? "active" : ""}
                    onClick={() => router.push(`/start/${uid}`)}
                />
            }
            {
                uid && <FontAwesomeIcon 
                    icon={faUser} 
                    size="lg" 
                    opacity="50%"
                    className={router.pathname == "/user" ? "active" : ""}
                    onClick={() => router.push(`/config/${uid}`)}
                    />
            }
        </div>
    )
}

export default FooterComponent