import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1 className="text-3xl">DASHBOARD</h1>
      {children}
    </div>
  );
}

export default layout;
