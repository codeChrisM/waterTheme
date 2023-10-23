import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Watericon from "/src/img/elite-splash-logo-v1.png";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <div className="">
      <ImageList
        sx={{ maxheight: 450 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: "https://www.brpoolsusa.com/_c/wp-content/uploads/2022/02/Billabong-Splash-Ocean-800x600.jpg",

    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://www.brpoolsusa.com/_c/wp-content/uploads/2022/02/Coral-Sea-Aquamarine-960x720.jpg",

    title: "Burger",
  },
  {
    img: "https://www.brpoolsusa.com/_c/wp-content/uploads/2022/02/Whitsunday-with-horseshoe-spa-california-1920x1080.jpg",

    title: "Camera",
  },
  {
    img: "https://www.brpoolsusa.com/_c/wp-content/uploads/2022/02/Milano-Aquamarine-scaled-800x600.jpg",

    title: "Coffee",
    cols: 2,
  },
];
