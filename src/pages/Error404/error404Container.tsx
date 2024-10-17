import {Button} from "../../Components/Atoms/Button";

import error404Image from "../../public/Assets/Images/Error/error-404.png"
import Image from "next/image";
import {useRouter} from "next/router";

const Error404Page: React.FC = () => {
    const {push} = useRouter()
    return <div className="error-404">
        <Image alt={"error404Image"} src={error404Image}/>
        <Button
            type="primary"
            className={"primary-button"}
            onClick={() => {
                push("/")
            }}>Go to home page</Button>

    </div>
}

export default Error404Page