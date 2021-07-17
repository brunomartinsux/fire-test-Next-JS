import { faArrowLeft, faArrowRight, faCheckCircle, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import router from "next/router";
import { useEffect, useState } from "react";
import FooterComponent from "../../components/Footer";

function Subject(){

    const [subjects, setSubjects ] = useState([])
   

    useEffect(() => {
        (async () => {
            const data = await axios.get('https://us-central1-firetest-mvp.cloudfunctions.net/allSubjects')
            setSubjects(data.data.subjects)
        })()
    }, [])

    function checkAll(title){

      const  elements =  document.getElementsByName(title);
      for(let i = 0; i < elements.length; i++){
          if(elements[i].hasAttribute('selected')){
            elements[i].removeAttribute('selected')
          }else{
            elements[i].setAttribute('selected', '')
          }
      }
       
    }

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
            <div className="flex flex-col justify-center px-6 slide-in-left" style={{paddingTop: "100px"}}>
                <input id="searchBar" type="text" className="form-control" placeholder="Pesquise a disciplina..."/>
            </div>
            
            <div className="flex flex-col block pb-12">
                {Object.keys(subjects).sort().map((item,key) => {
                    const title  = item
                    const subtitle = subjects[item]


                    return (
                        <div key = {key} className="">
                            <div
                                className="flex flex-row justify-between px-6 sub-row scale-in-ver-top"
                                onClick={e =>{
                                    if(e.target.className == "flex flex-row justify-between px-6 sub-row scale-in-ver-top"){
                                        e.target.className = "flex flex-row justify-between px-6 sub-row scale-in-ver-top active-accordion"

                                        document.getElementById(title).className = "pb-6"
                                    } else {
                                        e.target.className = "flex flex-row justify-between px-6 sub-row scale-in-ver-top"
                                        document.getElementById(title).className = "hidden"
                                    }
                                }}
                                >
                                <h3>{title}</h3>
                            </div>
                            <div id={title} className="hidden">
                                <h3 className="py-6 px-7 link-select" onClick={()=> checkAll(title)}>Selecionar todos os assuntos <FontAwesomeIcon icon={faCheckCircle}/></h3>
                            {Object.keys(subtitle).sort().map((item,key) => {
                                return(
                                    <div key={key} className="flex flex-row justify-center px-6">
                                        <div className="select-subject mb-6 px-4"
                                        name={title} 
                                        onClick={e => {
                                            if(e.target.hasAttribute('selected')){
                                                e.target.removeAttribute('selected')
                                            } else {
                                                e.target.setAttribute('selected', '')
                                            }
                                        }}> {subtitle[key]}</div>
                                    </div>
                                )
                            })}
                            </div>
                        </div>
                    )
                })}
            </div>

            <FooterComponent/>
        </div>
    )
}

export default Subject