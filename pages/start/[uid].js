import Header from "../../components/Header";
import FooterComponent from "../../components/Footer";
import TestCards from "../../components/test/TestCards";
import { useRouter } from 'next/router'

function Test (){
    const router = useRouter()
    const { uid } = router.query
    

    return(
        <div>
            <Header heading={'Simulado'}></Header>
            {uid && <TestCards uid={uid}/>}
            <FooterComponent/>
        </div>
    )
}

export default Test