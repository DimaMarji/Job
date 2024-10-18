export const dataToOptions:any=(data:any)=>{
    console.log(data)
   return data?.map((item:any)=>{
      return {label :item?.name,value:item?.id}
    })
    }