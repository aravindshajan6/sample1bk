import * as React from "react";

import PropTypes from "prop-types";

interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
}

const ManageCategories: React.FunctionComponent<IconProps> = ({
  color = "currentColor",
  size = 24,
  ...other
}) => (
  <svg viewBox="0 0 26 26" fill="none" height={size} width={size} {...other}>
    <g clipPath="url(#clip0_201_5220)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.7502 3.625C6.1749 3.625 5.70854 4.09137 5.70854 4.66667C5.70854 5.24196 6.1749 5.70833 6.7502 5.70833H19.2502C19.8255 5.70833 20.2919 5.24196 20.2919 4.66667C20.2919 4.09137 19.8255 3.625 19.2502 3.625H6.7502ZM4.85485 6.75C3.56747 6.75 2.58821 7.90598 2.79986 9.17583L4.53597 19.5925C4.70339 20.5971 5.57255 21.3333 6.59095 21.3333H19.4094C20.4278 21.3333 21.297 20.5971 21.4644 19.5925L23.2005 9.17583C23.4122 7.90598 22.4329 6.75 21.1455 6.75H4.85485ZM4.85485 8.83333H21.1455L19.4094 19.25H6.59095L4.85485 8.83333Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_201_5220">
        <rect
          width="25"
          height="25"
          fill={color}
          transform="translate(0.5 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);

ManageCategories.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ManageCategories;
