import {RotatingLines} from "react-loader-spinner";
import '../styles/Loading.css';

function Loading() {
  return (
    <div className="loader-container">
      <RotatingLines strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="96"
                        visible={true}
                        />
        <p id="loading-text">Loading...</p>
    </div>
  );
}

export default Loading;