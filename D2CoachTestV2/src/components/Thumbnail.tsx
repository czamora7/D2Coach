interface ThumbnailProps {
  src:string;
}

function Thumbnail({src}:ThumbnailProps) {
    return (
        <img src={src} width="200" height="200">

        </img>      
      );

}

export default Thumbnail;