import {useNavigate} from "react-router-dom"
import "./styles.scss"
import {Button} from "../../Components/Atoms/Button";

import error500Image from "../../public/Assets/Images/Error/error-500.png";
import Image from "next/image";

const Error500Page: React.FC = () => {
    const navigate = useNavigate()
    return <div className="error-404">
        <Image alt={"error500Image"} src={error500Image}/>
        <Button
            type="primary"
            className={"primary-button"}
            onClick={() => {
                navigate("/")
            }}>Go to home page</Button>

    </div>
}

export default Error500Page