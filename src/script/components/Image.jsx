
function Image(props) {

    return (
        <div className={props.imageContainer}>
            <a href={props.imageLink}>
                <img src={props.src} className={props.imageClass} alt={props.imageAlt} title={props.imageTitle}>
                </img>
            </a>
        </div>
    )

}

export { Image }