import Thumbnail from "./Thumbnail"
import '../styles/LoadoutBuilder.css';
import imagePath from "../assets/Images/alt.png";

interface DisplayProps {
    subclass: string;
    exoticArmor: string;
    exoticWeapon: string;
}

function LoadoutDisplay({subclass,exoticArmor,exoticWeapon}:DisplayProps) {
    return (
        <table>
            <tbody>
            <tr>
                <th>Subclass</th>
                <th>Exotic Armor</th>
                <th>Exotic Weapon</th>
            </tr>
            <tr>
                <td><Thumbnail src={subclass} fallback={imagePath}></Thumbnail></td>
                <td><Thumbnail src={exoticArmor} fallback={imagePath}></Thumbnail></td>
                <td><Thumbnail src={exoticWeapon} fallback={imagePath}></Thumbnail></td>
            </tr>
            </tbody>
        </table>
    )
}

export default LoadoutDisplay