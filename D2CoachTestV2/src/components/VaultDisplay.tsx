import { Fragment } from "react";
import Thumbnail from "./Thumbnail";
import '../styles/VaultDisplay.css'

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
                            {row.map((index) => <td><Thumbnail src={index}></Thumbnail></td>)}
                        </tr>
                        ))}
                </tbody>
        </Fragment>
    );
}
  
export default VaultDisplay;