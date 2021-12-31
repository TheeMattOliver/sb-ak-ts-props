export { default } from "./WrappedModalDialog";

// 👇 this is where I'm tripped up and not sure what to do...
import { ModalBodyProps } from "@atlaskit/modal-dialog";
import React from "react";

import { Modal as ImportedModal } from "./WrappedModalDialog";

const ExportedModal = (props: ModalBodyProps) => <ImportedModal {...props} />;
ExportedModal.defaultProps = ImportedModal.defaultProps;

export { ExportedModal };
