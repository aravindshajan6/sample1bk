import * as React from "react";

import PropTypes from "prop-types";

interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
}

const Close: React.FunctionComponent<IconProps> = ({
  color = "black",
  size = 24,
  ...other
}) => (
  <svg fill="none" height={size} width={size} {...other} viewBox="0 0 34 34">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.6663 16.9997C33.6663 26.2043 26.2043 33.6663 16.9997 33.6663C7.79492 33.6663 0.333008 26.2043 0.333008 16.9997C0.333008 7.79492 7.79492 0.333008 16.9997 0.333008C26.2043 0.333008 33.6663 7.79492 33.6663 16.9997ZM11.9491 11.9491C12.4372 11.4609 13.2287 11.4609 13.7168 11.9491L16.9997 15.2318L20.2823 11.9491C20.7705 11.461 21.562 11.461 22.0502 11.9491C22.5383 12.4373 22.5383 13.2287 22.0502 13.7168L18.7673 16.9997L22.0502 20.2823C22.5383 20.7705 22.5383 21.562 22.0502 22.0502C21.562 22.5383 20.7705 22.5383 20.2823 22.0502L16.9997 18.7675L13.7168 22.0502C13.2287 22.5383 12.4372 22.5383 11.9491 22.0502C11.4609 21.562 11.4609 20.7705 11.9491 20.2825L15.2318 16.9997L11.9491 13.7168C11.4609 13.2287 11.4609 12.4372 11.9491 11.9491Z"
      fill={color}
    />
  </svg>
);

Close.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Close;
