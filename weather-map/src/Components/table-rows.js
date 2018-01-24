import React from 'react';

const TableRows = ({WhetherDetails}) =>{
    
    return(
        WhetherDetails.map(function(row,i){
     return (<tr key = {i}>
         <td>{i+1}</td>
            <td>{row.city}</td>
            <td>{row.country}</td>
            <td>{row.temp}</td>
            <td>{row.humidity}</td>
        </tr>)}
    ))
}

export default TableRows