import { Title } from "../../../../Components/Atoms/Typography/Title"
import HorizontalScrollList from "../../../../Components/Molecules/HorizontalScrollList/horizontalScrollListContainer"
import JobCard from "../../../../SharedComponent/JobCard/jobCardContainer"
import { Text } from "../../../../Components/Atoms/Typography/Text"
import { useDataFetching } from "../../../../ReactQuery/ApiCrud/useDataFetching"
import { useRouter } from "next/router"
import { ServicesNames } from "../../../../Constants/servicesNames"

const FeaturedJobs:React.FC=()=>{

    const {query,push} = useRouter()


    
    const {data, error, isLoading, isError} = useDataFetching(
        `${ServicesNames.FeaturedJobs}/${query?.jobId}`,
    );

    const featuredJobsData:any = data?.data ?? []

    return<div className="featured-jobs">
        

<HorizontalScrollList data={[...featuredJobsData,...featuredJobsData,...featuredJobsData]}
title={<div className="featured-text">
       <Title className={"animate__ animate__fadeInUp animated featured-title"}
                           typographyFontColor={"#05264E"}
                           typographyType={{type: "semi-bold-semi-bold-semi-bold", size: "26px-20px-20px"}} level={2}>
                        Featured Jobs
                    </Title>
                    <Text className={"animate__ animate__fadeInUp animated"}
                          typographyFontColor={"#66789C"}
                          typographyType={{type: "regular-regular-regular", size: "18px-18px-18px"}} >
                       Get the latest news, updates and tips
                    </Text>
</div>}
                             
                              listContainer={[...featuredJobsData,...featuredJobsData,...featuredJobsData]?.map(
                                  (item, index) => {
                                      return <JobCard key={index} viewType={"grid"} data={item}/>
                                  }
                              )}/>
    </div>
}

export default FeaturedJobs