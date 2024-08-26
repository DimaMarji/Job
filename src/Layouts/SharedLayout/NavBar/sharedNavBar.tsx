import React, {FunctionComponent, useEffect, useState} from "react";
import "./styles.scss";
import {useAppMediaQuery} from "../../../Hooks/MediaQuery/use-app-media-query";
import {useRouter} from "next/router";
import Arrow from "../../../public/Assets/Icons/down-arrow.svg"
import Image from "next/image";
import MenuIcon from "../../../public/Assets/Icons/General/menu-icon.png"
import CloseIcon from "../../../public/Assets/Icons/General/close-icon.png"
import LogoImage from "../../../public/Assets/Images/template/jobhub-logo.svg"
import {Button} from "../../../Components/Atoms/Button";
import {Text} from "../../../Components/Atoms/Typography/Text";
import {Dropdown, Space } from "antd";
import { Layout } from "antd";

interface SharedNavBarProps {
    setToggleMenu?: any;
    toggleMenu?: boolean;
}
const {Header} =Layout
const SharedNavBar: FunctionComponent<SharedNavBarProps> = ({setToggleMenu, toggleMenu}) => {

    const router = useRouter()
    const {push, asPath: selected} = useRouter()

    const {serviceName} = router.query;

    const {isMobileOrTablet} = useAppMediaQuery();
    const [ourProcessDropdownOpen, setOurProcessDropdownOpen] = useState<boolean>(false)
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState<boolean>(false)
    const [ourProjectsDropdownOpen, setOurProjectsDropdownOpen] = useState<boolean>(false)

    const toggleNav = (value: boolean, event: any) => {
        event.preventDefault()
        setToggleMenu(value)
    }

    const toggleDropdown = (setDropdownOpen) => {
        setDropdownOpen(prevState => {
            return !prevState
        })
    }

    const handleNavigate = (path: string, event: any, setDropdownOpen: any) => {
        setDropdownOpen(prevState => {
            return !prevState
        })
        push(path);
        toggleNav(false, event)
    }

    const openMenu = <Button
        onClick={(event: any) => toggleNav(true, event)}
        className="menu-button"
        type={"link"}
        icon={
            <Image alt={"menu-icon"} src={MenuIcon}/>}
    />
    const closeMenu = <Button
        onClick={(event: any) => toggleNav(false, event)}
        className="menu-button"
        type={"link"}
        icon={<Image alt={"close-icon"} className={"close-icon"} src={CloseIcon}/>}
    />

    const onProcessMenu =
        {
            className: "process-dropdown",
            onClick: () => toggleDropdown(setOurProcessDropdownOpen),
            items: [
                {
                    label: (
                        <Text
                            typographyType={{size: "14px-14px-14px", type: "regular-regular-regular"}}
                            className={`process-link ${selected?.endsWith("ui-ux-process") ? "selected-process" : ""}`}
                            onClick={(event: any) => handleNavigate("/our-process/ui-ux-process", event, setOurProcessDropdownOpen)}
                        >
                            UIUX design
                        </Text>
                    ),
                    key: '0',
                },
                {
                    label: (
                        <Text
                            className={`process-link ${selected?.endsWith("agile-development") ? "selected-process" : ""}`}
                            typographyType={{size: "14px-14px-14px", type: "regular-regular-regular"}}
                            onClick={(event: any) => handleNavigate("/our-process/agile-development", event, setOurProcessDropdownOpen)}
                        >
                            Agile
                        </Text>
                    ),
                    key: '1',
                },
            ]
        }





    const menuItemsData = [
        {
            key: "/",
            label: "Home"
        },
        {
            key: ["/AboutUs", "/about-us"],
            label: "About Us"
        },
        {
            type: 'dropdown',
            key: ["/OurProcess", "/our-process"],
            label: "Our process",
            menu: onProcessMenu,
            open: ourProcessDropdownOpen,
            setOpen: setOurProcessDropdownOpen
        },
        {
            key: ["/Careers", "/careers"],
            label: "Career"
        },
        {
            key: ["/Blogs", "/blogs"],
            label: "Blog"
        }
    ];


    const menuItems = menuItemsData?.map((item, index) => {
        const isSelected =
            item.key === '/'
                ? selected === item.key
                : Array.isArray(item.key)
                ? item.key.some(key => selected.startsWith(key))
                : selected.startsWith(item.key);

        return (
            <>
                {item.type === 'dropdown' ? (
                    <Dropdown
                        trigger={isMobileOrTablet ? ['click'] : ['hover']}
                        onOpenChange={isMobileOrTablet ? () => {
                        } : item.setOpen}
                        key={index}
                        open={item.open}
                        menu={item.menu}
                        dropdownRender={item.overlay ? () => <div>{item.overlay}</div> : undefined}
                        getPopupContainer={trigger => trigger.parentNode as HTMLElement}
                    >
                        <Space className={`navbar-dropdown ${item?.label}`}
                               onClick={() => isMobileOrTablet && item?.setOpen(!item?.open)}>
                            <Text
                                className={
                                    isSelected
                                        ? 'header-menu-item navbar-selected-item'
                                        : 'header-menu-item navbar-not-selected-item'
                                }
                                typographyFontColor={'#444754'}
                                typographyType={{size: '16px-18px-18px', type: 'regular-semi-bold-semi-bold'}}
                            >
                                {item.label}
                            </Text>
                            <Image className={'up-down-icons'} src={Arrow} alt={'down arrow'}/>
                        </Space>
                    </Dropdown>
                ) : (
                    <Text
                        key={index}
                        className={
                            isSelected
                                ? 'header-menu-item navbar-selected-item'
                                : 'header-menu-item navbar-not-selected-item'
                        }
                        onClick={event => {
                            push(item.key[0], item.key[1], {scroll: true});
                            toggleNav(false, event);
                        }}
                        typographyFontColor={'#444754'}
                        typographyType={{size: '16px-18px-18px', type: 'regular-semi-bold-semi-bold'}}
                    >
                        {item.label}
                    </Text>
                )}
            </>
        );
    });

    const menu = <>
        <Space className={"header-space"}>
            {menuItems}
        </Space>
        {(toggleMenu && isMobileOrTablet) ? <Button
                type={"primary"}
                className={"get-in-touch"}
                onClick={(event) => {
                    push("/ContactUs", "/contact-us", {shallow: true});
                    toggleNav(false, event);
                }}
            >
                Sign In
            </Button>
            :
            <div className={"get-in-touch-div"} id={"get-in-touch-div"}>
                <Button
                    type={"primary"}
                    className={"get-in-touch"}
                    onClick={(event) => {
                        push("/ContactUs", "/contact-us", {shallow: true});
                        toggleNav(false, event);
                    }}
                >
                    Sign In
                </Button>
            </div>
        }
    </>


    const [isHydrated, setHydrated] = useState(false);

    //when the client-side hydration is complete set to true
    // to ensure that the initial server-rendered HTML matches the hydrated client-side
    useEffect(() => {
        setHydrated(true);
    }, []);


    return (<>
            <style global jsx>
                {`
                  html {
                    scroll-behavior: smooth;
                  }
                `}</style>
            <Header
                id="zcoderz-nav"
                className={!toggleMenu || !isMobileOrTablet ? "header-container" : "header-container-menu-opened"}
            >


                <div className={"navbar-header"}>
                    <Button type={"link"} onClick={(event) => {
                        push("/", "/");
                        toggleNav(false, event)
                    }} className={"logo-button"}
                    >
                        <Image alt={"zcoderz-logo"} width={153}
                            className={"logo-image"} src={LogoImage}/>
                    </Button>
                    {isMobileOrTablet && (!toggleMenu ? openMenu : closeMenu)}
                </div>
                {(toggleMenu || !isMobileOrTablet) && isHydrated && menu}
            </Header>
        </>
    );
}

export default SharedNavBar;