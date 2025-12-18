import { motion } from "framer-motion"
import { ArrowRight, Shield, Truck, Award, Users, Target, Heart, Leaf, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "wouter"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "الجودة",
      description: "نلتزم بتقديم أعلى معايير الجودة في جميع منتجاتنا",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Heart,
      title: "العناية بالعملاء",
      description: "رضا عملائنا هو أولويتنا القصوى في كل ما نقدمه",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Leaf,
      title: "الاستدامة",
      description: "نسعى لتقديم منتجات صديقة للبيئة ومستدامة",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Award,
      title: "التميز",
      description: "نتفوق في تقديم تجربة استثنائية لعملائنا",
      color: "from-yellow-500 to-orange-600"
    }
  ]

  const stats = [
    { number: "50,000+", label: "عميل سعيد" },
    { number: "100%", label: "منتجات أصلية" },
    { number: "24/7", label: "دعم العملاء" },
    { number: "15+", label: "نكهة مميزة" }
  ]

  const team = [
    {
      role: "فريق خدمة العملاء",
      description: "متاحون على مدار الساعة للإجابة على استفساراتكم"
    },
    {
      role: "فريق التوصيل",
      description: "نضمن وصول طلباتكم بأمان وسرعة"
    },
    {
      role: "فريق الجودة",
      description: "نتأكد من أعلى معايير الجودة في كل منتج"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      <Navbar />
      
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <Link href="/">
                <Button variant="ghost" className="mb-6 gap-2">
                  <ArrowRight className="h-4 w-4" />
                  العودة للرئيسية
                </Button>
              </Link>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-l from-primary to-emerald-400 bg-clip-text text-transparent">
                من نحن
              </h1>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed">
                DZRT هي العلامة التجارية الرائدة في مجال أكياس النيكوتين الفاخرة في المملكة العربية السعودية. 
                نقدم لكم تجربة استثنائية بنكهات سعودية أصيلة تجمع بين الأصالة والابتكار.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">رؤيتنا ورسالتنا</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="bg-white/5 border-white/10 h-full">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center mb-6">
                      <Target className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">رؤيتنا</h3>
                    <p className="text-white/60 leading-relaxed">
                      أن نكون الخيار الأول والأفضل لمحبي أكياس النيكوتين الفاخرة في المنطقة، 
                      مع الحفاظ على أعلى معايير الجودة والابتكار.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="bg-white/5 border-white/10 h-full">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-6">
                      <Star className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">رسالتنا</h3>
                    <p className="text-white/60 leading-relaxed">
                      تقديم منتجات عالية الجودة بنكهات سعودية أصيلة، مع ضمان تجربة شراء سهلة 
                      وآمنة وتوصيل سريع لجميع أنحاء المملكة.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">قيمنا</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                المبادئ التي نلتزم بها في كل ما نقدمه
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-black border-white/10 hover:border-primary/50 transition-all h-full">
                    <CardContent className="p-6 text-center">
                      <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center`}>
                        <value.icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                      <p className="text-white/60 text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">لماذا تختارنا؟</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">منتجات أصلية 100%</h3>
                <p className="text-white/60">جميع منتجاتنا أصلية ومستوردة من مصادر موثوقة ومعتمدة</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Truck className="h-10 w-10 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">توصيل سريع</h3>
                <p className="text-white/60">نوصل طلباتكم لجميع مناطق المملكة خلال 2-5 أيام عمل</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Users className="h-10 w-10 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">دعم متواصل</h3>
                <p className="text-white/60">فريق خدمة العملاء متاح للرد على استفساراتكم</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">فريق العمل</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={member.role}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-black border-white/10 hover:border-primary/50 transition-all">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{member.role}</h3>
                      <p className="text-white/60 text-sm">{member.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="bg-gradient-to-br from-primary/20 to-emerald-900/20 border-primary/30">
                <CardContent className="p-12 text-center">
                  <h2 className="text-3xl font-bold text-white mb-4">ابدأ تجربتك معنا</h2>
                  <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                    اكتشف مجموعتنا المميزة من أكياس النيكوتين الفاخرة واستمتع بتجربة فريدة من نوعها
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/products">
                      <Button size="lg" className="gap-2" data-testid="button-browse-products">
                        تصفح المنتجات
                        <ArrowRight className="h-4 w-4 rotate-180" />
                      </Button>
                    </Link>
                    <Link href="/support">
                      <Button size="lg" variant="outline" data-testid="button-contact-us">
                        تواصل معنا
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
