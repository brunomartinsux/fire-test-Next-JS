import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/router";
import FooterComponent from "../../components/Footer";
import ExampleImage from './../../public/image-ex.svg'


function Quiz() {

    const router = useRouter()

    const { uid } = router.query


    return (
        <div>
            {/* Inicio do header */}
            <div className="flex flex-row header justify-around" >
                <div className="flex" onClick={() => { router.push(`/start/${uid}`) }}>
                    <FontAwesomeIcon icon={faArrowLeft} size="lg" color="#FFF" />
                </div>
                <h5 style={{ fontSize: "20px", fontWeight: "bold", color: "#FFF" }}>Simulado</h5>
                <div className="flex">
                </div>
            </div>
            <div className="block bg-fixed "></div>
            {/* Fim do header */}

            <div className="flex flex-col px-4" style={{ marginTop: '80px' }}>
                <p style={{ color: '#8B5CF6', fontSize: '14px' }} className="py-3">2018/Matemática/Análise de Tabelas e Gráficos</p>
                <Image width="80px" height="80px" src={ExampleImage} alt="ranking" className="" />
                <div className="text-box py-4">
                    <p>
                        Uma pesquisa de mercado sobre produtos de higiene e limpeza apresentou o comparativo entre duas marcas,
                        A e B. Esses produtos são concentrados e, para sua utilização, é necessária sua diluição em água.
                        O quadro apresenta a comparação em relação ao preço dos produtos de cada marca e ao rendimento de cada produto em litro.
                        Um consumidor pretende comprar um litro de cada produto e para isso escolherá a marca com o menor custo
                        em relação ao rendimento.Nessas condições, as marcas dos quatro produtos adquiridos pelo
                        consumidor, na ordem apresentada na tabela, são:
                    </p>
                </div>
                <div className="flex flex-col justify-content-center" style={{ paddingBottom: '150px'}}>
                    <div
                        className="answer-input pl-5"
                        onClick={e => {
                            if (e.target.hasAttribute('selected')) {
                                e.target.removeAttribute('selected')
                            } else {
                                e.target.setAttribute('selected', '')
                               
                            }
                        }}
                    >
                        <div className="answer-index mr-4">A</div>
                        <h3 className="answer-value">A, B, C, D</h3>

                    </div>
                    <div
                        className="answer-input pl-5"
                        onClick={e => {
                            if (e.target.hasAttribute('selected')) {
                                e.target.removeAttribute('selected')
                            } else {
                                e.target.setAttribute('selected', '')
                             
                            }
                        }}
                    >
                        <div className="answer-index mr-4">B</div>
                        <h3 className="answer-value">A, B, C, D</h3>

                    </div>
                    <div
                        className="answer-input pl-5"
                        onClick={e => {
                            if (e.target.hasAttribute('selected')) {
                                e.target.removeAttribute('selected')
                            } else {
                                e.target.setAttribute('selected', '')
                             
                            }
                        }}
                    >
                        <div className="answer-index mr-4">C</div>
                        <h3 className="answer-value">A, B, C, D</h3>

                    </div>
                    <div
                        className="answer-input pl-5"
                        onClick={e => {
                            if (e.target.hasAttribute('selected')) {
                                e.target.removeAttribute('selected')
                            } else {
                                e.target.setAttribute('selected', '')
                               
                            }
                        }}
                    >
                        <div className="answer-index mr-4">D</div>
                        <h3 className="answer-value">A, B, C, D</h3>

                    </div>
                    <div
                        className="answer-input pl-5"
                        onClick={e => {
                            if (e.target.hasAttribute('selected')) {
                                e.target.removeAttribute('selected')
                            } else {
                                e.target.setAttribute('selected', '')
                               
                            }
                        }}
                    >
                        <div className="answer-index mr-4">E</div>
                        <h3 className="answer-value">A, B, C, D</h3>

                    </div>
                </div>
            </div>
            <button className="btn btn-primary" onClick={() => router.push(`/quiz/${uid}`)} >Próximo <FontAwesomeIcon icon={faArrowRight} /> </button>


            <FooterComponent />
        </div>
    )
}

export default Quiz