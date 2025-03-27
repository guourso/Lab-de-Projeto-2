import * as React from 'react';
import { TextareaStyled } from './style';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <TextareaStyled
        ref={ref}
        className={className}
        {...props}
      />
    )
  }
);

Textarea.displayName = "Textarea";

export { Textarea };