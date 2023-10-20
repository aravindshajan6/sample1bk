import * as React from "react";

import PropTypes from "prop-types";

interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
}

const Warning: React.FunctionComponent<IconProps> = ({
  color = "currentColor",
  size = 24,
  ...other
}) => (
  <svg height={size} width={size} viewBox="0 0 80 80" fill="none" {...other}>
    <path
      d="M40 59.96V60M40 20V48M76 40C76 59.8824 59.8824 76 40 76C20.1178 76 4 59.8824 4 40C4 20.1178 20.1178 4 40 4C59.8824 4 76 20.1178 76 40Z"
      stroke={color}
      stroke-width="8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

Warning.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Warning;
