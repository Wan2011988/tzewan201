import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Award, 
  Shield, 
  TrendingUp, 
  Users, 
  Star,
  Facebook,
  Instagram,
  MessageCircle,
  Smartphone
} from 'lucide-react'
import judoTraining from './assets/judo-training.jpg'
import judoCompetition from './assets/judo-competition.jpg'
import businessProfessional from './assets/business-professional.jpg'
import financialAdvisor from './assets/financial-advisor.jpg'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-900">Wan</div>
              <div className="ml-2 text-sm text-gray-600">柔道教練 & 財務顧問</div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {[
                  { id: 'home', label: '首頁' },
                  { id: 'about', label: '關於我' },
                  { id: 'services', label: '我的服務' },
                  { id: 'testimonials', label: '成功案例' },
                  { id: 'achievements', label: '媒體與榮譽' },
                  { id: 'insights', label: '內容專區' },
                  { id: 'contact', label: '聯絡我' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {[
                { id: 'home', label: '首頁' },
                { id: 'about', label: '關於我' },
                { id: 'services', label: '我的服務' },
                { id: 'testimonials', label: '成功案例' },
                { id: 'achievements', label: '媒體與榮譽' },
                { id: 'insights', label: '內容專區' },
                { id: 'contact', label: '聯絡我' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 w-full text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${judoTraining})`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="text-center text-white">
            <div className="mb-8">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl border-4 border-white">
                W
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              從運動場到財富規劃
              <br />
              <span className="text-blue-400">我的人生一直拼搏！</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              運動場上的拼搏精神，帶到你人生財富每一步。Wan，來自大灣區的柔道教練&財務顧問。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                onClick={() => scrollToSection('contact')}
              >
                立即諮詢
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg"
                onClick={() => scrollToSection('about')}
              >
                了解更多
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">核心服務</h2>
            <p className="text-xl text-gray-600">專業、誠信、用心服務每一位客戶</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">保險規劃</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">為您和家人提供全面的風險保障，讓愛延續，讓責任得到承擔。</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">財富管理</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">運用專業投資策略，助您實現財富增值和資產傳承的目標。</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">企業培訓</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">將柔道精神融入職場，為企業團隊注入堅韌不拔的力量。</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">關於我</h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  你好，我係Wan，一位來自大灣區嘅柔道教練、前運動員，同時係香港/內地專業保險規劃師。
                  運動教曉我人生贏在堅持、輸得起，做生意教會我風險管理、資產累積，宜家用心服務每一位信任我嘅朋友和家庭。
                </p>
                <p>
                  從小接觸柔道運動，在訓練和比賽中學會了堅持不懈的精神。柔道不僅鍛煉了我的身體，
                  更重要的是塑造了我的品格。在柔道的世界裡，我學會了尊重對手、承認失敗、永不放棄。
                </p>
                <p>
                  選擇在大灣區發展，是因為這裡匯聚了香港的國際金融優勢和內地的廣闊市場。
                  我能夠為兩地客戶提供跨境的保險和財務規劃服務，幫助他們在大灣區的發展中抓住機遇，規避風險。
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-3 py-1">前柔道運動員</Badge>
                <Badge variant="secondary" className="px-3 py-1">專業保險規劃師</Badge>
                <Badge variant="secondary" className="px-3 py-1">企業培訓師</Badge>
                <Badge variant="secondary" className="px-3 py-1">大灣區專家</Badge>
              </div>
            </div>
            <div className="lg:text-center">
              <img 
                src={businessProfessional} 
                alt="Wan - 專業形象" 
                className="w-80 h-80 mx-auto rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">我的服務</h2>
            <p className="text-xl text-gray-600">專業服務範圍，滿足您的不同需求</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  保險規劃
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">家庭保障方案</h4>
                  <p className="text-gray-600">人生充滿不確定性，但我們可以通過合理的保險規劃來為家庭築起一道安全屏障。</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">醫療保障</h4>
                  <p className="text-gray-600">健康是人生最大的財富。完善的醫療保險不僅能夠減輕疾病帶來的經濟負擔。</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">資產傳承</h4>
                  <p className="text-gray-600">通過專業的保險規劃，實現資產的有效傳承和稅務優化。</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                  財富管理
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">投資規劃</h4>
                  <p className="text-gray-600">根據您的風險承受能力和投資目標，制定合適的投資策略。</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">退休規劃</h4>
                  <p className="text-gray-600">通過合理的退休規劃，確保您在退休後依然能夠維持理想的生活水平。</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">子女教育基金</h4>
                  <p className="text-gray-600">教育是對孩子最好的投資。確保孩子獲得最好的教育資源。</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-blue-600" />
                  運動心理/生活教練
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  運動不僅能夠強身健體，更能夠塑造堅強的意志和積極的心態。
                  作為前運動員和柔道教練，我可以為有需要的朋友提供運動心理指導和生活教練服務。
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-blue-600" />
                  企業/團隊培訓
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  將柔道的精神理念融入企業培訓，這是我的獨特優勢。
                  柔道強調的尊重、堅持、團隊合作等品質，正是現代企業所需要的核心價值觀。
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>如何在壓力下保持冷靜</li>
                  <li>如何從失敗中學習和成長</li>
                  <li>如何建立團隊合作精神</li>
                  <li>如何培養堅韌不拔的意志力</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">成功案例</h2>
            <p className="text-xl text-gray-600">客戶的信任是我最大的榮譽</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">家庭客戶</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">
                  "多得Wan為我們家庭設計的保險方案，當我先生意外受傷需要長期治療時，
                  我們沒有因為醫療費用而陷入經濟困境。Wan不僅是我們的保險顧問，更像是我們家庭的守護者。"
                </p>
                <p className="text-sm text-gray-500 mt-4">— 陳太太，香港</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">運動員客戶</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">
                  "作為一名職業運動員，我深知運動傷害的風險。Wan根據我的職業特點為我設計了專門的保障方案，
                  讓我可以專心訓練和比賽，不用擔心受傷後的經濟問題。"
                </p>
                <p className="text-sm text-gray-500 mt-4">— 李教練，深圳</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">企業客戶</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">
                  "Wan的企業培訓課程讓我們的團隊受益匪淺。他將柔道精神融入管理理念，
                  讓我們學會了如何在困難面前保持堅韌，如何在競爭中保持公平。"
                </p>
                <p className="text-sm text-gray-500 mt-4">— 王總經理，廣州</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">服務家庭</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">5億+</div>
                <div className="text-gray-600">保障金額（港元）</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-gray-600">客戶滿意度</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">95%</div>
                <div className="text-gray-600">續保率</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">媒體與榮譽</h2>
            <p className="text-xl text-gray-600">專業認可與成就展示</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle>運動成就</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>香港柔道公開賽冠軍</li>
                  <li>大灣區柔道邀請賽亞軍</li>
                  <li>多次代表香港參加國際比賽</li>
                  <li>柔道黑帶三段</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>行業榮譽</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>MDRT會員（百萬圓桌會議）</li>
                  <li>年度優秀保險規劃師</li>
                  <li>客戶服務卓越獎</li>
                  <li>大灣區傑出青年</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>專業資格</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>香港保險業監管局持牌人</li>
                  <li>註冊財務策劃師（CFP）</li>
                  <li>認證風險管理師</li>
                  <li>企業培訓師認證</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section id="insights" className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">內容專區</h2>
            <p className="text-xl text-gray-600">專業知識分享與生活感悟</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">為什麼年輕人更需要保險？</CardTitle>
                <CardDescription>保險財務知識</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  很多年輕人認為自己身體健康，不需要保險。但實際上，年輕時購買保險有很多優勢：
                  保費便宜、核保容易、保障期長。就像運動訓練一樣，越早開始，基礎越紮實。
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">柔道教會我的人生道理</CardTitle>
                <CardDescription>柔道運動精神</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  柔道的「柔」不是軟弱，而是以柔克剛的智慧。在人生和事業中，我們也需要這種智慧：
                  知道什麼時候堅持，什麼時候變通，什麼時候進攻，什麼時候防守。
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">大灣區跨境保險規劃三要點</CardTitle>
                <CardDescription>大灣區生活心得</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  在大灣區工作和生活，可以享受到兩地的優勢。跨境保險規劃需要注意：
                  了解兩地法規差異、選擇合適的保險公司和產品、做好稅務規劃。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">聯絡我</h2>
            <p className="text-xl text-gray-600">想傾下點保障自己同家人，或了解更多跨境理財？</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">聯絡方式</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span>+852 XXXX XXXX</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span>wan@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>服務地區：香港、深圳、廣州、大灣區其他城市</span>
                </div>
              </div>

              <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4">社交媒體</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  微信
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4" />
                  WhatsApp
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Facebook className="h-4 w-4" />
                  Facebook
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Instagram className="h-4 w-4" />
                  Instagram
                </Button>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>預約諮詢</CardTitle>
                  <CardDescription>
                    填寫以下表單，我會在24小時內與您聯絡，為您安排免費的初步諮詢。
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">姓名</label>
                      <Input placeholder="請輸入您的姓名" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">電話</label>
                      <Input placeholder="請輸入您的電話" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">電郵</label>
                    <Input type="email" placeholder="請輸入您的電郵地址" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">諮詢內容</label>
                    <Textarea placeholder="請描述您的需求或問題" rows={4} />
                  </div>
                  <div>
                    <label className="text-sm font-medium">偏好聯絡時間</label>
                    <Input placeholder="例如：工作日下午、週末上午" />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    提交諮詢
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">Wan</div>
            <p className="text-gray-400 mb-6">柔道教練 & 財務顧問 | 大灣區專業保險規劃</p>
            <p className="text-gray-400">
              © 2024 Wan. 版權所有 | 從運動場到財富規劃，我的人生一直拼搏！
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

