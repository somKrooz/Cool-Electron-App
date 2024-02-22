import axios from "axios";
import { useState, useEffect } from "react";
import './Waifu.css';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css'
import {saveAs} from 'file-saver' 

function Waifu(){
    const url = "https://pic.re/image.json" 
    const [img , setImg] = useState('');
    const [Aut , setAut] = useState('');

    const HandelDownload = () =>
    {
        saveAs(img, 'Waifu.png')

    }

    async function getdata()
    {
        await axios.get(url).then(res => {
            setImg("https://"+res.data.file_url)
            setAut(res.data.author)
        });
    }
    
    useEffect(()=>{
       getdata();
    },[])

    const HandleClick = () =>{
        getdata(); 
    }

    return(
        <div className="card">       
            <LazyLoadImage  className="Waifus" alt="?"
            src={img} 
            effect="blur"/>
        <br/>
        <p className="author">author: {Aut}</p>
            <button className="btn" onClick={HandleClick}>Next</button>
            <button className="btn"  onClick={HandelDownload}>Download</button>
        </div>
    );

}

export default Waifu


