const HotPlayers = () => {
    const [players, setPlayers] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/Players")
            .then(res => {
                return res.json()
            })
            .then((data) => {
                setPlayers(data);
            })
    }, []);
    return (  
        <div className="container-sm">
            <div className="row">
                <h2>Point Leaders</h2>
            </div>
            <div className="row">
                <div className="col">
                    <img src=""></img>
                </div>
                <div className="col">
                    <p>Player Name</p>
                </div>
                <div className="col">
                    <p>Team Name</p>
                </div>
                <div className="col">
                    <p>Points</p>
                </div>
            </div>
        </div>
    );
}
 
export default HotPlayers