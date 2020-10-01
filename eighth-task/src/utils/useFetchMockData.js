import { useEffect, useCallback, useRef } from 'react';

const useFetchMockData = (mockData, setMovie) => {
  let timer = useRef(null);

  const getData = useCallback(() => {
    return new Promise((resolve,reject)=>{
      try{
        timer.current = setTimeout(()=>{
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
    return () => clearTimeout(timer.current);
  },[fetchData]);
}

export default useFetchMockData;