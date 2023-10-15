import { FC, PropsWithChildren } from "react";
import FlowbiteContext from "./FlowBiteContext";
import "./globals.css";

const RootLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <html>
      <body>
        <div>
          <FlowbiteContext>{children}</FlowbiteContext>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
