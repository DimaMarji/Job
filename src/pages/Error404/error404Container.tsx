
import { useNavigate } from "react-router-dom"
import"./styles.scss"
import {Button} from "../../Components/Atoms/Button";

import error404Image from "../../public/Assets/Images/Error/error-404.png"
import Image from "next/image";

const Error404Page:React.FC=()=>{
    const navigate=useNavigate()
    return<div className="error-404">
        <Image alt={"error404Image"} src={error404Image}/>
        <Button
              type="primary"
              className={"primary-button"}
               onClick={() => {
                                navigate("/")
                            }} >Go to home page</Button>
                    
    </div>
}

export default Error404Page