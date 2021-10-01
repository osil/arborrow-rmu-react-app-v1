import React from 'react'

import useFetch from '../hooks/useFetch'
import LoadingAndError from '../components/LoadingAndError';
import BarChartBorrow from "../components/BarChartBorrow"

const AboutPage = () => {


  const {loading,error,data} = useFetch("https://smart.rmu.ac.th/borrow/getBorrow");

  


 

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <LoadingAndError loading={loading} error={error}/>
          <h1>AboutPage</h1>
          
          <BarChartBorrow chart={data} height="80%" />

          </div>
            
           </div> 
        </div>
    )
}

export default AboutPage
