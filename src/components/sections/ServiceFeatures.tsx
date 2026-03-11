import { CheckCircle2 } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
}

interface ServiceFeaturesProps {
  features: Feature[];
}

export function ServiceFeatures({ features }: ServiceFeaturesProps) {
  return (
    <section className="py-24" style={{ background: '#0a0a0a' }}>
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
            Клучни предности
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            Зошто да ги користите нашите професионални дрон услуги
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,200,255,0.1)] hover:border-[#00c8ff]/30">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#00c8ff]/10 flex items-center justify-center flex-shrink-0 border border-[#00c8ff]/20">
                  <CheckCircle2 className="w-5 h-5 text-[#00c8ff]" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
