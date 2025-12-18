import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Phone, Mail, MessageCircle, Clock, MapPin, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "wouter"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export default function Support() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "اتصل بنا",
      description: "متاحون للرد على استفساراتكم",
      value: "+966 50 123 4567",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      description: "راسلنا في أي وقت",
      value: "support@dzrt.sa",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: MessageCircle,
      title: "الدردشة المباشرة",
      description: "تحدث مع فريق الدعم",
      value: "متاح على مدار الساعة",
      color: "from-purple-500 to-pink-600"
    }
  ]

  const faqs = [
    {
      question: "ما هي مدة التوصيل؟",
      answer: "يتم التوصيل خلال 2-5 أيام عمل حسب موقعك في المملكة العربية السعودية."
    },
    {
      question: "هل يمكنني إرجاع المنتج؟",
      answer: "نعم، يمكنك إرجاع المنتج خلال 14 يوم من تاريخ الاستلام بشرط أن يكون في حالته الأصلية."
    },
    {
      question: "ما هي طرق الدفع المتاحة؟",
      answer: "نقبل الدفع بالبطاقات الائتمانية (فيزا، ماستركارد) ومدى، بالإضافة إلى Apple Pay."
    },
    {
      question: "هل المنتجات أصلية؟",
      answer: "نعم، جميع منتجاتنا أصلية 100% ومستوردة من مصادر موثوقة."
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Link href="/">
            <Button variant="ghost" className="mb-6 gap-2">
              <ArrowRight className="h-4 w-4" />
              العودة للرئيسية
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-l from-primary to-emerald-400 bg-clip-text text-transparent">
            مركز الدعم
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            نحن هنا لمساعدتك. تواصل معنا بأي طريقة تناسبك
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white/5 border-white/10 hover:border-primary/50 transition-all h-full">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center`}>
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-white/50 text-sm mb-3">{method.description}</p>
                  <p className="text-primary font-semibold">{method.value}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white">أرسل لنا رسالة</CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">تم إرسال رسالتك بنجاح</h3>
                    <p className="text-white/60">سنتواصل معك في أقرب وقت ممكن</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        placeholder="الاسم الكامل"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white/5 border-white/10 text-white"
                        required
                        data-testid="input-support-name"
                      />
                      <Input
                        type="email"
                        placeholder="البريد الإلكتروني"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white/5 border-white/10 text-white"
                        required
                        data-testid="input-support-email"
                      />
                    </div>
                    <Input
                      placeholder="رقم الجوال"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-white/5 border-white/10 text-white"
                      data-testid="input-support-phone"
                    />
                    <Input
                      placeholder="موضوع الرسالة"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="bg-white/5 border-white/10 text-white"
                      required
                      data-testid="input-support-subject"
                    />
                    <Textarea
                      placeholder="اكتب رسالتك هنا..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white/5 border-white/10 text-white min-h-32"
                      required
                      data-testid="input-support-message"
                    />
                    <Button 
                      type="submit" 
                      className="w-full gap-2"
                      disabled={isSubmitting}
                      data-testid="button-submit-support"
                    >
                      {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">الأسئلة الشائعة</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-white/5 border-white/10">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-white mb-2">{faq.question}</h3>
                    <p className="text-white/60 text-sm">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-br from-primary/20 to-emerald-900/20 border-primary/30">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-white/80">ساعات العمل</span>
              </div>
              <p className="text-white text-lg mb-2">السبت - الخميس: 9:00 صباحاً - 10:00 مساءً</p>
              <p className="text-white/60">الجمعة: 2:00 مساءً - 10:00 مساءً</p>
              <div className="flex items-center justify-center gap-2 mt-6">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-white/80">الرياض، المملكة العربية السعودية</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
