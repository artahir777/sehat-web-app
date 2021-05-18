import { Table } from 'antd';
import React from 'react'
import DataTableStyle from './DataTableStyle';

const DataTable = (props) => {    

    return (
        <DataTableStyle>
            <Table columns = {props.columns} dataSource = {props.dataSource} pagination = {false} 
            scroll = {props.scroll}  />
        </DataTableStyle>
    )
}

export default DataTable;