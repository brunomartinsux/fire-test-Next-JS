import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import FooterComponent from "../../components/Footer"
import InputRange from 'react-input-range';

function Filter() {

    const [valid, isValid] = useState(false)
    const [years, setYears] = useState([])
    const [quantity, setQuantity] = useState(50)


    const router = useRouter()

    const { uid } = router.query

    useEffect(() => {

        const index = []
        for (let i = 1994; i < 2021; i++) {
            index.push(i)

        }
        console.log(typeof index)
        index.sort((a, b) => b - a)
        setYears(index)
    }, [])

    return (
        <div>
            {/* Inicio do header */}
            <div className="flex flex-row header justify-around" >
                <div className="flex" onClick={() => { router.push(`/start/${uid}`) }}>
                    <FontAwesomeIcon icon={faArrowLeft} size="lg" color="#FFF" />
                </div>
                <h5 style={{ fontSize: "20px", fontWeight: "bold", color: "#FFF" }}>Mais detalhes</h5>
                <div className="flex">
                </div>
            </div>
            <div className="block bg-fixed "></div>
            {/* Fim do Header */}
            <div display="flex flex-col px-6">
                <div className="flex flex-col justify-center slide-in-left" style={{ paddingTop: "100px" }}>
                    <div className="flex flex-row justify-between px-6 sub-row " style={{ height: "56px", width: 'auto' }}
                        onClick={e => {
                            if (e.target.hasAttribute('selected')) {
                                e.target.removeAttribute('selected')
                                document.getElementById('searchBar').className = 'hidden'

                            } else {
                                e.target.setAttribute('selected', '')
                                document.getElementById('searchBar').className = ''
                            }
                        }}
                    >ESCOLHER ANO</div>
                </div>
                <div id={"searchBar"} className="hidden">
                    <h3 className="link-select ml-7 my-2">Selecione todos os anos</h3>
                    <div className="grid grid-flow-row  grid-cols-3 gap-4 px-6" style={{ marginBottom: '80px' }}>
                        {
                            years.map((item, key) => {
                                return (
                                    <div
                                        key={key}
                                        className="year-select pl-5"
                                        onClick={e => {
                                            if (e.target.hasAttribute('selected')) {
                                                e.target.removeAttribute('selected')
                                            } else {
                                                e.target.setAttribute('selected', '')
                                                isValid(true)
                                            }
                                        }}
                                    >
                                        {item}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="flex flex-col drag-card p-6 m-6">
                    <h4>QUANTIDADE DE QUESTÕES</h4>
                    <h2 className="text-center py-6 px-6" style={{ fontSize: '24px' }}>{quantity}</h2>
                    <InputRange
                        maxValue={180}
                        minValue={15}
                        value={quantity}
                        onChange={value => setQuantity(value)} />
                </div>
                <div className="flex flex-row justify-center px-5 mb-12">
                    <div className="select-subject px-4"
                        onClick={e => {
                            if (e.target.hasAttribute('selected')) {
                                e.target.removeAttribute('selected')
                            } else {
                                e.target.setAttribute('selected', '')
                            }
                        }}
                        style={{ marginBottom: '105px' }}
                    >Permitir questões já respondidas</div>
                </div>
                <button className="btn btn-primary" hidden={!valid} onClick={() => router.push(`/quiz/${uid}`)} >Começar <FontAwesomeIcon icon={faArrowRight} /> </button>
            </div>
            <FooterComponent />
        </div>
    )
}

export default Filter