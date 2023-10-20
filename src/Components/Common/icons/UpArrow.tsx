import * as React from "react";

import PropTypes from "prop-types";

interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
}

const UpArrow: React.FunctionComponent<IconProps> = ({
  color = "currentColor",
  size = 24,
  ...other
}) => (
  <svg viewBox="0 0 80 80" fill="none" height={size} width={size} {...other}>
    <path
      d="M40 0C17.96 0 0 17.96 0 40C0 62.04 17.96 80 40 80C62.04 80 80 62.04 80 40C80 17.96 62.04 0 40 0ZM56.24 47.16C55.64 47.76 54.88 48.04 54.12 48.04C53.36 48.04 52.6 47.76 52 47.16L40 35.16L28 47.16C26.84 48.32 24.92 48.32 23.76 47.16C22.6 46 22.6 44.08 23.76 42.92L37.88 28.8C39.04 27.64 40.96 27.64 42.12 28.8L56.24 42.92C57.4 44.12 57.4 46 56.24 47.16Z"
      fill={color}
    />
  </svg>
);

UpArrow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UpArrow;
