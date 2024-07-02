
export const useLocalStorage=(key: string)=>{
  const setItem =(value:unknown) =>{
    // console.log(value);
    
    try {
        window.localStorage.setItem(key,JSON.stringify(value));
    } catch (error) {
        console.log(error);
    }
  }
  
  const getItem =()=>{
    try {
        const items = window.localStorage.getItem(key)
        return items ? JSON.parse(items) : undefined
    } catch (error) {
        console.log(error);
        
    }
  }
  return {setItem , getItem};

}