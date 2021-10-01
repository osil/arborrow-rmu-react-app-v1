import React from "react";
import { useParams, useHistory } from "react-router-dom";

import BarChartBorrow from "../components/BarChartBorrow"
import NumberFormat from "react-number-format";

import DataTableList from "../components/DataTableList";
import BorrowWidgetBar from "../components/BorrowWidgetBar";
import useFetch from '../hooks/useFetch'
import LoadingAndError from '../components/LoadingAndError';


const DetailPage = () => {
  const { id } = useParams();
  
  const history = useHistory();

  const {loading,error,data} = useFetch(`https://smart.rmu.ac.th/borrow/getBorrowByCitizenid?citizenid=${id}`);

  if (data.STATUS === "N") {
    history.replace("/page404");
  }

  

  

  const columns = [
    {
      name: "ARID",
      selector: "ARID",
      sortable: true,
    },
    {
      name: "ปีงบประมาณ",
      selector: "BUDGETPERIODID",
      sortable: true,
      center: false,
    },
    {
      name: "ชื่อโครงการ",
      selector: "DESCRIPTION1",
      sortable: true,
      width: "40%",
    },

    {
      name: "หน่วยงาน",
      selector: "DEPARTMENTNAME",
      sortable: true,
      left: true,
      width: "15%",
    },
    {
      name: "วันที่",
      selector: "BORROWDATE",
      sortable: true,
    },
    {
      name: "เงินยืม",
      selector: "BORROWAMOUNT",
      sortable: true,
      cell: (row) => (
        <span>
          <NumberFormat
            value={row.BORROWAMOUNT}
            displayType={"text"}
            thousandSeparator={true}
            prefix={""}
          />
        </span>
      ),
    },
    {
      name: "ล้างหนี้",
      selector: "REPAYAMOUNT",
      sortable: true,
      cell: (row) => (
        <span>
          <NumberFormat
            value={row.REPAYAMOUNT}
            displayType={"text"}
            thousandSeparator={true}
            prefix={""}
          />
        </span>
      ),
    },
    {
      name: "คงเหลือ",
      selector: "NETAMOUNT",
      sortable: true,
      cell: (row) => (
        <span>
          <NumberFormat
            value={row.NETAMOUNT}
            displayType={"text"}
            thousandSeparator={true}
            prefix={""}
          />
        </span>
      ),
    },
  ];

  const tableData = {
    columns,
    data:data.DATA,
  };

  return (
    <div>
      <LoadingAndError loading={loading} error={error}/>

      <div className="container-fluid">

     
        
        <BorrowWidgetBar refer={data}/>
        

        <div className="row justify-content-md-center mt-3">
          <div className="col-md-10">
            <BarChartBorrow chart={data.DATA_CHARTS} height="40%" />

            <div className="mt-5">
              
              <DataTableList tableData={tableData}/>
            </div>
          </div>
        </div>

        <hr />
      </div>
    </div>
  );
};

export default DetailPage;
