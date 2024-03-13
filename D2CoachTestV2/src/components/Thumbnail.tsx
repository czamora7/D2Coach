import { Fragment } from 'react';
import '../styles/Thumbnail.css'

interface ThumbnailProps {
  src:string;
}

function Thumbnail({src}:ThumbnailProps) {
    return (
      <Fragment>
          <img src={src} width = "60" height="60" />
      </Fragment>
      );

}

export default Thumbnail;