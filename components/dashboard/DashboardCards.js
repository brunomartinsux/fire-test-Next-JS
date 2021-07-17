import Image from "next/image"
import axios from "axios"
import { useEffect, useState } from "react"


function DashboardCards({ uid }) {

    const [userInfos, setUserInfos] = useState({})

    useEffect(() => {
        (async () => {
            const data = await axios.get('https://us-central1-firetest-mvp.cloudfunctions.net/getUserInfos/hALFyNPmazTW4DEeRPNFiiWlfB53')
            setUserInfos(data.data.userPoints)
        })()
    })

    return (
        <div>
            <div className="items-center p-5 cards-container">
                <div className="flex flex-row p-6 card-body mb-6 scale-in-ver-top scale-in-ver-top">
                    <div className="flex flex-col">
                        <Image width="80px" height="80px" src="/ranking.svg" alt="ranking" className="dash-icon" />
                    </div>
                    <div className="flex flex-col px-6">
                        <h4>Posição do Ranking</h4>
                        <h1>#1 de #1000</h1>
                    </div>
                </div>
                <div className="flex flex-row p-6 card-body mb-6 scale-in-ver-top">
                    <div className="flex flex-col">
                        <Image width="80px" height="80px" src="/answers.svg" alt="ranking" className="dash-icon" />
                    </div>
                    <div className="flex flex-col px-6">
                        <h4>Questões respondidas</h4>
                        <h1>{userInfos.completedQuestions}</h1>
                    </div>
                </div>
                <div className="flex flex-row p-6 card-body mb-6 scale-in-ver-top">
                    <div className="flex flex-col">
                        <Image width="80px" height="80px" src="/rigth-box.svg" alt="ranking" className="dash-icon" />
                    </div>
                    <div className="flex flex-col px-6">
                        <h4>Respostas corretas</h4>
                        <h1>{userInfos.correctAwnsers}</h1>
                    </div>
                </div>
                <div className="flex flex-row p-6 card-body mb-6 scale-in-ver-top">
                    <div className="flex flex-col">
                        <Image width="80px" height="80px" src="/answers.svg" alt="ranking" className="dash-icon" />
                    </div>
                    <div className="flex flex-col px-6">
                        <h4>Respostas erradas</h4>
                        <h1>{userInfos.wrongAwnsers}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DashboardCards