import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <header className="bg-white py-4 sticky top-0 z-50 shadow-sm">
        <div className="container flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">NGO Landing</Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-foreground hover:text-secondary">Landing</Link>
            <Link href="#" className="text-foreground hover:text-secondary">Events</Link>
            <Link href="#" className="text-foreground hover:text-secondary">Contact</Link>
            <Link href="#" className="text-foreground hover:text-secondary">About</Link>
            <Link href="#" className="text-foreground hover:text-secondary">Blog</Link>
            <Link href="#" className="text-foreground hover:text-secondary">Volunteer</Link>
            <Link href="#" className="text-foreground hover:text-secondary">Home</Link>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="section-title">welcome to charity</h3>
            <h1 className="section-heading">Food for people, not for profit</h1>
            <p className="mb-8 text-lg">
              Praesent sapien lacus, molestie vitae arcu in, elementum congue justo. Aenean aliquam semper velit eu pretium.
              Suspendisse mattis luctus quam nec vehicula. Donec scelerisque tristique metus a vestibulum.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary">Know More</Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://web-assets.same.dev/1339845811/609523575.png"
              alt="NGO Hero Image"
              width={600}
              height={600}
              className="object-contain"
            />
            <div className="absolute top-12 right-0 bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <p className="mb-3 font-medium">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
              <Button className="btn-primary">Donate</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-8 rounded-xl bg-card shadow-md">
            <h4 className="text-xl font-bold mb-4">Education for Youth & Adults</h4>
            <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat.</p>
          </div>
          <div className="p-8 rounded-xl bg-card shadow-md">
            <h4 className="text-xl font-bold mb-4">Financial Support for the poor</h4>
            <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat.</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-primary">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-sm mb-2">About Us</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Our Mission& Vision</h2>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-white/90 mb-8">
              Praesent sapien lacus, molestie vitae arcu in, elementum congue justo. Aenean aliquam semper velit eu pretium.
              Suspendisse mattis luctus quam nec vehicula. Donec scelerisque tristique metus a vestibulum. Curabitur mattis
              eros lorem, finibus egestas augue aliquam et. Mauris a fringilla ligula. Suspendisse in elementum magna, ac
              volutpat quam. Maecenas interdum metus.
            </p>
            <Button className="bg-white text-primary hover:bg-white/90">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4">
              <Image
                src="https://web-assets.same.dev/4077292540/4189169414.png"
                alt="Medical Aid"
                width={64}
                height={64}
              />
            </div>
            <h3 className="text-xl font-bold mb-4">Medical Aid</h3>
            <p className="mb-4">Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat.</p>
            <Button variant="outline" className="text-secondary border-secondary hover:bg-secondary hover:text-white">Campaigns</Button>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4">
              <Image
                src="https://web-assets.same.dev/4145958763/3951678692.png"
                alt="Hunger Aid"
                width={64}
                height={64}
              />
            </div>
            <h3 className="text-xl font-bold mb-4">Hunger Aid</h3>
            <p className="mb-4">Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat.</p>
            <Button variant="outline" className="text-secondary border-secondary hover:bg-secondary hover:text-white">Campaigns</Button>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4">
              <Image
                src="https://web-assets.same.dev/4142933513/4095410264.png"
                alt="Education"
                width={64}
                height={64}
              />
            </div>
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <p className="mb-4">Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat.</p>
            <Button variant="outline" className="text-secondary border-secondary hover:bg-secondary hover:text-white">Campaigns</Button>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-lg">
            <h3 className="section-title">Our Causes</h3>
            <h2 className="section-heading">What We Do</h2>
            <p className="mb-6">
              Praesent sapien lacus, molestie vitae arcu in, elementum congue justo. Aenean aliquam semper velit eu pretium.
              Suspendisse mattis luctus quam nec vehicula. Donec scelerisque tristique metus a vestibulum.
            </p>
            <Button variant="outline" className="text-secondary border-secondary hover:bg-secondary hover:text-white">Click Here</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-white">N</div>
              <div>
                <h4 className="text-lg font-bold mb-2">Temporary shelter</h4>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-white">N</div>
              <div>
                <h4 className="text-lg font-bold mb-2">Affordable Meals</h4>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-white">N</div>
              <div>
                <h4 className="text-lg font-bold mb-2">Medical Pop Ups</h4>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-white">N</div>
              <div>
                <h4 className="text-lg font-bold mb-2">Detox Aid</h4>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-white">N</div>
              <div>
                <h4 className="text-lg font-bold mb-2">Adult Education</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fundraising Section */}
      <section className="py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <h3 className="section-title">Support Us</h3>
              <h2 className="section-heading">We've raised over $600 for homelessness</h2>
              <p className="mb-6">
                Praesent sapien lacus, molestie vitae arcu in, elementum congue justo. Aenean aliquam semper velit eu pretium.
                Suspendisse mattis luctus quam nec vehicula. Donec scelerisque tristique metus a vestibulum. Curabitur mattis
                eros lorem, finibus egestas augue aliquam et. Mauris a fringilla ligula. Suspendisse in elementum magna, ac
                volutpat quam. Maecenas interdum metus.
              </p>
              <Button className="btn-secondary">about us</Button>
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary text-white p-6 rounded-lg">
                <span className="text-sm uppercase">For Hunger</span>
                <div className="text-3xl font-bold mt-2">$375k+</div>
              </div>
              <div className="bg-[#42af74] text-white p-6 rounded-lg">
                <span className="text-sm uppercase">For Education</span>
                <div className="text-3xl font-bold mt-2">$250k+</div>
              </div>
              <div className="bg-secondary text-white p-6 rounded-lg col-span-1 md:col-span-2">
                <span className="text-sm uppercase">Total</span>
                <div className="text-3xl font-bold mt-2">$100k+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-4">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span>Email: <a href="mailto:hello@divingo.com" className="hover:underline">hello@divingo.com</a></span>
              <span className="mx-4">|</span>
              <span>Call Anytime: (235)-135-6213</span>
            </div>
            <div className="flex space-x-4">
              <Button className="bg-secondary text-white hover:bg-secondary/90">Browse Campaigns</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">Get Involved</Button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
