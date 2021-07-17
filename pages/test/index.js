import Header from "../../components/Header";
import FooterComponent from "../../components/Footer";
import TestCards from "../../components/test/TestCards";

function Test (){

    return(
        <div>
            <Header heading={'Simulado'}></Header>
            <TestCards/>
            <FooterComponent/>
        </div>
    )
}

export default Test