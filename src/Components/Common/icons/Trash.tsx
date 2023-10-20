import * as React from "react";

import PropTypes from "prop-types";

interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
}

const Trash: React.FunctionComponent<IconProps> = ({
  color = "red",
  size = 24,
  ...other
}) => (
  <svg height={size} width={size} viewBox="0 0 96 96" fill="none" {...other}>
    <path
      d="M16 28H80"
      stroke={color}
      stroke-width="6"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24 40L30.8056 77.4312C31.4973 81.2352 34.8103 84 38.6766 84H57.3232C61.1896 84 64.5028 81.2348 65.1944 77.4312L72 40"
      stroke={color}
      stroke-width="6"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M36 20C36 15.5817 39.5817 12 44 12H52C56.4184 12 60 15.5817 60 20V28H36V20Z"
      stroke={color}
      stroke-width="8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

Trash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Trash;
