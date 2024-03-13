import { Fragment } from "react";
import Thumbnail from "./Thumbnail";
import '../styles/Vault.css'
import imagePath from "../assets/Images/alt.jpg";

interface VaultProps{
    rows:string[][];
}

const VaultDisplay = ({rows}:VaultProps) => 
{
    return(
        <Fragment>
                <tbody>
                    {rows.map((row) => (
                        <tr>
                            {row.map((index) => <td><Thumbnail src={index} fallback={imagePath}></Thumbnail></td>)}
                        </tr>
                        ))}
                </tbody>
        </Fragment>
    );
}
  
export default VaultDisplay;