import { Image } from './Image.jsx'
function Portfolio(props) {
    return (
        <div className={props.portfolioContainer}>

            <Image imageContainer="icon-container"
                imageLink="https://www.tokopedia.com/briansdream"
                src="https://lh3.googleusercontent.com/-8kwiuWLYQIg/YbdX80nNshI/AAAAAAAAABo/Ii2MfzFNz7EV3Sy8SECwYiMIPv1J1RDFwCNcBGAsYHQ/briansdream-logo.webp"
                imageClass="icon-image" imageAlt="briansdream-tokopedia" imageTitle="briansdream tokopedia"
            />
            <Image imageContainer="icon-container"
                imageLink="https://github.com/BriansDream"
                src="https://lh3.googleusercontent.com/-ELkhft3C8Fo/YbdfaV4s6XI/AAAAAAAAABw/x3A0KGPjoL8H6tBAbHhmbgwIVXp27fq8gCNcBGAsYHQ/github.webp"
                imageClass="icon-image" imageAlt="briansdream-github" imageTitle="briansdream github"
            />
            <Image imageContainer="icon-container"
                imageLink="https://www.linkedin.com/in/briansdream/"
                src="https://lh3.googleusercontent.com/-kS56QOQCqRU/Ybdfc-wYoGI/AAAAAAAAAB0/mWTuVa9YONgvOweGE7vT861BfZrPWjjmQCNcBGAsYHQ/linkedin.webp"
                imageClass="icon-image" imageAlt="briansdream-linkedin" imageTitle="briansdream linkedin"
            />
        </div>
    )
}

export { Portfolio }