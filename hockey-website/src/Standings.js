const Standings = (props) => {
    const teams = props.teams;

    return (
        <div className="container">
            <div>
                <table className="table">
                    <thead>
                            <tr>
                                <th style={{width: '300px'}} scope="col" aria-label={teams[0].Division + "."}>{teams[0].Division}</th>
                                <th scope="col" aria-label="Games played.">GP</th>
                                <th scope="col" aria-label="Wins.">W</th>
                                <th scope="col" aria-label="Losses.">L</th>
                                <th scope="col" aria-label="Overtime Losses.">OTL</th>
                                <th scope="col" aria-label="Points.">PTS</th>
                            </tr>
                    </thead>
                    {teams.map((team, index) => (
                        <tbody key={index}>
                            <tr>
                                <th scope="row" aria-label={index + 1 + "," + team.Name + ","}>{index + 1} {team.Name}</th>
                                <td aria-label={team.GP + ","}>{team.GP}</td>
                                <td aria-label={team.W + ","}>{team.W}</td>
                                <td aria-label={team.L + ","}>{team.L}</td>
                                <td aria-label={team.OTL + ","}>{team.OTL}</td>
                                <td aria-label={team.PTS + ","}>{team.PTS}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
            
        </div>
    );
}
 
export default Standings;