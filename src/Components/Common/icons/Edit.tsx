import * as React from "react";

import PropTypes from "prop-types";

interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
}

const Edit: React.FunctionComponent<IconProps> = ({
  color = "currentColor",
  size = 24,
  ...other
}) => (
  <svg height={size} width={size} viewBox="0 0 86 86" fill="none" {...other}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M79.3908 3.51472C74.7044 -1.17157 67.1064 -1.17158 62.42 3.51472L5.78976 60.1452C4.11456 61.8204 2.97268 63.954 2.50808 66.2768L0.159802 78.0184C-0.95975 83.616 3.9756 88.5516 9.57336 87.432L21.3147 85.0836C23.6378 84.6192 25.7714 83.4772 27.4466 81.802L84.0768 25.1716C88.7632 20.4853 88.7632 12.8873 84.0768 8.201L79.3908 3.51472ZM68.0768 9.17156C69.6392 7.60948 72.1716 7.60948 73.734 9.17156L78.42 13.8579C79.9824 15.42 79.9824 17.9526 78.42 19.5147L67.7336 30.2011L57.3908 19.8579L68.0768 9.17156ZM51.7336 25.5148L11.4466 65.802C10.8882 66.3604 10.5076 67.0716 10.3527 67.846L8.00444 79.5872L19.7458 77.2388C20.5202 77.084 21.2314 76.7036 21.7898 76.1452L62.0768 35.8579L51.7336 25.5148Z"
      fill={color}
    />
  </svg>
);

Edit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Edit;
