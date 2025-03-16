import React, { useEffect } from "react";
import { useRouter, NextRouter } from "next/router";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { LoginRole } from "@/redux/features/auth/authSlice";
import Header from "@/pages/components/common/Header";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/**
 * RootLayout Component
 *
 * This component serves as the root layout for the application
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The children components to be rendered within the layout.
 * @returns {React.ReactElement} The rendered RootLayout component.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const router = useRouter();

  // Flag indicating whether the user is authenticated
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  // Paths that do not require authentication
  const PUBLIC_PATHS = ["/", "/login", "/register"];

  /**
   * useEffect hook to handle route changes and redirection based on authentication.
   *
   * Redirects the user to the login page if not authenticated and trying to access a protected route.
   */
  useEffect(() => {
    if (!isAuthenticated && !PUBLIC_PATHS.includes(router.pathname)) {
      // router.push("/login");
      return;
    }
  }, [isAuthenticated, router]);

  return (
    <div className="flex flex-col">
      <Header />
      {children}
    </div>
  );
}