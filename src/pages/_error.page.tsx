import {Error404} from "./Error404";


function Error({statusCode}:any) {

    return <div className="error-container">
        <Error404 />
    </div>;
}

Error.getInitialProps = ({res, err}:any) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return {statusCode}
}

export default Error