import React, { FC, useEffect, useRef, useState } from "react";
import * as S from "./style";

const ClubPage: FC = () => {
  const [color, setColor] = useState<string>("#000000");
  useEffect(() => {
    setInterval(() => {
      const hexValue: string =
        "#" + Math.round(Math.random() * 0xffffff).toString(16);
      setColor(hexValue);
    }, 100);
  }, []);
  return <S.Container background={color}></S.Container>;
};

export default ClubPage;
