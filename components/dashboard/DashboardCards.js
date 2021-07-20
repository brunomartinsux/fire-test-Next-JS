import Image from "next/image"



function DashboardCards({ userInfos }) {

    console.log(userInfos)
    
    return ( 
        <div>
            <div className="min-h-screen items-center p-5 cards-container">
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
                        <Image width="80px" height="80px" src="/wrong-asw.svg" alt="ranking" className="dash-icon" />
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