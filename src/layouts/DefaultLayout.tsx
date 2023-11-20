import { Suspense } from "react";
import { TopBar } from "../../src/components/TopBar";
type Props = {
  children: React.ReactNode;
};
export const DefaultLayout = ({ children }: Props) => {
  return (
    <div>
      <TopBar />
      <Suspense>
        <div className="px-10">{children}</div>
      </Suspense>
    </div>
  );
};
