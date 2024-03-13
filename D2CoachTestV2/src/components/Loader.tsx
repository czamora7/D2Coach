import { useEffect, useState } from "react"
import Loading from "./Loading";

interface LoaderProps {
    bungieAPIcall: () => Promise<void>;
}

function Loader({bungieAPIcall}:LoaderProps) {
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        //call function that needs loaded
        makeRequest();
      }, []);
      
    async function makeRequest()
    {
        setLoading(true);
        await bungieAPIcall();
        setLoading(false);    
    }
    
      if (loading) {
        return <Loading />;
      }
    
      return (
        <div>
          <h1>Data Loaded!</h1>
        </div>
      );

}

export default Loader