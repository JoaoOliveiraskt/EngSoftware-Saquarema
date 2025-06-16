import { ExternalLink } from "lucide-react";
import "./App.css";

function App() {
  const cards = [
    {
      title: "Análise curricular",
      description: "Acesse o sistema de análise curricular",
      icon: "📊",
      link: "/",
    },
    {
      title: "Plano de estudos",
      description: "Consulte o plano de estudos",
      icon: "📚",
      link: "https://marvynmesquita.github.io/ars-relatorio-semestral/",
    },
    {
      title: "Univassouras",
      description: "Portal da universidade",
      icon: "🌐",
      link: "https://univassouras.edu.br",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black flex flex-col items-center justify-center p-8 overflow-hidden">
      {/* Logo Section */}
      <div className="mb-12 flex flex-col items-center">
        <div className="h-20 w-20 lg:w-24 lg:h-24 overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl border-2 border-rose-950 shadow-2xl flex items-center justify-center">
          <img
            src="shark-logo.png"
            alt="Logo Engenharia de Software"
            className="h-full w-full object-cover"
          />
        </div>
        <h1 className="text-white text-2xl font-bold text-center mt-4">
          Engenharia de Software
        </h1>
        <p className="text-neutral-400 text-center mt-2">Portal da classe</p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl w-full">
        {cards.map((card, index) => (
          <a
            href={card.link}
            key={index}
            className="group bg-neutral-900 rounded-3xl p-6 border border-neutral-800 hover:border-rose-950 transition-all duration-300 hover:shadow-lg hover:shadow-rose-950/20 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-rose-950 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">
                  {card.icon}
                </span>
              </div>
              <ExternalLink className="w-5 h-5 text-neutral-400 group-hover:text-rose-950 transition-colors" />
            </div>
            <h3 className="text-white text-lg font-semibold mb-2">
              {card.title}
            </h3>
            <p className="text-neutral-400 text-sm mb-4">{card.description}</p>
            <div className="flex items-center text-rose-950 text-sm font-medium">
              <span>Ir para {card.title}</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </div>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-16 text-center">
        <p className="text-neutral-600 text-sm">
          Clique em qualquer cartão para acessar a plataforma respectiva
        </p>
      </div>
    </div>
  );
}

export default App;
