const Standings = (props) => {
    const teams = props.teams;

    return (
        <div className="container">
            <div>
                <table className="table">
                    <thead>
                            <tr>
                                <th style={{width: '300px'}} scope="col">{teams[0].Division}</th>
                                <th scope="col">GP</th>
                                <th scope="col">W</th>
                                <th scope="col">L</th>
                                <th scope="col">OTL</th>
                                <th scope="col">PTS</th>
                            </tr>
                    </thead>
                    {teams.map((team, index) => (
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
                    ))}
                </table>
            </div>
            
        </div>
    );
}
 
export default Standings;