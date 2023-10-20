import * as React from "react";

import PropTypes from "prop-types";

interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
}

const PlusBox: React.FunctionComponent<IconProps> = ({
  color = "currentColor",
  size = 24,
  ...other
}) => (
  <svg viewBox="0 0 25 26" fill="none" height={size} width={size} {...other}>
    <path
      opacity="0.5"
      d="M12.5002 23.4163C7.58969 23.4163 5.13446 23.4163 3.60899 21.8908C2.0835 20.3654 2.0835 17.9101 2.0835 12.9997C2.0835 8.08921 2.0835 5.63398 3.60899 4.1085C5.13446 2.58301 7.58969 2.58301 12.5002 2.58301C17.4106 2.58301 19.8659 2.58301 21.3913 4.1085C22.9168 5.63398 22.9168 8.08921 22.9168 12.9997C22.9168 17.9101 22.9168 20.3654 21.3913 21.8908C19.8659 23.4163 17.4106 23.4163 12.5002 23.4163Z"
      fill='white'
      stroke={color}
    />
    <path
      d="M12.5 9.09375C12.9315 9.09375 13.2812 9.44353 13.2812 9.875V12.2188H15.625C16.0565 12.2188 16.4062 12.5685 16.4062 13C16.4062 13.4315 16.0565 13.7812 15.625 13.7812H13.2812V16.125C13.2812 16.5565 12.9315 16.9062 12.5 16.9062C12.0685 16.9062 11.7188 16.5565 11.7188 16.125V13.7812H9.375C8.94353 13.7812 8.59375 13.4315 8.59375 13C8.59375 12.5685 8.94353 12.2188 9.375 12.2188H11.7188V9.875C11.7188 9.44353 12.0685 9.09375 12.5 9.09375Z"
      fill={color}
    />
  </svg>
);

PlusBox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default PlusBox;
