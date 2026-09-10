import { Modal } from "@heroui/react";
import type { ReactNode } from "react";
import { HiOutlineXMark } from "react-icons/hi2";

export interface DialogProps {
  /** Backdrop blur or opacity */
  backdrop?: "opaque" | "blur" | "transparent";
  /** Content of the dialog */
  children?: ReactNode;
  /** Additional classes for the dialog container */
  className?: string;
  /** Hide the top right close button */
  hideCloseButton?: boolean;
  /** Can click outside to dismiss */
  isDismissable?: boolean;
  /** If the dialog is controlled, pass this to manage open state */
  isOpen?: boolean;
  /** Callback for when the open state changes */
  onOpenChange?: (isOpen: boolean) => void;
  /** Render props function for children */
  render?: (props: { close: () => void }) => ReactNode;
  /** Max width of the dialog */
  size?: "xs" | "sm" | "md" | "lg" | "full" | "cover";
  /** Optional title for the default header */
  title?: ReactNode;
  /** If provided, renders an uncontrolled dialog with this trigger element */
  trigger?: ReactNode;
}

export function Dialog({
  isOpen,
  onOpenChange,
  trigger,
  children,
  className = "",
  size = "md",
  backdrop = "blur",
  hideCloseButton = false,
  isDismissable = true,
  title,
  render,
}: DialogProps) {
  const content = (
    <Modal.Backdrop
      isDismissable={isDismissable}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      variant={backdrop}
    >
      <Modal.Container size={size}>
        <Modal.Dialog
          className={`relative mx-auto my-auto overflow-hidden rounded-2xl border border-border bg-surface shadow-xl backdrop-blur-3xl ${className}`}
        >
          {({ close }) => (
            <>
              {!hideCloseButton && (
                <Modal.CloseTrigger className="absolute top-4 right-4 z-50 rounded-full p-1 text-muted transition hover:bg-surface-alt hover:text-foreground">
                  <HiOutlineXMark size={24} />
                </Modal.CloseTrigger>
              )}
              {!!title && (
                <Modal.Header className="flex items-center justify-between border-border border-b px-6 pt-6 pb-4">
                  <Modal.Heading className="font-bold text-foreground text-xl">
                    {title}
                  </Modal.Heading>
                </Modal.Header>
              )}
              {render ? render({ close }) : (children ?? null)}
            </>
          )}
        </Modal.Dialog>
      </Modal.Container>
    </Modal.Backdrop>
  );

  if (trigger) {
    return (
      <Modal>
        <Modal.Trigger>{trigger}</Modal.Trigger>
        {content}
      </Modal>
    );
  }

  return content;
}

Dialog.Body = function DialogBody({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <Modal.Body className={` ${className}`}>{children}</Modal.Body>;
};

Dialog.Footer = function DialogFooter({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Modal.Footer
      className={`flex items-center justify-end gap-3 border-border border-t bg-surface-alt/50 p-6 ${className}`}
    >
      {children}
    </Modal.Footer>
  );
};
