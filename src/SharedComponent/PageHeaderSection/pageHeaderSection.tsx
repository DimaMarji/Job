import "./styles.scss"
import {IPageHeaderSection} from "./interface";
import Image from "next/image";
import {Breadcrumb} from "antd";

const PageHeaderSection: React.FC<IPageHeaderSection> = ({
                                                             image,
                                                             title
                                                         }) => {
    return <div style={{backgroundImage:"url(image)"}}
                className={"page-header-section"}>
<Breadcrumb>
    <Breadcrumb.Item href={"/"}>
        Home
    </Breadcrumb.Item>
    <Breadcrumb.Item href={title}>
        Blogs
    </Breadcrumb.Item>
</Breadcrumb>
    </div>
}

export default PageHeaderSection