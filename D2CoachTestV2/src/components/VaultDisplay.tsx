import { Fragment } from "react";
import Thumbnail from "./Thumbnail";

interface VaultProps{
    rows:string[][];
}

const VaultDisplay = ({rows}:VaultProps) => 
{
    return(
        <Fragment>
            <div>
            <table className="table">
                <tbody>
                    {rows.map((row) => (
                        <tr>
                            {row.map((index) => <td><Thumbnail src={index}></Thumbnail></td>)}
                        </tr>
                        ))}
                </tbody>
            </table>
            </div>
        </Fragment>
    );
}
  
export default VaultDisplay;