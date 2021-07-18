import FooterComponent from '../../components/Footer'
import Header from '../../components/Header'
import { useRouter } from 'next/router'
import axios from "axios"
import { useEffect, useState } from "react"


export default function App() {
    const router = useRouter()
    const { uid } = router.query


    return (
        <div>
            <UserSettings/>
            {uid && <FooterComponent uid={uid}/>}
        </div>
    )

}



function UserSettings () {

    return (
        <div className="flex flex-col">
            <Header heading={'Configurações'}/>
            <div className="relative pt-28 bg-gray-800 min-h-screen">
                <TogleButton/>
            </div>
        </div>
    )
}

function TogleButton () {

    const [open, setOpen] = useState(false)

    function onClickOpen() {
        setOpen(!open)
    }

    return (
        <div className="mx-5 bg-gray-600 rounded-2xl">
            <button onClick={onClickOpen} className="w-full">
                <h1 className="text-white text-left text-xl font-normal px-4 py-6">Dados Pessoais</h1>
            </button>
            <div className={open ? "flex" : "hidden"}>
                <h1>oi</h1>
            </div>
        </div>
    )
}