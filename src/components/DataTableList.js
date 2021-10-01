import React from 'react'
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

const DataTableList = ({tableData}) => {

    //console.log(tableData)

    return (
        <>
             <DataTableExtensions {...tableData}>
                <DataTable
                  noHeader
                //   columns={columns}
                //   data={data}
                  pagination
                  highlightOnHover
                />
              </DataTableExtensions>
        </>
    )
}

export default DataTableList
