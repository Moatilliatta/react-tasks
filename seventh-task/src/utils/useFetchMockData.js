import {useEffect, useCallback} from 'react';

const useFetchMockData = (mockData, setMovie) => {
  const getData = useCallback(() => {
    return new Promise((resolve,reject)=>{
      try{
        setTimeout(()=>{
          resolve(mockData);
        },5000);
      } catch(e){
        reject();
      }
    });
  },[mockData]);

  const fetchData = useCallback(async () => {
    const result = await getData();
    setMovie((prevState)=>{
        return [...prevState, ...result];
    });
  },[getData,setMovie])

  useEffect(()=>{
    fetchData();
  },[fetchData]);
}

export default useFetchMockData;