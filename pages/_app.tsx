import { Layout } from "../components/Layout";
import { SessionProvider } from "next-auth/react";
import { MantineProvider } from "@mantine/core";
import "../styles/global.css";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: any) {
  return (
    <SessionProvider session={session}>
      <MantineProvider
        theme={{
          components: {
            Input: {
              styles: (theme) => ({
                input: {
                  borderColor: "black",
                },
              }),
            },
          },
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Layout>
          <Component {...pageProps}></Component>
        </Layout>
      </MantineProvider>
    </SessionProvider>
  );
}
