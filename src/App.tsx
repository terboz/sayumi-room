import { motion } from 'motion/react';
import { CheckCircle2, Infinity } from 'lucide-react';

// Animation variants
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

export default function App() {
  return (
    <div className="min-h-screen font-serif text-text-main bg-surface overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 transition-all duration-500 bg-white/50 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl tracking-widest text-primary font-medium">SAYUMI</div>
          <div className="hidden md:flex space-x-12 text-sm tracking-widest text-secondary">
            <a href="#method" className="hover:text-primary transition-colors">Awakening Method</a>
            <a href="#sessions" className="hover:text-primary transition-colors">Sessions</a>
            <a href="#vibration" className="hover:text-primary transition-colors">Vibration</a>
            <a href="#booking" className="hover:text-primary transition-colors">Booking</a>
          </div>
          <button className="bg-gradient-to-r from-[#735C00] to-[#9A7B00] text-white px-6 py-2.5 rounded-full text-sm tracking-wider hover:opacity-90 transition-opacity">
            LINEから予約・相談
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 lg:pt-56 lg:pb-48 bg-ethereal-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="z-10"
          >
            <motion.div variants={fadeUp} className="inline-block border border-primary/30 rounded-full px-4 py-1 mb-8">
              <span className="text-xs tracking-[0.2em] text-primary font-sans uppercase">Sacred Journey</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="leading-[1.2] tracking-tight mb-6">
              <span className="text-lg lg:text-xl font-medium tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,1)] [text-shadow:0_0_15px_rgba(255,255,255,1),0_0_30px_rgba(255,255,255,0.9)] inline-block mb-3">目醒めのエキスパート</span><br />
              <span className="text-gradient-gold italic font-light text-4xl lg:text-5xl">ライフコンサルタント<br />SAYUMI</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-secondary leading-[1.8] mb-12 max-w-lg text-lg">
              私の人生体験を元にスタートしたメソッドです。30代で大病を経験してから、15年間で1万人以上の素質を鑑定。あなたの真の魂を目醒めさせ、軽やかに生きる土台作りをお手伝いします。
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-6">
              <button className="bg-[#735C00] text-white px-10 py-4 rounded-full tracking-wider hover:bg-[#5a4800] transition-colors duration-500">
                魂の旅を始める
              </button>
              <button className="border border-[#735C00]/30 text-primary px-10 py-4 rounded-full tracking-wider hover:bg-primary/5 transition-colors duration-500">
                詳しく知る
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.2, 0, 0, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent z-10 mix-blend-overlay rounded-2xl"></div>
            <img 
              src="../media/flower.png" 
              onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1468327768560-75b778cbb551?q=80&w=1000&auto=format&fit=crop"; }}
              alt="Flower" 
              className="w-full h-auto rounded-2xl ethereal-shadow object-cover aspect-square"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <img 
              src="../media/selfportrait.png" 
              onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"; }}
              alt="Woman Portrait" 
              className="w-full max-w-md mx-auto rounded-[2rem] ethereal-shadow object-cover aspect-[4/5]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-4xl text-primary mb-10 tracking-tight">
              15年の歳月と共鳴
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-6 text-secondary leading-[1.8]">
              <p>15年以上のキャリアの中で、1万人を超える方々の素質を鑑定してきました。私の歩みは、自分自身の大きな変化から始まりました。</p>
              <p>30代で経験した大病をきっかけに、スピリチュアルな目醒めと深いエネルギーヒーリング、そして「聖なる息吹」へと導かれました。現在は、リーダーやクリエイター、そして真実を探求する方々を最高潮の波動へと導いています。</p>
              <p>よく「見た目は少女漫画だけど、中身は松岡修造さんですね！」と言われるほど、お一人おひとりの人生に熱く向き合っています。</p>
              <p className="text-primary italic mt-8 text-lg">— 知恵と光による癒やし。</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Method Section */}
      <section id="method" className="py-32 bg-surface-low">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl tracking-tight mb-4">目醒めの3ステップ</h2>
            <p className="text-tertiary font-sans tracking-widest text-sm uppercase">The 3-Step Awakening Method</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "01",
                title: "自分を知る",
                desc: "どんな才能を使って自分の使命を達成していくのか？あなたの魂の設計図を紐解きます。",
                points: ["セッション各2回 (60分)", "才能の特定", "ライフミッションの構築"]
              },
              {
                step: "02",
                title: "自分を活かす",
                desc: "心・身体・エネルギー・波動について。あなたの内なる器を整え、高周波な状態へと導きます。",
                points: ["セッション各3回 (60分)", "エネルギー＆波動ワーク", "心身の統合"]
              },
              {
                step: "03",
                title: "実践する",
                desc: "どのように実践していくか？それぞれの素質により違う個別のアドバイスで現実を変えていきます。",
                points: ["セッション各2回 (60分)", "実生活への応用", "継続的なフォローアップ"]
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: idx * 0.2, ease: [0.2, 0, 0, 1] } }
                }}
                className="bg-white rounded-[2rem] p-10 ethereal-shadow hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="text-primary text-3xl font-light mb-6">{item.step}</div>
                <h3 className="text-2xl mb-4">{item.title}</h3>
                <p className="text-secondary leading-[1.7] mb-8 min-h-[80px]">{item.desc}</p>
                <ul className="space-y-4">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-center text-sm text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-[#F4EBD0]/50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between border border-[#D4AF37]/20"
          >
            <div className="flex items-center mb-6 md:mb-0">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-6 ethereal-shadow">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h4 className="font-medium text-lg">プログラム詳細</h4>
                <p className="text-secondary text-sm italic">期間：約4ヶ月（対面またはZoom）</p>
              </div>
            </div>
            <div className="flex gap-12 text-center">
              <div>
                <div className="text-2xl text-primary mb-1">7回</div>
                <div className="text-xs text-tertiary">メインセッション</div>
              </div>
              <div>
                <div className="text-2xl text-primary mb-1">30分</div>
                <div className="text-xs text-tertiary">質問セッション</div>
              </div>
              <div>
                <div className="text-2xl text-primary mb-1">4回</div>
                <div className="text-xs text-tertiary">質問回数</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="sessions" className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl tracking-tight mb-4">セッションプラン</h2>
            <p className="text-tertiary font-sans tracking-widest text-sm italic">あなたの魂への投資</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Soft Plan */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="border border-[#D0C5AF]/30 rounded-[2rem] p-10 relative overflow-hidden group hover:border-primary/30 transition-colors duration-500"
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
              <button className="w-full border border-primary/30 text-primary py-4 rounded-full tracking-wider hover:bg-primary/5 transition-colors duration-500">
                ソフトプランを選ぶ
              </button>
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
              className="border border-primary/40 rounded-[2rem] p-10 relative overflow-hidden ethereal-shadow"
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
              <button className="w-full bg-[#735C00] text-white py-4 rounded-full tracking-wider hover:bg-[#5a4800] transition-colors duration-500">
                ハードプランを選ぶ
              </button>
            </motion.div>
          </div>
          <p className="text-center text-sm text-tertiary mt-12 italic">※分割払いも可能です。お気軽にご相談ください。</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="vibration" className="py-32 bg-surface-low">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-4xl tracking-tight mb-16">
              スピリチュアル・サービス
            </motion.h2>

            <div className="space-y-8">
              <motion.div variants={fadeUp} className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-xl">単発セッション <span className="text-sm text-tertiary ml-2">(ブロック外し)</span></h3>
                  <span className="text-primary text-xl">15,000円</span>
                </div>
                <p className="text-secondary text-sm leading-[1.7]">
                  潜在意識のブロックや停滞したエネルギーパターンを取り除く、集中的なエネルギーワークです。(60分)
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-xl">波動調整 <span className="text-sm text-tertiary ml-2">(身体・空間)</span></h3>
                  <div className="text-right">
                    <span className="text-primary text-xl">3,000円</span> <span className="text-xs text-tertiary">(初回60分)</span>
                    <div className="text-xs text-tertiary mt-1">月1回 5,000円 / 月2回 8,000円 / 月3回 11,000円</div>
                  </div>
                </div>
                <p className="text-secondary text-sm leading-[1.7] mb-6">
                  肝臓、腎臓、心臓などの特定の部位、心の解放、あるいはオフィスや自宅、愛車などの空間全体の調和を整えます。
                </p>
                <div className="flex gap-3">
                  <span className="text-[10px] border border-primary/20 text-secondary px-3 py-1 rounded-full bg-white/50">内臓ケア</span>
                  <span className="text-[10px] border border-primary/20 text-secondary px-3 py-1 rounded-full bg-white/50">心の解放</span>
                  <span className="text-[10px] border border-primary/20 text-secondary px-3 py-1 rounded-full bg-white/50">空間の浄化</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <img 
              src="../media/lighting.png" 
              onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1000&auto=format&fit=crop"; }}
              alt="Light in Darkness" 
              className="w-full h-auto rounded-[2rem] ethereal-shadow object-cover aspect-square"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section id="booking" className="py-40 bg-ethereal-gradient-bottom text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="flex justify-center mb-10">
              <Infinity className="w-12 h-12 text-primary/60" strokeWidth={1} />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl leading-[1.8] tracking-widest mb-12 italic font-light">
              "同じ行動は同じ結果に。<br />
              行動を変えると未来も変わる。<br />
              自分を丁寧にゆったり愛する。さらなる高みへ。"
            </motion.h2>
            <motion.p variants={fadeUp} className="text-primary text-lg mb-16 tracking-widest">
              心より愛を込めて。深謝。SAYUMI
            </motion.p>
            <motion.button variants={fadeUp} className="bg-[#735C00] text-white px-12 py-5 rounded-full tracking-wider hover:bg-[#5a4800] transition-colors duration-500 text-lg shadow-xl shadow-[#735C00]/20 flex items-center mx-auto">
              LINEから予約・相談
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-surface-low text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-primary text-xl tracking-widest mb-8">SAYUMI</div>
          <div className="flex justify-center gap-8 text-sm text-secondary mb-12 font-sans">
            <a href="#" className="hover:text-primary transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-primary transition-colors">利用規約</a>
            <a href="#" className="text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors">LINE公式アカウント</a>
          </div>
          <p className="text-xs text-tertiary font-sans">
            &copy; SAYUMI. The Sacred Breath of Awakening.
          </p>
        </div>
      </footer>
    </div>
  );
}
