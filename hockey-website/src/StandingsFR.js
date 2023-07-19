const StandingsFR = (props) => {
    const teams = props.teams;
    let division = teams[0].Division

    if(division === "Atlantic"){
        division = "Atlantique"
    } else if(division === "Metropolitan"){
        division = "Métropolitaine"
    } else if(division === "Central"){
        division = "Centrale"
    } else if(division === "Pacific"){
        division = "Pacifique"
    }

    return (
        <div className="container">
            <div>
                <table className="table">
                    <thead>
                            <tr>
                                <th style={{width: '300px'}} scope="col">{division}</th>
                                <th scope="col">MJ</th>
                                <th scope="col">V</th>
                                <th scope="col">D</th>
                                <th scope="col">DP</th>
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
 
export default StandingsFR;