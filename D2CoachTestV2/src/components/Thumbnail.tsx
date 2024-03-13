import { Fragment,useState } from 'react';
import '../styles/Thumbnail.css'

interface ThumbnailProps {
  src:string;
  fallback:string;
}

function Thumbnail({src,fallback}:ThumbnailProps) {
    const [imgSrc,setImgSrc] = useState<string>(src);
    const onError = () => setImgSrc(fallback);

    return (
      <Fragment>
          <img src={imgSrc} width ="60" height="60" onError={onError} />
      </Fragment>
      );

}

export default Thumbnail;