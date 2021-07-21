import { useRouter } from "next/router";

import { faGraduationCap, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function FooterComponent() {

    const router = useRouter();

    const { uid } = router.query

    return (
        <div className="md:space-y-12 fixed bottom-0 md:h-screen md:w-1/4 rounded-t-3xl md:rounded-t-none md:rounded-r-3xl p-10 text-2xl md:text-2xl justify-between md:justify-center items-center md:items-start flex md:flex-col flex-row w-full bg-gray-900 h-16 text-white">
            <div onClick={() => router.push(`/${uid}`)} className={router.pathname == `/[uid]` ? "md:flex justify-start md:bg-gray-600 md:py-7 md:pl-6 md:pr-40 md:rounded-xl md:text-purple-500" : "md:flex md:justify-start md:py-7 md:pl-6 md:pr-40 md:rounded-xl"}>
                {
                    uid && <FontAwesomeIcon
                        icon={faHome}
                        size="lg"
                        opacity="50%"
                        className={router.pathname == `/[uid]` ? "active" : ""}
                        onClick={() => router.push(`/${uid}`)}
                    />
                }
                <h1 className="hidden md:flex ml-4 items-center">Dashboard</h1>
            </div>
            <div onClick={() => router.push(`/start/${uid}`)} className={router.pathname == `/start/[uid]` || router.pathname == `/start/subject/[uid]` || router.pathname == `/filter/[uid]` || router.pathname == `/quiz/[uid]` ? "md:flex justify-start md:bg-gray-600 md:py-7 md:pl-6 md:pr-40 md:rounded-xl md:text-purple-500" : "md:flex md:justify-start md:py-7 md:pl-6 md:pr-40 md:rounded-xl"}>
                {
                    uid && <FontAwesomeIcon
                        icon={faGraduationCap}
                        size="lg"
                        opacity="50%"
                        className={router.pathname == `/start/[uid]` || router.pathname == `/start/subject/[uid]` || router.pathname == `/filter/[uid]`|| router.pathname == `/quiz/[uid]` ? "active" : ""}
                        onClick={() => router.push(`/start/${uid}`)}
                    />
                }
                <h1 className="hidden md:flex ml-4 items-center">Simulados</h1>
            </div>
            <div onClick={() => router.push(`/config/${uid}`)} className={router.pathname == "/config/[uid]" ? "md:flex justify-start md:bg-gray-600 md:py-7 md:pl-6 md:pr-40 md:rounded-xl md:text-purple-500" : "md:flex md:justify-start md:py-7 md:pl-6 md:pr-40 md:rounded-xl"}>
                {
                    uid && <FontAwesomeIcon
                        icon={faUser}
                        size="lg"
                        opacity="50%"
                        className={router.pathname == "/config/[uid]" ? "active" : ""}
                        onClick={() => router.push(`/config/${uid}`)}
                    />
                }
                <h1 className="hidden md:flex ml-4 items-center">Conta</h1>
            </div>
        </div>
    )
}

export default FooterComponent