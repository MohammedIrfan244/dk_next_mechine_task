export const infoLogger = (info:string) =>{
  if(process.env.NODE_ENV === "development") console.log(info);
  return 
} 