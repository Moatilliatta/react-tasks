import { useEffect } from 'react';
/**
 * Custom hook to update the request status and close (if needed) a given modal.
 *
 * TODO: show pop-up instead of console.warns
 */
const useReqStatus = ({ close, reqStatus, onClearReqStatus, onGetMovies }) => {
  useEffect(()=>{
    if(reqStatus.status) {
      reqStatus.status >= 200 && reqStatus.status < 300
        ? console.warn(`Correct! :: ${reqStatus.msg}`)
        : console.warn(`Error! :: ${reqStatus.msg}`);
      onClearReqStatus()
      if(close instanceof Function){
        close();
      } 
      onGetMovies()
    }
  },[reqStatus, onClearReqStatus, close, onGetMovies]);
}

export default useReqStatus;