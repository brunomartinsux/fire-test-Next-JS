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
            const data = await axios.get(`https://us-central1-firetest-mvp.cloudfunctions.net/getUserInfos/${uid}`)
            setUserInfos(data.data.userPoints)
        })()
    }, [userInfos])

    return (
        <div>
            {userInfos && <Dashboard userInfos={userInfos} />}
            {uid && <FooterComponent uid={uid} />}
        </div>
    )

}
