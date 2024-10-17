import { Divider, Space } from "antd"
import Image from "next/image"
import { Title } from "../../../../Components/Atoms/Typography/Title"
import { Text } from "../../../../Components/Atoms/Typography/Text"
import { ServicesNames } from "../../../../Constants/servicesNames"
import { useDataFetching } from "../../../../ReactQuery/ApiCrud/useDataFetching"
import { useRouter } from "next/router"
import CalendarIcon from "../../../../public/Assets/Images/template/icons/calendar.svg";
import moment from "moment"

const SimilarJobs:React.FC=()=>{

    const {query,push} = useRouter()


    const {data, error, isLoading, isError} = useDataFetching(
        `${ServicesNames.SimilarJobs}/${query?.jobId}`,
    );

    const similarJobsData:any = data?.data

    return<div className="similar-job-card">
         <Title 
        typographyType={{
                  type: "semi-bold-semi-bold-semi-bold",
                  size: "18px-16px-16px",
                }}>
          Similar Jobs
        </Title>
        <Divider/>
        {similarJobsData?.map((item,index)=>{
            return <div key={index} onClick={()=>push(`/job-details/${item?.id}`)}
             className="hover-up similar-job-item"><Space align="start">
            <Image className="similar-job-logo" width={48} height={48} src={item?.logo} alt="logo"/>
            <div>
            <Title 
            typographyType={{
                      type: "semi-bold-semi-bold-semi-bold",
                      size: "18px-16px-16px",
                    }}>
               {item?.title}
            </Title>
            <Space>
                    <Image alt={"calendar-icon"} width={12} src={CalendarIcon} />
                    <Text
                      typographyType={{
                        type: "regular-regular-regular",
                        size: "12px-12px-12px",
                      }}
                      typographyFontColor={"#A0ABB8"}
                    >
                      {moment(item?.created_at).format("DD MMM YYYY")}
                    </Text>
                  </Space>

                  <Space style={{display:"flex",marginTop:"8px"}}>
                    <Text
                      typographyType={{
                        type: "semi-bold-semi-bold-semi-bold",
                        size: "12px-12px-12px",
                      }}
                      typographyFontColor={"#A0ABB8"}
                    >
                     Job ID:
                    </Text>
                    <Text
                      typographyType={{
                        type: "semi-bold-semi-bold-semi-bold",
                        size: "16px-16px-16px",
                    }}
                    typographyFontColor={"#3C65F5"}
                    >
                     {item?.id}
                    </Text>
                  </Space>
                  </div>
            
            </Space>
            <Divider/>
            </div>
    
        })}

       
    </div>
}

export default SimilarJobs