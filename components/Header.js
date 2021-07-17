import { withRouter } from 'next/router'

function Header(props){

    const {children} = props

    const router = withRouter

    return(
        <div className="flex flex-row block header">
            <h1 className="heading">{props.children}</h1>
        </div>
    )
}

export default Header