import DashboardCards from "../components/dashboard/DashboardCards"
import Header from "../components/Header"


function Dashboard({ userInfos }){


    return(
        <div>
            <Header heading={'Dashboard'}></Header>
            <DashboardCards userInfos={userInfos}/>
        </div>
    )
}

export default Dashboard