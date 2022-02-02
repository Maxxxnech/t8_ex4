import React from "react";
import { Button, CardMedia } from "@mui/material";
/**
 *  Счетчик кликов по изображению и само изображение можно вынести в отдельный компонент
 *  так как они работают вместе
 */
export default function ImageCounter({ count, imageUrl, onCount, title }) {
  return (
    <>
      <div className="count">{count}</div>
      <Button>
        <CardMedia
          component="img"
          sx={{ height: 140 }}
          image={imageUrl}
          onClick={onCount}
          alt={title}
          title={title}
        />
      </Button>
    </>
  );
}
