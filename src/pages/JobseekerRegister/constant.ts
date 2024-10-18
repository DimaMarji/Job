import { FormField } from "../EmployerRegister/interface";



  
  export const targetedJob: FormField[] = [
    { name: "job_category", label: "Targeted Job Category * ", required: true,placeholder:"Analysis/Statistic, Telecommunications, Production" },
    {
      name: "location",
      label: "Desired Work Location",
      required: true,
      tooltip: "Desired Work Location",
      type:"select"
    },
    {
      name: "work_city",
      label: "Working City *",
      required: true,
      tooltip: "Working City",
      type:"select"
    },
   
  ];
  
  export const jobseekerAccountInfo: FormField[] = [
    { name: "username", label: "User Name" ,placeholder:"Steven Job"},
    { name: "email", label: "Email", type: "email" ,placeholder:"stevenjob@gmail.com"},
    { name: "password", label: "Password", type: "password",placeholder:"************" },
    { name: "repassword", label: "Re-Password *", type: "password",placeholder:"************" },
    {
      name: "country",
      label: "Residence Country",
      required: true,
      tooltip: "Country of residence",
      type:"select"
    },
    {
      name: "city",
      label: "Residence City",
      required: true,
      tooltip: "City of residence",
      type:"select"
    },
  ];

  