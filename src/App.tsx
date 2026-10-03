import { revealNavigationTarget } from "@/lib/navigationMotion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import BuyNow from "./pages/BuyNow";
import Index from "./pages/Index.tsx";
import AvailableWatches from "./pages/AvailableWatches.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
import SoldWatches from "./pages/SoldWatches.tsx";
import SoldWatchDetail from "./pages/SoldWatchDetail.tsx";
import BuyWatches from "./pages/BuyWatches.tsx";
import NotFound from "./pages/NotFound.tsx";
import { LanguageProvider } from "@/i18n/LanguageProvider";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      revealNavigationTarget(location.hash, Boolean(location.hash));
    });
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash, location.key]);
  return (
    <div key={location.pathname} className={location.pathname === "/buy-now" ? "buy-route" : "navigation-route"}>
      <Routes location={location}>
        <Route path="/" element={<Index />} />
        <Route path="/buy-now" element={<BuyNow />} />
        <Route path="/auctions" element={<AvailableWatches />} />
        <Route path="/available-watches" element={<AvailableWatches />} />
        <Route path="/solgte-ure" element={<SoldWatches />} />
        <Route path="/solgte-ure/:id" element={<SoldWatchDetail />} />
        <Route path="/opkoeb" element={<BuyWatches />} />
        <Route path="/watch/:slug" element={<ProductDetail />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
