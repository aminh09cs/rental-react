type Props = {
  children: React.ReactNode;
};
export const DefaultLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};
