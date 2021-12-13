import {Portfolio} from './Portfolio.jsx'
function Author(props) {
    return (
        <div className={props.authorContainer}>
                <h1>{props.authorName}</h1>
                <p>{props.authorSkills}</p>
            <Portfolio portfolioContainer="container-portfolio" />
        </div>
    )
}
export {Author};