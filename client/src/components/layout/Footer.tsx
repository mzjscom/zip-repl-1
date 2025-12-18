import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-white/10">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-right">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-3xl font-bold font-heading tracking-tighter mb-6 block hover:text-primary transition-colors">
              DZRT
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mr-auto ml-0">
              أكياس نيكوتين فاخرة مصممة لنمط الحياة العصري. خالية من التبغ، خالية من الدخان، خالية من المتاعب.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-white/40">التسوق</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li><Link href="/products" className="hover:text-primary transition-colors">جميع المنتجات</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">نعناع</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">فواكه</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">الباقات</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-white/40">الشركة</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li><Link href="/about" className="hover:text-primary transition-colors">قصتنا</Link></li>
              <li><Link href="/support" className="hover:text-primary transition-colors">الدعم</Link></li>
              <li><Link href="/support" className="hover:text-primary transition-colors">تواصل معنا</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-white/40">قانوني</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li><Link href="/support" className="hover:text-primary transition-colors">سياسة الخصوصية</Link></li>
              <li><Link href="/support" className="hover:text-primary transition-colors">الشروط والأحكام</Link></li>
              <li><Link href="/support" className="hover:text-primary transition-colors">سياسة الشحن</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>&copy; ٢٠٢٤ DZRT. جميع الحقوق محفوظة.</p>
          <p>تحذير: هذا المنتج يحتوي على النيكوتين. النيكوتين مادة كيميائية تسبب الإدمان.</p>
        </div>
      </div>
    </footer>
  );
}
