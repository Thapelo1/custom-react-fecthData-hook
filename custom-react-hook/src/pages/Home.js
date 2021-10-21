import '../styles/main.css';
import TableRow from "../components/TableRow";
import useFetch from "../custom-hooks/useFetch";

function Home() {

    const [data] = useFetch('https://jsonplaceholder.typicode.com/users');

  return (
    <>
        <div className="container mt-5">
            <table className="table table-bordered table-condensed table-hover">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NAME</th>
                    <th scope="col">USERNAME</th>
                    <th scope="col">EMAIL ADDRESS</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    data && data.map((item) => {
                        return <TableRow
                        key={item.key}
                        id={item.id}
                        name={item.name}
                        username={item.username}
                        email={item.email}
                        />
                })}
                </tbody>
            </table>
        </div>

    </>
  );
}

export default Home;
