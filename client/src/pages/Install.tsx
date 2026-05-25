import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Download, Smartphone, Apple, Chrome } from "lucide-react";
import { useState, useEffect } from "react";

export default function Install() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Detectar iOS
    const iosCheck =
      /iPad|iPhone|iPod/.test(navigator.userAgent) &&
      !(window as any).MSStream;
    setIsIOS(iosCheck);

    // Capturar evento beforeinstallprompt
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    (window as any).addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      (window as any).removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response: ${outcome}`);
    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

  return (
    <>
      <Helmet>
        <title>Instalar SecureChat - Mensajería Segura</title>
        <meta
          name="description"
          content="Descarga e instala SecureChat como aplicación en tu dispositivo móvil o computadora."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* Header */}
        <header className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-40">
          <div className="container flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <Download className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-white">SecureChat</span>
            </div>
            <a
              href="/"
              className="text-sm text-slate-300 hover:text-white transition"
            >
              Volver al inicio
            </a>
          </div>
        </header>

        {/* Main Content */}
        <main className="container py-20">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-20">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Instala SecureChat en tu dispositivo
              </h1>
              <p className="text-lg text-slate-300">
                Accede a tu mensajería segura en cualquier momento, incluso sin
                conexión a internet.
              </p>
            </div>

            {/* Installation Methods */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Android / Chrome */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Chrome className="w-8 h-8 text-blue-400" />
                  <h2 className="text-2xl font-bold text-white">Android</h2>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        Abre SecureChat en Chrome
                      </p>
                      <p className="text-sm text-slate-400">
                        Visita securechat-pjgw745n.manus.space
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        Toca el menú (⋮)
                      </p>
                      <p className="text-sm text-slate-400">
                        En la esquina superior derecha del navegador
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        Selecciona "Instalar aplicación"
                      </p>
                      <p className="text-sm text-slate-400">
                        O "Agregar a pantalla de inicio"
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                      4
                    </div>
                    <div>
                      <p className="font-semibold text-white">¡Listo!</p>
                      <p className="text-sm text-slate-400">
                        SecureChat aparecerá en tu pantalla de inicio
                      </p>
                    </div>
                  </div>
                </div>

                {showInstallPrompt && (
                  <Button
                    onClick={handleInstall}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Instalar ahora
                  </Button>
                )}
              </div>

              {/* iOS / Safari */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Apple className="w-8 h-8 text-slate-300" />
                  <h2 className="text-2xl font-bold text-white">iOS</h2>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        Abre Safari en tu iPhone
                      </p>
                      <p className="text-sm text-slate-400">
                        Visita securechat-pjgw745n.manus.space
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        Toca el botón Compartir
                      </p>
                      <p className="text-sm text-slate-400">
                        (Ícono de flecha hacia arriba en la parte inferior)
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        Selecciona "Agregar a pantalla de inicio"
                      </p>
                      <p className="text-sm text-slate-400">
                        Desplázate si es necesario para encontrarlo
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                      4
                    </div>
                    <div>
                      <p className="font-semibold text-white">¡Listo!</p>
                      <p className="text-sm text-slate-400">
                        SecureChat estará disponible como app en tu pantalla de
                        inicio
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">
                Ventajas de la app instalada
              </h3>
              <ul className="space-y-3">
                {[
                  "✓ Acceso rápido desde la pantalla de inicio",
                  "✓ Funciona sin conexión (con caché)",
                  "✓ Notificaciones push en tiempo real",
                  "✓ Experiencia similar a una app nativa",
                  "✓ Actualizaciones automáticas",
                  "✓ Menor consumo de datos",
                ].map((item, idx) => (
                  <li key={idx} className="text-slate-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Requisitos</h3>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <strong>Android:</strong> Chrome 31+ o navegador compatible
                </li>
                <li>
                  <strong>iOS:</strong> Safari en iPhone/iPad con iOS 11.3+
                </li>
                <li>
                  <strong>Conexión:</strong> HTTPS (ya disponible en nuestro
                  sitio)
                </li>
              </ul>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm mt-20">
          <div className="container py-12">
            <div className="text-center text-slate-400 text-sm">
              <p>
                ¿Preguntas? Contáctanos en{" "}
                <a
                  href="mailto:lukasjara7@hotmail.com"
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  lukasjara7@hotmail.com
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
