import { faArrowLeft, faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import router from "next/router";
import { Input } from "postcss";
import FooterComponent from "../../components/Footer";

function Subject(){

    const subjects = ['ARTES PLÁSTICAS', 'ARTES VISUAIS', 'ATUALIDADES', 'BIOLOGIA', 'CIÊNCIAS']

    return(
        <div>
            {/* Header com rota de disciplina */}
            <div className="flex flex-row block header justify-around">
                <div className="flex" onClick={()=> {router.push('/test')}}>
                    <FontAwesomeIcon icon={faArrowLeft} size="lg" color="#FFF"/>
                </div>
                    <h5 style={{fontSize: "20px", fontWeight: "bold", color: "#FFF"}}>Escolher disciplina</h5>
                <div className="flex">
                    <FontAwesomeIcon icon={faArrowRight} size="lg" color="#FFF"/>
                </div>
            </div>
            <div className="block bg-fixed"></div>
            {/* Fim do Header */}
            <div className="flex flex-col justify-center px-6" style={{paddingTop: "100px"}}>
                <input id="searchBar" type="text" class="form-control" placeholder="Pesquise a disciplina..."/>
            </div>
            
            <div className="flex flex-col block pb-12">
            { subjects.map(item => {
                return (
                    <div className="flex flex-row justify-between px-6 sub-row">
                        <h3>{item}</h3>
                        <FontAwesomeIcon icon={faPlus}/>
                    </div>
                )
            })}
            </div>

            <FooterComponent/>
        </div>
    )
}

export default Subject