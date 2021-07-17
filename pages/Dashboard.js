import DashboardCards from "../components/dashboard/DashboardCards"
import Header from "../components/Header"


function Dashboard({uid}){

    return(
        <div>
            <Header heading={'Dashboard'}></Header>
            <DashboardCards uid={uid}/>
        </div>
     
    )
}

export default Dashboard