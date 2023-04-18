import "../styles/globals.css";

import type { AppType } from "next/app";
// import type { Session } from "next-auth";
// import { SessionProvider } from "next-auth/react";
import { ClerkProvider } from "@clerk/nextjs";
import { api } from "~/utils/api";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
