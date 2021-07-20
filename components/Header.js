import { withRouter } from 'next/router'

function Header(props){

    const {heading} = props

    const router = withRouter

    return(
        <div className="flex flex-row header md:hidden">
            <h1 className="heading slide-in-left">{props.heading}</h1>
        </div>
    )
}

export default Header