interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface ServiceProcessProps {
  steps: ProcessStep[];
}

export function ServiceProcess({ steps }: ServiceProcessProps) {
  return (
    <section className="py-24" style={{ background: '#050505' }}>
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
            Како функционира?
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            Едноставен процес од контакт до завршување на проектот
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="glass-card rounded-xl p-6 h-full hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,200,255,0.1)]">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#00c8ff]/10 border border-[#00c8ff]/30 flex items-center justify-center text-2xl font-black text-[#00c8ff]">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-white text-lg">{step.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-3 w-6 h-0.5 bg-[#00c8ff]/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
