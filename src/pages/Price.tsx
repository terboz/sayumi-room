import { motion } from 'motion/react';
import { CheckCircle2, Infinity } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.2, 0, 0, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Price() {
  return (
    <div className="pt-20">
      {/* Plans Section (With Prices) */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-16 md:mb-20"
          >
            <h1 className="text-4xl tracking-tight mb-4">Price</h1>
            <p className="text-tertiary font-sans tracking-widest text-sm italic">料金詳細</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Soft Plan */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="border border-[#D0C5AF]/30 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-primary/30 transition-colors duration-500"
            >
              <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#735C00" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              </div>
              <h3 className="text-2xl mb-6">ソフトプラン</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl text-primary tracking-tight">393,000円</span>
                <span className="text-sm text-tertiary ml-2">税込</span>
              </div>
              <p className="text-secondary leading-[1.7] mb-10 min-h-[80px]">
                自分自身の調整と、スピリチュアルな歩みの中で明晰さを求める方に最適なプランです。
              </p>
              <ul className="space-y-5 mb-12">
                <li className="flex items-center text-sm text-secondary">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-4 flex-shrink-0" />
                  <span>コアセッション各60分</span>
                </li>
                <li className="flex items-center text-sm text-secondary">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-4 flex-shrink-0" />
                  <span>質問セッション各30分</span>
                </li>
                <li className="flex items-center text-sm text-secondary">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-4 flex-shrink-0" />
                  <span>基本的なエネルギーサポート</span>
                </li>
              </ul>
            </motion.div>

            {/* Hard Plan */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2, ease: [0.2, 0, 0, 1] } }
              }}
              className="border border-primary/40 rounded-[2rem] p-8 md:p-10 relative overflow-hidden ethereal-shadow"
            >
              <div className="absolute top-0 right-0 bg-[#D4AF37] text-white text-xs font-sans tracking-widest py-1 px-10 rotate-45 translate-x-[30%] translate-y-[100%] shadow-sm">
                PREMIUM
              </div>
              <h3 className="text-2xl mb-6">ハードプラン</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl text-primary tracking-tight">555,500円</span>
                <span className="text-sm text-tertiary ml-2">税込</span>
              </div>
              <p className="text-secondary leading-[1.7] mb-10 min-h-[80px]">
                経営者、芸能人、セレブ向け。より詳しく、高周波な共鳴と集中的なワークが必要な方へ。
              </p>
              <ul className="space-y-5 mb-12">
                <li className="flex items-center text-sm text-secondary">
                  <svg className="w-4 h-4 text-primary mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>コアセッション各90分</span>
                </li>
                <li className="flex items-center text-sm text-secondary">
                  <svg className="w-4 h-4 text-primary mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>質問セッション各60分</span>
                </li>
                <li className="flex items-center text-sm text-secondary">
                  <svg className="w-4 h-4 text-primary mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="font-medium">優先予約対応</span>
                </li>
              </ul>
            </motion.div>
          </div>
          <p className="text-center text-sm text-tertiary mt-12 italic">※分割払いも可能です。お気軽にご相談ください。</p>
        </div>
      </section>

      {/* Services Section (With Prices) */}
      <section className="py-20 md:py-32 bg-surface-low">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl tracking-tight mb-10 md:mb-16">
              スピリチュアル・サービス
            </motion.h2>

            <div className="space-y-6 md:space-y-8">
              {/* 単発セッション */}
              <motion.div variants={fadeUp} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-4">
                  <h3 className="text-xl">
                    単発セッション <span className="text-sm text-tertiary block sm:inline mt-1 sm:mt-0 sm:ml-2">(ブロック外し)</span>
                  </h3>
                  <span className="text-primary text-xl">15,000円</span>
                </div>
                <p className="text-secondary text-sm leading-[1.7]">
                  潜在意識のブロックや停滞したエネルギーパターンを取り除く、集中的なエネルギーワークです。(60分)
                </p>
              </motion.div>

              {/* 波動調整 */}
              <motion.div variants={fadeUp} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                  <h3 className="text-xl">
                    波動調整 <span className="text-sm text-tertiary block sm:inline mt-1 sm:mt-0 sm:ml-2">(身体・空間)</span>
                  </h3>
                  <div className="text-left sm:text-right">
                    <div>
                      <span className="text-primary text-xl">3,000円</span> <span className="text-xs text-tertiary ml-1">(初回60分)</span>
                    </div>
                    <div className="text-xs text-tertiary mt-2 leading-relaxed">
                      月1回 5,000円 <span className="hidden sm:inline mx-1">/</span><br className="sm:hidden" />
                      月2回 8,000円 <span className="hidden sm:inline mx-1">/</span><br className="sm:hidden" />
                      月3回 11,000円
                    </div>
                  </div>
                </div>
                <p className="text-secondary text-sm leading-[1.7] mb-6">
                  肝臓、腎臓、心臓などの特定の部位、心の解放、あるいはオフィスや自宅、愛車などの空間全体の調和を整えます。
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  <span className="text-[10px] md:text-xs border border-primary/20 text-secondary px-3 py-1.5 rounded-full bg-white/50 whitespace-nowrap">内臓ケア</span>
                  <span className="text-[10px] md:text-xs border border-primary/20 text-secondary px-3 py-1.5 rounded-full bg-white/50 whitespace-nowrap">心の解放</span>
                  <span className="text-[10px] md:text-xs border border-primary/20 text-secondary px-3 py-1.5 rounded-full bg-white/50 whitespace-nowrap">空間の浄化</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mt-8 lg:mt-0"
          >
            <img 
              src="/media/lighting.png" 
              onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1000&auto=format&fit=crop"; }}
              alt="Light in Darkness" 
              className="w-full h-auto rounded-[2rem] ethereal-shadow object-cover aspect-square"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
