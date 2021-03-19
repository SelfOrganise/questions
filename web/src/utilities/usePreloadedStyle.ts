import { useState } from "react";

const baseUrl =
  `https://source.unsplash.com/featured/400x520/?${process.env.REACT_APP_UNSPLASH_KEYWORDS}`;

export function usePreloadedStyle() {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [style, setStyle] = useState<any>();

  const getNewStyle = () => {
    setIsImageLoading(true);
    const timestamp = Date.now();
    const newUrl = `${baseUrl}&t=${timestamp}`;
    const image = new Image();
    image.onload = () => {
      setStyle({
        backgroundImage: `url('${newUrl}')`,
      });
      setIsImageLoading(false);
    };
    image.src = newUrl;
  };

  return {
    isImageLoading,
    style,
    getNewStyle,
  };
}
