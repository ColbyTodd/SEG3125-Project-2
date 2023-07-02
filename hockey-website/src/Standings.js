const Standings = (props) => {
    const teams = props.teams;

    return (
        <div className="container">
            {teams.map((team, index) => (
                <div key={index}>
                    <h2>{team.Conference}</h2>
                    <table className="table">
                        <thead>
                                <tr>
                                    <th scope="col">{team.Division}</th>
                                    <th scope="col">GP</th>
                                    <th scope="col">W</th>
                                    <th scope="col">L</th>
                                    <th scope="col">OTL</th>
                                    <th scope="col">PTS</th>
                                </tr>
                        </thead>

                            <tbody key={index}>
                                <tr>
                                    <th scope="row">{index + 1} {team.Name}</th>
                                    <td>{team.GP}</td>
                                    <td>{team.W}</td>
                                    <td>{team.L}</td>
                                    <td>{team.OTL}</td>
                                    <td>{team.PTS}</td>
                                </tr>
                            </tbody>

                    </table>

                </div>
            ))}
        </div>
    );
}
 
export default Standings;