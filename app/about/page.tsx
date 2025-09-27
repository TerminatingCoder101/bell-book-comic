import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, MapPin, Phone, Heart, Users, Award, Clock } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-purple-800 via-blue-800 to-indigo-900 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-yellow-400" />
              <span className="text-2xl font-bold text-white font-playfair">Bell Book and Comic</span>
            </div>s
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

      {/* Hero Section with Antique Books Background */}
      <section
        className="relative py-20 px-4 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/AboutUs.jpg?height=600&width=1200&text=Antique+Books+Leather+Bound')`,
        }}
      >
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-playfair">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Story</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 font-merriweather font-light">
            More than just a bookstore - we're your literary community in the heart of Dayton
          </p>
        </div>
      </section>

      {/* Main Story Section with Reading Background */}
      <section
        className="py-16 px-4 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('/placeholder.svg?height=800&width=1200&text=Cozy+Reading+Corner+Books')`,
        }}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800 font-playfair">Welcome to Bell Book and Comic</h2>
              <p className="text-lg text-gray-700 leading-relaxed font-merriweather font-light">
                Nestled in the vibrant community of Dayton, Ohio, Bell Book and Comic has been serving book lovers and
                comic enthusiasts for years. We believe that every story has the power to transport, inspire, and
                connect us to something greater.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-merriweather font-light">
                Our carefully curated selection spans from the latest bestsellers to hidden literary gems, from classic
                comics to cutting-edge graphic novels. Whether you're seeking your next great read or hunting for that
                rare issue, we're here to help you discover your next adventure.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-200 to-blue-200 rounded-2xl p-8 transform rotate-3 shadow-lg">
                <div className="bg-white rounded-xl p-6 transform -rotate-3">
                  <BookOpen className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 text-center mb-2 font-playfair">Since Day One</h3>
                  <p className="text-gray-600 text-center font-merriweather">
                    Committed to fostering a love of reading in our community
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-to-br from-red-100/90 to-pink-100/90 border-2 border-red-200 hover:shadow-lg transition-shadow backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 font-playfair">Passion for Books</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center font-merriweather font-light">
                  Every book in our store is chosen with care. We're passionate readers ourselves and love sharing our
                  enthusiasm with fellow book lovers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-100/90 to-emerald-100/90 border-2 border-green-200 hover:shadow-lg transition-shadow backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 font-playfair">Community First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center font-merriweather font-light">
                  We're more than a store - we're a gathering place for readers, writers, and dreamers. Our community is
                  at the heart of everything we do.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-100/90 to-indigo-100/90 border-2 border-blue-200 hover:shadow-lg transition-shadow backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 font-playfair">Quality Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center font-merriweather font-light">
                  Our knowledgeable staff is always ready to help you find the perfect book, whether it's for yourself
                  or as a gift for someone special.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* What We Offer Section with Comic Background */}
          <div
            className="rounded-3xl p-8 md:p-12 text-white relative bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(30, 27, 75, 0.95), rgba(30, 27, 75, 0.95)), url('/placeholder.svg?height=600&width=1000&text=Comic+Books+Collection')`,
            }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 font-playfair">What Makes Us Special</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-yellow-400 font-playfair">Our Book Collection</h3>
                <ul className="space-y-3 font-merriweather">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Extensive fiction and non-fiction selection</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Children's books and young adult novels</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Rare and collectible books</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Local authors and regional interest</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-yellow-400 font-playfair">Comic & Graphic Novels</h3>
                <ul className="space-y-3 font-merriweather">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Latest Marvel and DC releases</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Independent and alternative comics</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Vintage comic collection</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Pull box subscription service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Library Background */}
      <section
        className="py-16 px-4 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 248, 220, 0.95), rgba(255, 248, 220, 0.95)), url('/placeholder.svg?height=600&width=1200&text=Beautiful+Library+Interior')`,
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 font-playfair">Visit Our Store</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/90 shadow-lg backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2 text-gray-800 font-playfair">
                  <MapPin className="h-6 w-6 text-red-500" />
                  <span>Location & Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center font-merriweather">
                  <p className="font-semibold text-gray-800">458 Patterson Rd</p>
                  <p className="text-gray-600">Dayton, OH 45419</p>
                  <p className="font-semibold text-gray-800 mt-2">(937) 643-9006</p>
                </div>
                <div className="border-t pt-4 font-merriweather">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Mon-Fri:</span>
                    <span>10:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Saturday:</span>
                    <span>9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Sunday:</span>
                    <span>11:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 shadow-lg backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2 text-gray-800 font-playfair">
                  <Users className="h-6 w-6 text-blue-500" />
                  <span>Community Events</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 font-merriweather">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Monthly Book Club - First Saturday</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Author Readings - Quarterly</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Comic Release Parties - Monthly</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Children's Story Time - Saturdays</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 text-center mt-4 font-merriweather">
                  Call us for event details and upcoming schedules!
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Link href="/">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-3 text-lg font-merriweather"
              >
                Back to Home
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
            © 2024 Bell Book and Comic. Your neighborhood bookstore and comic shop.
          </p>
        </div>
      </footer>
    </div>
  )
}
