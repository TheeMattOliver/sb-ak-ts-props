import React from "react";

import LoadingButton from "@atlaskit/button/loading-button";
import { LoadingButtonProps } from "@atlaskit/button";

interface ExtendedButtonProps extends LoadingButtonProps {}

/**
 * The ExtendedButton component provides a clone of the AtlasKit button API, but extends
 * its types and provides additional functionality.
 */
const ExtendedLoadingButton = (props: LoadingButtonProps) => {
  return <LoadingButton {...props} />;
};

export default ExtendedLoadingButton;
