import { Card as StyledCard, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./style";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

export { CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
