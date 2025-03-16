import type { AppProps } from "next/app";
import "./globals.css";
import RootLayout from "./layout";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
// import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <QueryClientProvider client={queryClient}>
                    <PrimeReactProvider>
                        <RootLayout>
                            <Component {...pageProps} />
                        </RootLayout>
                    </PrimeReactProvider>
                </QueryClientProvider>
            </PersistGate>
        </Provider>
    );
}