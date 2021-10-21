import '../styles/table.css';

const TableRow = (props) => {
    return (
        <tr>
            <th scope="row">{props.id}</th>
            <td>{props.name}</td>
            <td>{props.username}</td>
            <td>{props.email}</td>
            <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-success btn-block">Info</button>
                    <button type="button" className="btn btn-danger btn-block">Delete</button>
                </div>
            </td>
        </tr>
    )
}

export default TableRow;