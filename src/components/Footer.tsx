export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-surface-low text-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-primary text-xl tracking-widest mb-8">SAYUMI</div>
        {/*<div className="flex justify-center gap-8 text-sm text-secondary mb-12 font-sans">
          <a href="#" className="hover:text-primary transition-colors">プライバシーポリシー</a>
          <a href="#" className="hover:text-primary transition-colors">利用規約</a>
          <a href="#" className="text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors">LINE公式アカウント</a>
        </div>*/}
        <p className="text-xs text-tertiary font-sans">
          &copy; SAYUMI. The Sacred Breath of Awakening.
        </p>
      </div>
    </footer>
  );
}
