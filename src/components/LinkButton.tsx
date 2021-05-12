import Link from "next/link";
import styled from "styled-components";

interface LinkButtonProps {
  path: string;
  label: string;
  bgColor?: string;
  color?: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  path,
  label,
  bgColor = "#444",
  color = "#fff",
}) => {
  return (
    <ButtonStyled color={color} bgColor={bgColor}>
      <Link href={path}>
        <a>{label}</a>
      </Link>
    </ButtonStyled>
  );
};
interface ButtonStyledProps {
  color: string;
  bgColor: string;
}

const ButtonStyled = styled.button<ButtonStyledProps>`
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
  font-size: 14px;
  font-weight: bold;
  box-shadow: 2px 2px 3px #444;
  border-radius: 4px;
  padding: 6px 12px;
  margin: 8px;

  /* マウスが乗ったとき */
  &:hover {
    position: relative;
    top: 1px;
    left: 1px;
    box-shadow: 1px 1px 3px #444;
  }
  /* 押した時 */
  &:active {
    position: relative;
    top: 2px;
    left: 2px;
    box-shadow: inset 0 0 2px #444;
  }
`;
