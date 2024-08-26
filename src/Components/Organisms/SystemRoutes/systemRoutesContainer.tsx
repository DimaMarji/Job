import {FunctionComponent} from "react";
import {Outlet} from "react-router-dom";
import {SystemRoutesProps} from "./interface";


const SystemRoute: FunctionComponent<SystemRoutesProps> = () => {

    return (
        <>
            <div className="page-container">
                <Outlet/>
            </div>

        </>
    );
};

export default SystemRoute;
