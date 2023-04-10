import React, {useState} from 'react'
import './Table.css'
import filterIcon from '../filterIcon.png'

function Table(props) {
    const [tt, setTtt] = useState([])
    const data = props.data;
    const testHandler = (e)=>{
        const addedData = {
                "id": e.target.value,
                "Column 1": "Yank Godmarerer",
                "Column 2": "328",
                "Column 3": "SKU_570reer",
                "Column 4": "c057a4ad-er3",
                "Column 5": "127.167.207.65",
                "Column 6": "State Farm Insurance",
                "Column 7": "Cosette Moakes",
                "Column 8": "https://logo.clearbit.com/salon.com",
                "Column 9": "Cletus Ludron",
                "Column 10": "Inbound SDR"
              }
        setTtt(addedData)
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        props.getAddedData(tt)
    }

    const tableColumnData = data.length > 0 ? Object.entries(data[0])
        .map(([key, columnData], index) => <th key={index} className='column-header'><span>{key}</span>
            <button
                className='th-filter'
            // onClick={(e)=>filterRow(e, key)}
            >
                <img src={filterIcon} alt="filter logo" />
            </button>
        </th>) : null;

    const tableRowData = data.map((val, key) => {
        const rowData = Object.entries(val);
        return (
            <>
                <tr key={val.id}>
                    <td>
                        <input type={'checkbox'} />
                    </td>
                    {rowData.map(([key, value]) => (
                        <td >{value}</td>
                    ))}
                </tr>
            </>
        );
    });

    return (
        <div className='table-style'>
            <form onSubmit={submitHandler}>
                <input type='text' onChange={testHandler} /><input type="submit" value="Submit"/>
            </form>
            <table>
                <thead>
                    
                    <tr className='column-tr'>
                    {
                        data.length > 0 ?  <th className='tableCheckboxHeader'>
                        <input type={'checkbox'} />
                        </th> : null
                    }
                        {tableColumnData}
                    </tr>
                </thead>
                <tbody>
                    {tableRowData}
                </tbody>
            </table>
        </div>
    )
}

export default Table