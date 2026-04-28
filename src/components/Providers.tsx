"use client";

import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <WishlistProvider>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#D32F2F",
              color: "#fff",
              borderRadius: "16px",
              fontSize: "14px",
              fontWeight: "600",
              padding: "16px",
            },
            success: {
              iconTheme: {
                primary: "#D4A373",
                secondary: "#fff",
              },
            },
          }}
        />
        {children}
      </WishlistProvider>
    </CartProvider>
  );
}
