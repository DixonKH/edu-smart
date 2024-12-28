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