import * as React from "react";

import PropTypes from "prop-types";

interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
}

const Save: React.FunctionComponent<IconProps> = ({
  color = "currentColor",
  size = 24,
  ...other
}) => (
  <svg height={size} width={size} viewBox="0 0 88 88" fill="none" {...other}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M68.6864 0C70.808 0 72.8428 0.84284 74.3432 2.34316L85.6568 13.6568C87.1572 15.1572 88 17.192 88 19.3137V76C88 82.6276 82.6276 88 76 88H12C5.3726 88 0 82.6276 0 76V12C0 5.3726 5.3726 0 12 0H68.6864ZM12 8C9.79088 8 8 9.79088 8 12V76C8 78.2092 9.79088 80 12 80H16V56C16 49.3724 21.3726 44 28 44H60C66.6276 44 72 49.3724 72 56V80H76C78.2092 80 80 78.2092 80 76V23.3137C80 21.192 79.1572 19.1572 77.6568 17.6568L70.3432 10.3432C68.8428 8.84284 66.808 8 64.6864 8H64V16C64 22.6274 58.6276 28 52 28H36C29.3726 28 24 22.6274 24 16V8H12ZM64 80V56C64 53.7908 62.2092 52 60 52H28C25.7909 52 24 53.7908 24 56V80H64ZM32 8H56V16C56 18.2091 54.2092 20 52 20H36C33.7909 20 32 18.2091 32 16V8Z"
      fill={color}
    />
  </svg>
);

Save.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Save;
