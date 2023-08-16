import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

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
    img: "https://www.brpoolsusa.com/_c/wp-content/uploads/2022/02/Billabong-cove-evening-sky-1-800x600.jpg    ",
    title: "Burger",
  },
  {
    img: "https://www.brpoolsusa.com/_c/wp-content/uploads/2022/02/Billabong-Splash-Ocean-800x600.jpg",
    title: "Camera",
  },
  {
    img: "https://www.brpoolsusa.com/_c/wp-content/uploads/2022/02/Billabong-Splash-Ocean-800x600.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://www.brpoolsusa.com/_c/wp-content/uploads/2022/02/Billabong-Splash-Ocean-800x600.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://www.brpoolsusa.com/_c/wp-content/uploads/2022/02/Billabong-Splash-Ocean-800x600.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://www.brpoolsusa.com/_c/wp-content/uploads/2022/02/Billabong-Splash-Ocean-800x600.jpg",
    title: "Basketball",
  },
  {
    img: "https://www.brpoolsusa.com/_c/wp-content/uploads/2022/02/Billabong-Splash-Ocean-800x600.jpg",
    title: "Fern",
  },
  {
    img: "https://www.brpoolsusa.com/_c/wp-content/uploads/2022/02/Billabong-Splash-Ocean-800x600.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://www.brpoolsusa.com/_c/wp-content/uploads/2022/02/Billabong-Splash-Ocean-800x600.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://www.brpoolsusa.com/_c/wp-content/uploads/2022/02/Billabong-Splash-Ocean-800x600.jpg",
    title: "Sea star",
  },
  {
    img: "https://www.brpoolsusa.com/_c/wp-content/uploads/2022/02/Billabong-Splash-Ocean-800x600.jpg",
    title: "Bike",
    cols: 2,
  },
];
