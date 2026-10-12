import { useEffect, type ReactNode } from "react";
import {
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { HomePage } from "@/pages/home";
import { PrivasiPage } from "@/pages/privasi";
import { SyaratPage } from "@/pages/syarat";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main id="konten-utama" className="flex w-full flex-1 flex-col">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <a
        href="#konten-utama"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary-800 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Lewati ke konten utama
      </a>
      <Routes>
        <Route
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="/privasi" element={<PrivasiPage />} />
          <Route path="/syarat" element={<SyaratPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}