import * as React from "react";

import PropTypes from "prop-types";

interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
}

const SearchLense: React.FunctionComponent<IconProps> = ({
  color = "currentColor",
  size = 24,
  ...other
}) => (
  <svg
    fill="none"
    height={size}
    width={size}
    {...other}
    viewBox="0 0 21 21"
  >
    <path
      d="M14.4536 14.4699L19.875 19.875M16.75 8.9375C16.75 13.2522 13.2522 16.75 8.9375 16.75C4.62277 16.75 1.125 13.2522 1.125 8.9375C1.125 4.62277 4.62277 1.125 8.9375 1.125C13.2522 1.125 16.75 4.62277 16.75 8.9375Z"
      stroke="#C1C1C1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

SearchLense.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default SearchLense;
