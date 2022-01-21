import React from "react";

import LoadingButton from "@atlaskit/button/loading-button";
import { LoadingButtonProps } from "@atlaskit/button";

interface AtlasButtonProps extends LoadingButtonProps {}

/**
 * The AtlasButton component provides a clone of the AtlasKit button API, but extends
 * its types and provides additional functionality.
 */
const AtlasLoadingButton = (props: LoadingButtonProps) => {
  return <LoadingButton {...props} />;
};

export default AtlasLoadingButton;
