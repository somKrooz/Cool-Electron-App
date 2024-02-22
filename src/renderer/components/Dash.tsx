import Waifu from "./Waifu";
import './Dash.css'

function Dash()
{
    const Handlerefresh = () =>{
        window.location.reload();
    }

    return (
        <div className="Grid">
            <h1 className="name">SOM KROOZ</h1>
            <Waifu/>
            <Waifu/>
            <Waifu/>
            <Waifu/>
            <Waifu/>
            <Waifu/><br/>
            <button className="btn" onClick={Handlerefresh}>New Data</button>
        </div>
    );
}

export default Dash