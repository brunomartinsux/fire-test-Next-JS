function DashboardCards(){

    return(
       <div>
            <div className="items-center p-5 cards-container">
                <div className="flex flex-row p-6 card-body mb-6">
                    <div className="flex flex-col">
                        <img src="/ranking.svg" alt="ranking" className="dash-icon"/>
                    </div>
                    <div className="flex flex-col px-6">
                       <h4>Posição do Ranking</h4>
                       <h1>#1 de #1000</h1>
                    </div>
                </div>
                <div className="flex flex-row p-6 card-body mb-6">
                    <div className="flex flex-col">
                        <img src="/answers.svg" alt="ranking" className="dash-icon"/>
                    </div>
                    <div className="flex flex-col px-6">
                       <h4>Questões respondidas</h4>
                       <h1>185</h1>
                    </div>
                </div>
                <div className="flex flex-row p-6 card-body mb-6">
                    <div className="flex flex-col">
                        <img src="/rigth-box.svg" alt="ranking" className="dash-icon"/>
                    </div>
                    <div className="flex flex-col px-6">
                       <h4>Respostas corretas</h4>
                       <h1>185</h1>
                    </div>
                </div>
                <div className="flex flex-row p-6 card-body mb-6">
                    <div className="flex flex-col">
                        <img src="/answers.svg" alt="ranking" className="dash-icon"/>
                    </div>
                    <div className="flex flex-col px-6">
                       <h4>Provas concluídas</h4>
                       <h1>65</h1>
                    </div>
                </div>
            </div>
       </div>
    )
}
export default DashboardCards