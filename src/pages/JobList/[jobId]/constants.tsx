import Image from "next/image"
import WorkIcon from "../../../public/Assets/Images/page/job-single/industry.svg"

import SalaryIcon from "../../../public/Assets/Images/page/job-single/salary.svg"

import LocationIcon from "../../../public/Assets/Images/page/job-single/location.svg"
import PostedDateIcon from "../../../public/Assets/Images/page/job-single/deadline.svg"
import experienceIcon from "../../../public/Assets/Images/page/job-single/experience.svg"
import JobTypeIcon from "../../../public/Assets/Images/page/job-single/job-type.svg"
import ClockIcon from "../../../public/Assets/Images/page/job-single/updated.svg"
import { GlobalOutlined, PictureOutlined, TeamOutlined } from "@ant-design/icons"

export const employmentData =(data)=> [
    {
      icon: <Image src={WorkIcon} alt="field-work" />, 
      title: "Field of Work",
      value: "Telecommunications - IT Software/IT Security",
    },
    {
      icon: <Image src={SalaryIcon} alt="dollar" />, 
      title: "Salary",
      value: "$800 - $1000",
    },
    {
      icon: <Image src={LocationIcon} alt="location" />, 
      title: "Location",
      value: "Damascus, Syria",
    },
    {
      icon: <Image src={PostedDateIcon} alt="calendar" />, 
      title: "Posted On",
      value: "Aug 25, 2024",
    },
    {
      icon: <TeamOutlined style={{color :"#66789C"}} />, 
      title: "Required Employees",
      value: data?.employees_total_numbers,
    },
    {
      icon: <Image src={experienceIcon} alt="book" />, 
      title: "Minimum Education Level",
      value: "Diploma",
    },
    {
      icon: <Image src={JobTypeIcon} alt="clock-circle" />, 
      title: "Job Type",
      value: "Full time",
    },  {
        icon: <Image src={LocationIcon} alt="book" />, 
        title: "Military service",
        value: data?.military_service ?? "Not Specified",
      },
    {
      icon: <Image src={ClockIcon} alt="calendar" />, 
      title: "Expiry Date",
      value: data?.expiration_date,
    },
    {
      icon: <GlobalOutlined style={{color :"#66789C"}} />, 
      title: "CV Language",
      value: "English",
    },
    {
      icon: <PictureOutlined style={{color :"#66789C"}} />, 
      title: "Photo",
      value: data?.photo ? "Required" : "Not Required",
    },
  ];
  