import FooterComponent from '../../components/Footer'
import Header from '../../components/Header'
import { useRouter } from 'next/router'
import axios from "axios"
import { useState } from "react"


export default function App() {
    const router = useRouter()
    const { uid } = router.query


    return (
        <div>
            {uid && <UserSettings uid={uid}/>}
            {uid && <FooterComponent uid={uid}/>}
        </div>
    )

}

function UserSettings ({ uid }) {

    async function focousOff(event) {
        let data = {}
        const { value, id } = event.target
        data[id] = value

        const requestData = {
            uid: uid,
            data: data
        }

        console.log(requestData)

        await axios({
            url: 'https://us-central1-firetest-mvp.cloudfunctions.net/patchUserInfo/',
            method: 'POST',
            data: requestData
        })

    }

    return (
        <div className="flex flex-col overflow-scroll">
            <Header heading={'Configurações'}/>
            <div className="relative py-28 bg-gray-800 min-h-screen space-y-6">
                <TogleButton buttomName="Dados Pessoais">
                    <div className="space-y-2">
                        <label className="text-white">NOME COMPLETO</label>
                        <input onBlur={focousOff} id="name" className="text-white px-3 py-4 w-full border rounded-2xl bg-gray-600"/>
                    </div>
                    <div className="space-y-2">
                        <label className="text-white">E-MAIL</label>
                        <input onBlur={focousOff} id="email" className="text-white px-3 py-4 w-full border rounded-2xl bg-gray-600"/>
                    </div>
                    <div className="space-y-2">
                        <label className="text-white">CIDADE</label>
                        <input onBlur={focousOff} id="city" className="text-white px-3 py-4 w-full border rounded-2xl bg-gray-600"/>
                    </div>
                    <div className="space-y-2">
                        <label className="text-white">CURSO</label>
                        <input onBlur={focousOff} id="course" className="text-white px-3 py-4 w-full border rounded-2xl bg-gray-600"/>
                    </div>
                </TogleButton>
                <TogleButton buttomName="Assinatura">
                    <div className="space-y-7 bg-gray-800 p-6 rounded-2xl">
                        <h3 className="text-white">Atualmente você está usando o <span>Plano FREE</span></h3>
                        <h3 className="text-white">Se você deseja fazer o upgrade para uma conta Premium, acesse nossa página de Planos e Preços</h3>
                        <button className="text-white bg-purple-500 w-full text-xls font-medium py-4 rounded-2xl">Veja os Planos e Preços</button>
                    </div>
                </TogleButton>
                <ExitButton>Sair</ExitButton>
            </div>
        </div>
    )
}

function TogleButton ({ children, buttomName }) {

    const [open, setOpen] = useState(false)

    function onClickOpen() {
        setOpen(!open)
    }

    return (
        <div className="mx-5 bg-gray-600 rounded-2xl">
            <button onClick={onClickOpen} className="w-full">
                <h1 className="text-white text-left text-xl font-normal px-4 py-6">{buttomName}</h1>
            </button>
            <div className={open ? "flex flex-col px-4 py-6 space-y-4" : "hidden"}>
                {children}
            </div>
        </div>
    )
}

function ExitButton({ children }) {

    const [open, setOpen] = useState(false)

    function onClickOpen() {
        setOpen(!open)
    }

    return (
        <div className="mx-5 bg-gray-600 rounded-2xl">
            <button onClick={onClickOpen} className="w-full">
                <h1 className="text-white text-left text-xl font-normal px-4 py-6">{children}</h1>
            </button>
        </div>
    )
}