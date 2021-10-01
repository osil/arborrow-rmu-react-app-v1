import React from 'react'
import NumberFormat from "react-number-format";

const BorrowWidgetBar = ({refer}) => {

    //console.log(refer)

    return (
        <div className="row justify-content-md-center mt-3">
          <div className="col-md-10">
            <h3 className="text-center">
              <u>รายงานข้อมูลเงินยืม {refer.REFERNAME}</u>
            </h3>
            <div className="row mt-4 mb-3">
              <div className="col-md-4">
                <div className="alert alert-success" role="alert">
                  <b>
                    ยอดเงินยืม :{" "}
                    <NumberFormat
                      value={refer.TOTAL_BORROWAMOUNT}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={""}
                    />{" "}
                    บาท
                  </b>
                </div>
              </div>
              <div className="col-md-4">
                <div className="alert alert-warning" role="alert">
                  <b>
                    ยอดล้างหนี้ :{" "}
                    <NumberFormat
                      value={refer.TOTAL_REPAYAMOUNT}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={""}
                    />{" "}
                    บาท
                  </b>
                </div>
              </div>
              <div className="col-md-4">
                <div className="alert alert-danger" role="alert">
                  <b>
                    ยอดหนี้คงเหลือ :{" "}
                    <NumberFormat
                      value={refer.TOTAL_NETAMOUNT}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={""}
                    />{" "}
                    บาท
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default BorrowWidgetBar
