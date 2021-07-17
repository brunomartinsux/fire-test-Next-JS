import FooterComponent from '../components/Footer'
import Dashboard from './Dashboard'
import { useRouter } from 'next/router'

export default function App() {
    const router = useRouter()
    const { uid } = router.query
    console.log(`DIRECIONANDO -> ${uid}`)


    return (
        <div>
            <Dashboard uid={uid} />
            <FooterComponent />
        </div>
    )

}
