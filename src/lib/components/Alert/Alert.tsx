import { FC, ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
}

const Alert: FC<AlertProps> = ({ children }) => (
  <dialog open data-testid="Alert">
    {children}
  </dialog>
);

export default Alert;
