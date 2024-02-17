interface ThumbnailProps {
  src:string;
}

function Thumbnail({src}:ThumbnailProps) {
    return (
        <img src={src} width="60" height="60">

        </img>      
      );

}

export default Thumbnail;