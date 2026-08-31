import { useState } from "react";
import { Layout } from "./components/Layout";
import { CvShell } from "./components/CvShell";
import type { PageId } from "./types";
import { HomePage } from "./pages/HomePage";
import { PortalPage } from "./pages/PortalPage";
import { CicloPage } from "./pages/CicloPage";
import { SiglasPage } from "./pages/SiglasPage";
import { PerfisPage } from "./pages/PerfisPage";
import { ErrosPage } from "./pages/ErrosPage";
import { ContratacaoPage } from "./pages/ContratacaoPage";
import { LegislacaoPage } from "./pages/LegislacaoPage";
import { LojaPage } from "./pages/LojaPage";
import { AuditoriaPage } from "./pages/AuditoriaPage";
import { MegaBrainPage } from "./pages/MegaBrainPage";
import { FontesPage } from "./pages/FontesPage";
import { CvMakerPage } from "./pages/CvMakerPage";
import { OpsPage } from "./pages/OpsPage";

export default function App() {
  const [page, setPage] = useState<PageId>("home");

  /* CV Maker = produto irmão, casca própria (não mistura nav do Manual) */
  if (page === "cv") {
    return (
      <CvShell onNavigate={setPage}>
        <CvMakerPage />
      </CvShell>
    );
  }

  return (
    <Layout page={page} onNavigate={setPage}>
      {page === "home" && <HomePage onNavigate={setPage} />}
      {page === "portal" && <PortalPage onNavigate={setPage} />}
      {page === "ciclo" && <CicloPage />}
      {page === "siglas" && <SiglasPage />}
      {page === "perfis" && <PerfisPage />}
      {page === "erros" && <ErrosPage />}
      {page === "contratacao" && <ContratacaoPage />}
      {page === "legislacao" && <LegislacaoPage />}
      {page === "loja" && <LojaPage />}
      {page === "auditoria" && <AuditoriaPage />}
      {page === "megabrain" && <MegaBrainPage onNavigate={setPage} />}
      {page === "fontes" && <FontesPage />}
      {page === "ops" && <OpsPage onNavigate={setPage} />}
    </Layout>
  );
}
