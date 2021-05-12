import React from "react";
import Image from "next/Image";
import styled from "styled-components";

interface ImageCenterProps {
  src: string;
  width: number;
  height: number;
}

export const ImageCenter: React.FC<ImageCenterProps> = ({
  src,
  width,
  height,
}) => {
  return (
    <ImageCenterStyled>
      <Image src={src} width={width} height={height} />
    </ImageCenterStyled>
  );
};

const ImageCenterStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
