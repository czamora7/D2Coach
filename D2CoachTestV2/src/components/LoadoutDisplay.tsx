import Thumbnail from "./Thumbnail"
import '../styles/LoadoutBuilder.css';

interface DisplayProps {
    subclass: string;
    exoticArmor: string;
    exoticWeapon: string;
}

function LoadoutDisplay({subclass,exoticArmor,exoticWeapon}:DisplayProps) {
    return (
        <table>
            <tr>
                <th>Subclass</th>
                <th>Exotic Armor</th>
                <th>Exotic Weapon</th>
            </tr>
            <tr>
                <td><Thumbnail src={subclass}></Thumbnail></td>
                <td><Thumbnail src={exoticArmor}></Thumbnail></td>
                <td><Thumbnail src={exoticWeapon}></Thumbnail></td>
            </tr>
        </table>
    )
}

export default LoadoutDisplay