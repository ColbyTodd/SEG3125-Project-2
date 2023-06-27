import HotPlayers from "./HotPlayers";

const Home = () => {
    return (  
        <div className="home">
            <img src="https://cms.nhl.bamgrid.com/images/photos/319846256/1024x576/cut.jpg" className="img-fluid d-block" />
            <HotPlayers />
        </div>
    );
}
 
export default Home;