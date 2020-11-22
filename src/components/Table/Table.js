import React, {useEffect, useState} from 'react';
import './Table.css';

const API_HOST = "http://localhost:3000";
const EMPLOYEE_API_URL = `${API_HOST}/employee`;

function Table() {
    const [data, setData] = useState([]);

    const fetchEmployee = () => {
        fetch(`${EMPLOYEE_API_URL}`)
            .then(res => res.json())
            .then(json => setData(json));
    }

    useEffect(() => {
        fetchEmployee();
    }, []);


    

    return (
        <div className="body">
            <h1>Professional Section</h1>
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th>From </th>
                    <th>To</th>
                    <th>Company</th>
                    <th>Position</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.status}</td>
                            <td>{item.position_start_date}</td>
                            <td>{item.position_end_date}</td>
                            <td>{item.company_name}</td>
                            <td>{item.position}</td>
                            
                            
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default Table;