import DashboardCards from "../components/dashboard/DashboardCards"
import Header from "../components/Header"


function Dashboard(){

    return(
        <div>
            <Header heading={'Dashboard'}></Header>
            <DashboardCards/>
        </div>
     
    )
}

export default Dashboard