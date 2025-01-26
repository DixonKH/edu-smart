export const serverApi: string = import.meta.env.VITE_API_URL || 'http://localhost:3007';

export const getApiUrl = (path: string): string => {
   return `${serverApi}${path.startsWith("/") ? path : `/${path}`}`;
  // const fullUrl = `${serverApi}${path.startsWith("/") ? path : `/${path}`}`;
  // console.log("getApiUrl output:", fullUrl); // Debug log
  // return fullUrl;
};

export const Messages = {
    error1: "Something went wrong!",
    error2: "Please login first!", 
    error3: "Please fulfill all inputs!",
    error4: "Message is empty!",
    error5: "Only images with jpeg, jpg, png, format allowed!",
  }; 

  export const formatTimeAgo = (date: any) => {
    if(!date) return "N/A";
    const now = new Date();
    const past = new Date(date);
    const differenceInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

    if(differenceInSeconds < 60) {
      return `${differenceInSeconds} seconds ago`;
    }
    const differenceInMin = Math.floor(differenceInSeconds / 60);
    if(differenceInMin < 60) {
      return `${differenceInMin} minutes ago`;
    }
    const differenceInHours = Math.floor(differenceInMin / 60);
    if(differenceInHours < 24) {
      return `${differenceInHours} hours ago`;
    }
    const differenceInDays = Math.floor(differenceInHours / 24);
    if(differenceInDays < 30) {
      return `${differenceInDays} days ago`;
    }
    const differenceInMonths = Math.floor(differenceInDays / 30);
    if(differenceInMonths < 12) {
      return `${differenceInMonths} months ago`;
    }
    const differenceInYears = Math.floor(differenceInMonths / 12);
    return `${differenceInYears} years ago`;
}