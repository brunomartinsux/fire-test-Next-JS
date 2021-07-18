import FooterComponent from '../components/Footer'
import Dashboard from './Dashboard'
import { useRouter } from 'next/router'
import axios from "axios"
import { useEffect, useState } from "react"


export default function App() {
    const router = useRouter()
    const { uid } = router.query

    const [userInfos, setUserInfos] = useState({
        completedQuestions: '',
        correctAwnsers: '',
        wrongAwnsers: ''

    })

    useEffect(() => {
        (async () => {
            const response = await axios.get(`api/getUserInfos/${uid}`)
            setUserInfos(response.data)
        })()
    }, [userInfos])

    return (
        <div>
            {userInfos && <Dashboard userInfos={userInfos} />}
            {uid && <FooterComponent uid={uid} />}
        </div>
    )

}
