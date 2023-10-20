import * as React from "react";

import PropTypes from "prop-types";

interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
}

const LessThan: React.FunctionComponent<IconProps> = ({
  color = "currentColor",
  size = 24,
  ...other
}) => (
  <svg fill="none" height={size} width={size} {...other} viewBox="0 0 35 35">
    <path
      d="M0.833008 17.5003C0.833008 26.6837 8.31634 34.167 17.4997 34.167C26.683 34.167 34.1663 26.6837 34.1663 17.5003C34.1663 8.31699 26.683 0.83366 17.4997 0.83366C8.31634 0.83366 0.833008 8.31699 0.833008 17.5003ZM20.483 10.7337C20.733 10.9837 20.8497 11.3003 20.8497 11.617C20.8497 11.9337 20.733 12.2503 20.483 12.5003L15.483 17.5003L20.483 22.5003C20.9663 22.9837 20.9663 23.7837 20.483 24.267C19.9997 24.7503 19.1997 24.7503 18.7163 24.267L12.833 18.3837C12.3497 17.9003 12.3497 17.1003 12.833 16.617L18.7163 10.7337C19.2163 10.2503 19.9997 10.2503 20.483 10.7337Z"
      fill={color}
    />
  </svg>
);

LessThan.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default LessThan;
