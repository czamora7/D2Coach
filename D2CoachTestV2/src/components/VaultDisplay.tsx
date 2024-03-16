import { Fragment } from "react";
import Thumbnail from "./Thumbnail";
import '../styles/Vault.css'
import imagePath from "../assets/Images/alt.jpg";

interface VaultProps{
    rows:string[];
}

const VaultDisplay = ({rows}:VaultProps) => 
{
    const rowData = [];
    
    for(let i = 0; i < rows.length; i+=5)
    {
        rowData.push(<tr>{rows.slice(i, i+5).map((index)=> <td><Thumbnail src={index} fallback={imagePath}></Thumbnail></td>)}</tr>);
    }

    return <tbody>{rowData}</tbody>;
}
  
export default VaultDisplay;