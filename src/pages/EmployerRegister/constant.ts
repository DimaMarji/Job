import { FormField } from "./interface";


export const contactInfo: FormField[] = [
    { name: "url", label: "URL", tooltip: "Website URL",placeholder:"https://www.google.com" },
    { name: "poBox", label: "P.O.Box", tooltip: "P.O.Box", placeholder: "P.O.Box" },
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
    { name: "address", label: "Address", tooltip: "Company address", placeholder: "Address" },
    { name: "phone", label: "Phone", required: true, tooltip: "Phone number",
      type: "phone" },
    { name: "mobile", label: "Mobile", required: true, tooltip: "Mobile number",
      type: "phone" },
  ];
  
  export const contactPersonInfo: FormField[] = [
    {
      name: "title",
      label: "Title",
      required: true,
      tooltip: "Title (e.g., Mr./Mrs.)",
    },
    {
      name: "fullName",
      label: "Full Name",
      required: true,
      tooltip: "Full Name",
    },
    {
      name: "position",
      label: "Position",
      required: true,
      tooltip: "Job Position",
    },
    {
      name: "email",
      label: "Email",
      required: true,
      type: "email",
      tooltip: "Contact Email",
      placeholder:"stevenjob@gmail.com"
    },
    {
      name: "phone",
      label: "Phone",
      required: true,
      tooltip: "Phone number",
      placeholder: "Phone number",
      type: "phone",
    },
    {
      name: "mobile",
      label: "Mobile",
      required: true,
      tooltip: "Mobile number",
      type: "phone",
      placeholder: "Mobile number",
    },
  ];
  
  export const companyAccountInfo: FormField[] = [
    { name: "username", label: "User Name" ,placeholder:"Steven Job"},
    { name: "email", label: "Email", type: "email" ,placeholder:"stevenjob@gmail.com"},
    { name: "password", label: "Password", type: "password",placeholder:"************" },
    { name: "repassword", label: "Re-Password *", type: "password",placeholder:"************" },
  ];
  
  export const companyNameInfo: FormField[] = [
    { name: "arabicName", label: "Arabic Name *",placeholder: "Arabic Name" },
    { name: "englishName", label: "English Name *", placeholder: "English Name" },
  ];
  
  export const companyActivityInfo: FormField[] = [
    { name: "activityField", label: "Activity Field",placeholder:"Analysis/Statistic, Telecommunications, Production" },
  ];
  