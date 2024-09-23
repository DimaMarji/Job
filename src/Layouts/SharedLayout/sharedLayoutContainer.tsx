import React, {FunctionComponent, useEffect, useState} from "react";
import SharedNavBar from "./NavBar";
import "./style.scss"
import SharedFooter from "./Footer";
import {useRouter} from "next/router";
import {useAppMediaQuery} from "../../Hooks/MediaQuery/use-app-media-query";
import {Affix} from "antd";
import { useCookies } from "react-cookie";


const SharedLayout: FunctionComponent<any> = (props) => {

    const [toggleMenu, setToggleMenu] = useState<boolean>(false)
    const [isHeaderShadowVisible, setIsHeaderShadowVisible] = useState<boolean>(false)
    const {asPath, query, push} = useRouter()

    const{isLargeDesktop}=useAppMediaQuery()
    const [cookies, setCookie] = useCookies(['token']);
useEffect(()=>{
console.log(cookies)
if(!cookies?.token){
    push("/login")
}
},[cookies?.token])
    useEffect(() => {
        setIsHeaderShadowVisible(false)
        document.body.style.overflow = 'auto';
    }, [asPath])

    const Layout = <div className={`layout-header-parent-container ${isHeaderShadowVisible && "shadowable"}`}>

        <div className="layout-header-parent">

            <div className="layout-header">
                <SharedNavBar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
            </div>
        </div>
    </div>

    return (
        <>

            <div className={`layout-container`}>
                {(toggleMenu) ? <>{Layout}</> :
                    <Affix offsetTop={0}>
                    {Layout}
                </Affix>}
                <div onWheel={(e) => {
                    // TODO: doc Next-----------------------------
                    if (document.documentElement.scrollTop >= 100) {
                        setIsHeaderShadowVisible(true)
                    } else {
                        setIsHeaderShadowVisible(false)
                    }
                }}
                     onTouchMove={(e) => {
                         if (document.documentElement.scrollTop >= 5) {
                             setIsHeaderShadowVisible(true)
                         } else {
                             setIsHeaderShadowVisible(false)
                         }
                     }}
                     style={toggleMenu ? {display: "none"} : {}} className="layout-content">
                    <div className="page-container">
                            {props.children}
                    </div>
                </div>
                <div  style={toggleMenu ? {display: "none"} : {}} className="layout-footer">
                    <SharedFooter/>
                </div>
            </div>


        </>
    );
};

export default SharedLayout;
