import {Error404} from "./Error404";


function Error({statusCode}) {

    return <div className="error-container">
        <Error404 pageType={"system"}/>
    </div>;
}

Error.getInitialProps = ({res, err}) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return {statusCode}
}

export default Error