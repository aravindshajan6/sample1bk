import * as React from "react";

import PropTypes from "prop-types";

interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
}

const Logout: React.FunctionComponent<IconProps> = ({
  color = "currentColor",
  size = 24,
  ...other
}) => (
  <svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...other}>
    <path
      d="M19.9998 33.6667C12.636 33.6667 6.6665 27.6972 6.6665 20.3333C6.6665 12.9695 12.636 7 19.9998 7"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M16.6665 20H33.3332M33.3332 20L28.3332 15M33.3332 20L28.3332 25"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Logout.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Logout;
