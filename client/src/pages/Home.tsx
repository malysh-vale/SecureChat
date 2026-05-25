import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Lock,
  Smartphone,
  Zap,
  Shield,
  MessageSquare,
  ChevronRight,
  Download,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>SecureChat — Mensajería Cifrada y Segura | Chat Privado E2E</title>
        <meta name="description" content="SecureChat: Mensajería cifrada de extremo a extremo con alias vinculados al dispositivo. Chat seguro, privado y sin intermediarios." />
        <meta name="keywords" content="SecureChat, mensajería segura, chat cifrado, E2E, privacidad, comunicación segura" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header / Navigation */}
      <header className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <Lock className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-white">SecureChat</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-slate-300 hover:text-white transition">
              Características
            </a>
            <a href="#mobile" className="text-sm text-slate-300 hover:text-white transition">
              Móvil
            </a>
            <a href="#tech" className="text-sm text-slate-300 hover:text-white transition">
              Tecnología
            </a>
            <a href="#contact" className="text-sm text-slate-300 hover:text-white transition">
              Contáctanos
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span className="text-sm text-blue-300">Cifrado E2E • Dispositivo vinculado</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Mensajería{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              cifrada y segura
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
            Comunícate con confianza. Tu privacidad es nuestra prioridad. Alias vinculados al dispositivo,
            cifrado de extremo a extremo y sin intermediarios.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() =>
                window.open("https://securechat-vffa483k.manus.space", "_blank")
              }
            >
              Acceder a SecureChat
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800"
              onClick={() => (window.location.href = "/install")}
            >
              <Download className="w-4 h-4 mr-2" />
              Descargar como app
            </Button>
          </div>

          {/* Demo Preview */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm p-1">
            <div className="rounded-xl bg-gradient-to-b from-slate-700 to-slate-800 aspect-video flex items-center justify-center">
              <div className="text-center">
                <Smartphone className="w-16 h-16 text-slate-500 mx-auto mb-4" />
                <p className="text-slate-400 text-sm">
                  Interfaz responsiva optimizada para móvil
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interface Showcase Section */}
      <section className="container py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Interfaz personalizada y moderna
          </h2>
          <div className="rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663689871688/PjGw745noduvJGpW9CUaxb/securechat-desktop-ui-Ddw9C7xewSdiguMhkZWnFx.webp"
              alt="SecureChat interfaz de escritorio"
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-slate-300 mt-6">
            Diseño moderno con tema oscuro, sidebar inteligente y experiencia de usuario fluida en todos los dispositivos.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Características principales
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Lock,
              title: "Cifrado E2E",
              description:
                "Todos los mensajes se cifran localmente en tu dispositivo. El servidor nunca ve el contenido.",
            },
            {
              icon: Shield,
              title: "Alias Vinculado",
              description:
                "Tu alias está vinculado al dispositivo. Solo puedes iniciar sesión desde donde lo registraste.",
            },
            {
              icon: Zap,
              title: "Tiempo Real",
              description:
                "Mensajes instantáneos, indicadores de escritura y estado en línea en tiempo real.",
            },
            {
              icon: Smartphone,
              title: "Responsive",
              description:
                "Interfaz completamente adaptada para móvil con sidebar retráctil y swipe táctil.",
            },
            {
              icon: MessageSquare,
              title: "Multimedia",
              description:
                "Envía imágenes, audios y más. Todo cifrado de extremo a extremo.",
            },
            {
              icon: Lock,
              title: "Privacidad Total",
              description:
                "Sin recopilación de datos. Tu privacidad es tu derecho fundamental.",
            },
          ].map((feature, idx) => (
            <Card
              key={idx}
              className="bg-slate-800/50 border-slate-700/50 hover:border-slate-600/50 transition p-6"
            >
              <feature.icon className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-400">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Mobile Features Section */}
      <section id="mobile" className="container py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Optimizado para móvil
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Panel de contactos retráctil
              </h3>
              <ul className="space-y-4">
                {[
                  "Botón hamburguesa fijo para abrir/cerrar",
                  "Drawer lateral animado con transición suave",
                  "Overlay semitransparente para cerrar",
                  "Swipe táctil desde el borde izquierdo",
                  "Cierre automático al seleccionar chat",
                  "Tecla Escape para cerrar el panel",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663689871688/PjGw745noduvJGpW9CUaxb/securechat-mobile-ui-8zi3bf82wDTZg3NX4BKa5b.webp"
                  alt="SecureChat interfaz móvil"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="container py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Stack tecnológico
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "React 19", desc: "Framework UI moderno" },
            { name: "TypeScript", desc: "Tipado estático" },
            { name: "TailwindCSS", desc: "Estilos utilitarios" },
            { name: "Vite", desc: "Build tool rápido" },
            { name: "E2E Encryption", desc: "Cifrado extremo a extremo" },
            { name: "WebSocket", desc: "Comunicación en tiempo real" },
            { name: "PWA", desc: "Instalable en dispositivos" },
            { name: "Responsive", desc: "Mobile-first design" },
          ].map((tech, idx) => (
            <Card
              key={idx}
              className="bg-slate-800/50 border-slate-700/50 p-6 text-center"
            >
              <h4 className="font-semibold text-white mb-2">{tech.name}</h4>
              <p className="text-sm text-slate-400">{tech.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para comunicarte de forma segura?
          </h2>
          <p className="text-slate-300 mb-8">
            Accede a SecureChat ahora y comienza a chatear con cifrado de extremo a extremo.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() =>
              window.open("https://securechat-vffa483k.manus.space", "_blank")
            }
          >
            Abrir SecureChat
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            ¿Preguntas o sugerencias?
          </h2>
          <p className="text-slate-300 text-center mb-12">
            Nos encantaría escucharte. Ponte en contacto con nosotros para cualquier consulta.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Form */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Envía un mensaje</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600/50 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600/50 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    placeholder="Tu mensaje aquí..."
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600/50 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 transition resize-none"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Enviar mensaje
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-between">
              <div className="space-y-6">
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-blue-400" />
                    Correo electrónico
                  </h4>
                  <a
                    href="mailto:lukasjara7@hotmail.com"
                    className="text-blue-400 hover:text-blue-300 transition font-medium"
                  >
                    lukasjara7@hotmail.com
                  </a>
                  <p className="text-slate-400 text-sm mt-2">
                    Responderemos en las próximas 24 horas
                  </p>
                </div>

                <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-blue-400" />
                    Respuesta rápida
                  </h4>
                  <p className="text-slate-300 text-sm">
                    Para consultas urgentes, envía un email con el asunto "URGENTE" y nos pondremos en contacto inmediatamente.
                  </p>
                </div>

                <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-400" />
                    Privacidad garantizada
                  </h4>
                  <p className="text-slate-300 text-sm">
                    Tu información nunca será compartida. Nos comprometemos con tu privacidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm mt-20">
        <div className="container py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center">
                  <Lock className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-white">SecureChat</span>
              </div>
              <p className="text-sm text-slate-400">
                Mensajería cifrada de extremo a extremo.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Producto</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Características
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Seguridad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Precios
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Acerca de
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Términos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400">
              © 2026 SecureChat. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white transition">
                Twitter
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition">
                GitHub
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition">
                Discord
              </a>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
