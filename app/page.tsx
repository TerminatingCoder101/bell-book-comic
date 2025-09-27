import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, MapPin, Phone, Clock, Star, Users, Coffee } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-purple-800 via-blue-800 to-indigo-900 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-yellow-400" />
              <span className="text-2xl font-bold text-white font-playfair">Bell Book and Comic</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-white hover:text-yellow-400 transition-colors font-medium font-merriweather"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-yellow-400 transition-colors font-medium font-merriweather"
              >
                About
              </Link>
              <div className="flex items-center space-x-2 text-white font-merriweather">
                <Phone className="h-4 w-4" />
                <span>(937) 643-9006</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Book Background */}
      <section
        className="relative py-20 px-4 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/Book.jpg?height=800&width=1200&text=Vintage+Books+Library')`,
        }}
      >
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-playfair">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Bell Book and Comic
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto font-merriweather font-light">
            Your neighborhood destination for books, comics, and literary adventures right here in Dayton, Ohio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-white bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
              <MapPin className="h-5 w-5 text-red-400" />
              <span className="font-medium font-merriweather">458 Patterson Rd, Dayton, OH 45419</span>
            </div>
            <div className="flex items-center space-x-2 text-white bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
              <Phone className="h-5 w-5 text-green-400" />
              <span className="font-medium font-merriweather">(937) 643-9006</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections with Book Backgrounds */}
      <section
        className="py-16 px-4 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/placeholder.svg?height=600&width=1200&text=Open+Books+Stack')`,
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 font-playfair">
            Discover Your Next Adventure
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Books Section */}
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-amber-100/90 to-orange-100/90 border-2 border-amber-200 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 font-playfair">Books Galore</CardTitle>
                <CardDescription className="text-gray-600 font-merriweather">
                  From bestsellers to hidden gems, fiction to non-fiction
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-gray-700 font-merriweather">New releases weekly</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-gray-700 font-merriweather">Rare and collectible books</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-gray-700 font-merriweather">Special orders available</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comics Section */}
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-blue-100/90 to-purple-100/90 border-2 border-blue-200 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <div className="text-2xl font-bold text-white">💥</div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 font-playfair">Comic Universe</CardTitle>
                <CardDescription className="text-gray-600 font-merriweather">
                  Marvel, DC, indie comics, and graphic novels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-gray-700 font-merriweather">Latest issues every Wednesday</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-gray-700 font-merriweather">Vintage comic collection</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-gray-700 font-merriweather">Pull box service</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Community Section */}
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-green-100/90 to-teal-100/90 border-2 border-green-200 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 font-playfair">Community Hub</CardTitle>
                <CardDescription className="text-gray-600 font-merriweather">
                  Events, book clubs, and reading communities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-gray-700 font-merriweather">Monthly book club meetings</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-gray-700 font-merriweather">Author signings & events</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-gray-700 font-merriweather">Reading recommendations</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Store Hours & Info with Bookshelf Background */}
      <section
        className="py-16 px-4 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 27, 75, 0.95), rgba(30, 27, 75, 0.95)), url('/placeholder.svg?height=600&width=1200&text=Bookshelf+Library+Interior')`,
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-8 font-playfair">Visit Us Today</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-center space-x-2 font-playfair">
                  <Clock className="h-6 w-6" />
                  <span>Store Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white space-y-2 font-merriweather">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>11:00 AM - 6:00 PM</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-center space-x-2 font-playfair">
                  <Coffee className="h-6 w-6" />
                  <span>Special Features</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white space-y-2 font-merriweather">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span>Cozy reading nooks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span>Free Wi-Fi</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span>Gift wrapping service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span>Friendly, knowledgeable staff</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Link href="/about">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 text-lg font-merriweather"
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="h-6 w-6 text-yellow-400" />
            <span className="text-xl font-bold font-playfair">Bell Book and Comic</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-gray-300 font-merriweather">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>458 Patterson Rd, Dayton, OH 45419</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>(937) 643-9006</span>
            </div>
          </div>
          <p className="mt-4 text-gray-400 font-merriweather">
            © 2025 Bell Book and Comic. Your neighborhood bookstore and comic shop.
          </p>
        </div>
      </footer>
    </div>
  )
}
