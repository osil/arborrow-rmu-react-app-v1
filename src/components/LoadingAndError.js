import React from 'react'
import {  Spinner,Alert} from "react-bootstrap";

const LoadingAndError = ({loading,error}) => {

  
     

      return(
          <>
          {loading && (
              <div className="text-center mt-5">
              <Spinner animation="border" variant="warning" />
            </div>
          )}

          {error?(
            <Alert variant="warning">
            เกิดข้อผิพลาดในการดึงข้อมูล
            <p>{JSON.stringify(error)}</p>
          </Alert>
          ):""}
          </>
      )
}

export default LoadingAndError
