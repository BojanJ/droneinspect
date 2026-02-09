import { Card, CardContent } from '@/components/ui/card';

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
    <section className="py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Како функционира?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Едноставен процес од контакт до завршување на проектот
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                    <h3 className="font-semibold text-lg">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
