import Image from "next/image"
import { useRouter } from "next/router";


function TestCards({ uid }){

    const router = useRouter();

    return(
        <div>
             <div className="items-center p-5 cards-container">
                 <div className="flex flex-row p-6 test-card-body mb-6 scale-in-ver-top" onClick={()=> {router.push(`/start/subject/${uid}`)}}>
                    <div className="flex flex-col card-text">
                        <p>MONTE SEU DESAFIO</p>
                        <h5>Selecione quais disciplinas 
                        e conteúdos você deseja estudar</h5>
                     </div>
                     <div className="flex flex-col">
                         <Image width="140px" height="140px" src="/build-icon.svg" alt="ranking"/>
                     </div>  
                 </div>

                 <div className="flex flex-row p-6 test-card-body mb-6 scale-in-ver-top" onClick={()=> {router.push(`/filter/${uid}`)}}>
                    <div className="flex flex-col card-text">
                        <p>QUESTÕES ALEATÓRIAS</p>
                        <h5>Faça o simulado respondendo 
                            as questões aleatóriamente</h5>
                     </div>
                     <div className="flex flex-col">
                         <Image width="140px" height="140px" src="/arrow-icons.svg" alt="ranking"/>
                     </div>  
                 </div>

                 <div className="flex flex-row p-6 test-card-body mb-6 scale-in-ver-top" onClick={()=> {router.push(`/filter/${uid}`)}}>
                    <div className="flex flex-col card-text">
                        <p>INTENSIVO</p>
                        <h5>respondendo as questões aleatóriamente 
                            Faça o simulado</h5>
                     </div>
                     <div className="flex flex-col">
                         <Image width="140px" height="140px" src="/brain-icon.svg" alt="ranking"/>
                     </div>  
                 </div>
             </div>
        </div>
     )
}

export default TestCards