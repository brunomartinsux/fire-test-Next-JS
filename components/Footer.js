import { useRouter } from "next/router";

import { faGraduationCap, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function FooterComponent() {
    const router = useRouter();

    const { uid } = router.query

    console.log(router.pathname)

    return (
        <div className="flex flex-row footer">
            {
                uid && <FontAwesomeIcon
                    icon={faHome}
                    size="lg"
                    opacity="50%"
                    className={router.pathname == `/[uid]` ? "active" : ""}
                    onClick={() => router.push(`/${uid}`)}
                    />
            }
            {
                uid && <FontAwesomeIcon
                    icon={faGraduationCap}
                    size="lg"
                    opacity="50%"
                    className={router.pathname == `/start/[uid]` || router.pathname == `/start/subject/[uid]` || router.pathname == `/filter/[uid]` ? "active" : ""}
                    onClick={() => router.push(`/start/${uid}`)}
                />
            }
            {
                uid && <FontAwesomeIcon 
                    icon={faUser} 
                    size="lg" 
                    opacity="50%"
                    className={router.pathname == "/config/[uid]" ? "active" : ""}
                    onClick={() => router.push(`/config/${uid}`)}
                    />
            }
        </div>
    )
}

export default FooterComponent