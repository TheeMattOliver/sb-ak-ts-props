import React from "react";

import Button from "@atlaskit/button";
import { ButtonProps } from "@atlaskit/button";

const SIZES = {
  small: {
    "--borderRadius": `${6 / 16}rem`,
    "--fontSize": `${14 / 16}rem`,
    "--padding": `${7 / 16}rem ${16 / 16}rem`,
    "--boxShadow":
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  },
  medium: {
    "--borderRadius": `${6 / 16}rem`,
    "--fontSize": `${16 / 16}rem`,
    "--padding": `${7 / 16}rem ${16 / 16}rem`,
    "--boxShadow":
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  },
  large: {
    "--borderRadius": `${6 / 16}rem`,
    "--fontSize": `${20 / 16}rem`,
    "--padding": `${9 / 16}rem ${20 / 16}rem`,
    "--boxShadow":
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  },
};

interface AtlasButtonProps extends ButtonProps {}

/**
 * The AtlasButton component provides a clone of the AtlasKit button API, but extends
 * its types and provides additional functionality.
 */
const AtlasButton = (props: AtlasButtonProps) => {
  return (
    <Button
      {...props}
      css={{
        backgroundColor: "hotpink",
        "&:hover": {
          color: "lightgreen",
        },
      }}
    />
  );
};

export default AtlasButton;
