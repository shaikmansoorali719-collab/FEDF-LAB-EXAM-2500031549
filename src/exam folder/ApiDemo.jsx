import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function ApiDemo() 
{
    const [data,setData] = useState([])
    const[error,setError] = useState()
    const displayData = async () =>
    {
        try 
        {
            const response = await axios.get("https://dummy-json.mock.beeceptor.com/companies")
            setData(response.data)
        }
        catch (error) 
        {
            setError(error.message)
        }
    }

    useEffect(() => {
        displayData()
    }, []);

  return (
    <div>
      <h2><u>Axios Demo</u></h2>
      {
        error ? <b>{error}</b> :
        data.length == 0  ?
        <b>Loading...</b> :
        <table border={1}>  
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Country</th>
            <th>Industry</th>
            <th>CeoName</th>

            
            
        </tr>
        {
            data.map((company,index) =>(
                <tr key={index}>
                    <td>{company.id}</td>
                    <td>{company.name}</td>
                    <td>{company.address}</td>
                    <td>{company.country}</td>
                    <td>{company.industry}</td>
                    <td>{company.ceoName}</td>
                    
                    


                </tr>

            ))
        }
        </table>
      }
    </div>
  )
}
