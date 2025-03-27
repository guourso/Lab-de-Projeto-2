import styled from 'styled-components';
import * as LabelPrimitive from '@radix-ui/react-label';

export const LabelStyled = styled(LabelPrimitive.Root)`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
  
  &:has(~ .peer:disabled) {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;