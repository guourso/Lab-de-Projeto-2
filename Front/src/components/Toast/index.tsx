import React from "react";
import { X } from "lucide-react";
import {
  ToastContainer,
  ToastWrapper,
  ToastTitle,
  ToastDescription,
  ToastCloseButton,
  ToastActionButton,
} from "./style";

export type ToastProps = {
  variant?: "default" | "destructive";
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  onClose: () => void;
};

const Toast: React.FC<ToastProps> = ({ variant = "default", title, description, actionLabel, onAction, onClose }) => {
  return (
    <ToastContainer>
      <ToastWrapper variant={variant}>
        <div>
          <ToastTitle>{title}</ToastTitle>
          {description && <ToastDescription>{description}</ToastDescription>}
        </div>
        {actionLabel && (
          <ToastActionButton onClick={onAction}>{actionLabel}</ToastActionButton>
        )}
        <ToastCloseButton onClick={onClose}>
          <X size={16} />
        </ToastCloseButton>
      </ToastWrapper>
    </ToastContainer>
  );
};

export default Toast;
