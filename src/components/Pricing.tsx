import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import Section from './Section';
import Button from './Button';

export default function Pricing() {
  const plans = [
    {
      name: 'Visitor',
      subtitle: 'Free Trial',
      price: '0',
      period: 'Selamanya',
      features: [
        'Akses Terbatas',
        'Watermark pada hasil',
        'Antrian Standard',
        'Basic Support',
        '5 Generate/Hari'
      ],
      cta: 'Coba Sekarang',
      popular: false
    },
    {
      name: 'Creator Pro',
      subtitle: 'Best Value',
      price: '49.000',
      originalPrice: '99.000',
      period: 'per bulan',
      promo: 'Hemat 50%',
      features: [
        'Unlimited Generate',
        'Tanpa Watermark',
        'Akses Semua Fitur Premium',
        'Prioritas Antrian',
        'Unlock Script Viral Library',
        'Priority Support 24/7',
        'Export High Resolution',
        'Commercial License'
      ],
      cta: 'Buka Akses Premium',
      popular: true
    }
  ];

  return (
    <Section id="harga" className="bg-slate-950">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Pilih <span className="text-orange-500">Paket</span> yang Sesuai
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-400"
        >
          Investasi kecil untuk hasil maksimal
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative"
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                  <Zap className="w-4 h-4" />
                  <span>Most Popular</span>
                </div>
              </div>
            )}

            <div className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border-2 h-full relative ${
              plan.popular
                ? 'border-orange-500 shadow-2xl shadow-orange-500/20'
                : 'border-slate-700'
            }`}>
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-orange-500/10 rounded-2xl -z-10" />
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-slate-400">{plan.subtitle}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline space-x-2">
                  {plan.originalPrice && (
                    <span className="text-slate-500 line-through text-xl">Rp {plan.originalPrice}</span>
                  )}
                </div>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-white">Rp {plan.price}</span>
                  <span className="text-slate-400 ml-2">/ {plan.period}</span>
                </div>
                {plan.promo && (
                  <div className="mt-2 inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                    {plan.promo}
                  </div>
                )}
              </div>

              <Button
                className="w-full mb-6"
                variant={plan.popular ? 'primary' : 'secondary'}
                size="lg"
              >
                {plan.cta}
              </Button>

              <div className="space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular ? 'bg-orange-500' : 'bg-slate-700'
                    }`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {plan.popular && (
              <div className="absolute -inset-[2px] bg-gradient-to-br from-red-600 to-orange-500 rounded-2xl opacity-50 blur-xl -z-20" />
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <p className="text-slate-400">
          Semua paket termasuk update gratis selamanya. <span className="text-orange-500 font-semibold">Tidak ada biaya tersembunyi.</span>
        </p>
      </motion.div>
    </Section>
  );
}
