/*Example for usage:
<Button 
        border="2px solid #ffffff"
        color="#f5bc42"
        height = "200px"
        onClick={() => console.log("You clicked a button")}
        radius = "50%"
        width = "200px"
      />
*/

interface ButtonProps {
  border: string;
  color: string;
  height: string;
  onClick: () => void;
  radius: string
  width: string;
}

function Button({border,color,height,onClick, radius,width}:ButtonProps) { 
  return (
    <button 
      onClick={onClick}
      style={{
         backgroundColor: color,
         border,
         borderRadius: radius,
         height,
         width
      }}
    >
    </button>
  );
}

export default Button