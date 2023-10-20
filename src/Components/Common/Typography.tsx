import React, { ReactNode, Ref } from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

const STYLES = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "jumbo",
  "xLarge",
  "large",
  "medium",
  "small",
  "condensedLarge",
  "condensedMedium",
] as const;

type Styles = typeof STYLES[number];

const TYPES = [
  "regular",
  "bold",
  "semibold",
  "boldUppercase",
  "underline",
  "uppercase",
];

type Types = typeof TYPES[number];

const COMPONENTS = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "span",
  "b",
  "strong",
  "i",
  "em",
  "mark",
  "del",
  "s",
  "ins",
  "sub",
  "sup",
  "u",
  "code",
  "blockquote",
  "div",
] as const;

type Components = typeof COMPONENTS[number];

interface TypographyProps {
  style?: Styles;
  type?: Types;
  component?: Components;
  children: ReactNode;
  className?: string;
  [x: string]: any;
}

const Typography = React.forwardRef(
  (
    {
      style = "medium",
      type = "regular",
      component = "div",
      children,
      className = "",
      ...otherProps
    }: TypographyProps,
    ref: Ref<React.ElementType>
  ) => {
    const Component = component as React.ElementType;
    return (
      <Component
        ref={ref}
        data-testid="typography"
        role={component}
        className={classnames("font-poppins",
          {
            "text-2xl": style === "h1",
            "text-xl": style === "h2",
            "text-lg": style === "h3",
            "text-md": style === "h4",
            "text-sm": style === "h5",
            "text-xs": style === "h6",
            "text-2xl ": style === "jumbo",
            "text-xl ": style === "xLarge",
            "text-lg ": style === "large",
            "text-base": style === "medium",
            "text-sm ": style === "small",
            [className]: className,
          },
          {
            "font-normal": type === "regular",
            "font-bold": type === "bold",
            "font-semibold": type === "semibold",
            "font-bold uppercase": type === "boldUppercase",
            "underline": type === "underline",
            "uppercase": type === "uppercase",
          }
        )}
        {...otherProps}
      >
        {children}
      </Component>
    );
  }
);

Typography.propTypes = {
  style: PropTypes.oneOf(STYLES),
  type: PropTypes.oneOf(TYPES),
  component: PropTypes.oneOf(COMPONENTS),
  className: PropTypes.string,
};

Typography.displayName = "Typography";
export default Typography;
