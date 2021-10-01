import React from 'react'
import {
    Link
  } from "react-router-dom";

const Page404Page = () => {
    return (
        <>
        <div className="jumbotron">
          <div className="container text-center">
          <span className="display-1 d-block ">404</span>
          <div className="mb-4 lead ">กรุณาตรวจสอบหมายเลขบัตรประจำตัวประชาชนของท่านอีกครั้ง.</div>
                <Link to="/" className="btn btn-link">กลับหน้าหลัก</Link>
          </div>
        </div>
        
       
        </>
    )
}

export default Page404Page
