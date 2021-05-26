import React from 'react'
import "./table.scss";
const Table = props => {
  const handleOnClick = (type, index, value) => {
    props.setTableContent(prevState => {
      let tempState = JSON.parse(JSON.stringify(prevState))
      tempState[index][type] = value
      return tempState
    })
  }
  return (
    <div class="table-responsive table-setting">
      <table class='table'>
        <thead>
          <tr>
            {props.columns.map(col => (
              <th scope='col' colspan={col === 'OPERATING CONSTRAINT' ? 2 : 1}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.tableContent.map((row, index) => (
            <tr>
              <td>{row.value}</td>
              <td>{row.key}</td>
              <td>
                <input className="form-control"
                  onChange={e => handleOnClick('MINIMUM', index, e.target.value)}
                  value={row.MINIMUM}
                ></input>
              </td>
              <td>
                <input className="form-control"
                  onChange={e => handleOnClick('MAXIMUM', index, e.target.value)}
                  value={row.MAXIMUM}
                ></input>
              </td>
              <td>
                <input className="form-control"
                  onChange={e => handleOnClick('CURRENT', index, e.target.value)}
                  value={row.CURRENT}
                ></input>
              </td>
              <td>
                <input className="form-control"
                  onChange={e =>
                    handleOnClick('STEP BOUND', index, e.target.value)
                  }
                  value={row['STEP BOUND']}
                ></input>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
