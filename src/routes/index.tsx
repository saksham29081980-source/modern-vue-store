import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShoppingCart,
  User,
  Menu,
  X,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  ArrowRight,
  Star,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Lumina | Modern Lifestyle Store" },
      {
        name: "description",
        content:
          "Discover curated watches, phones, and lifestyle accessories at Lumina. Clean design, quality products, effortless shopping.",
      },
      { property: "og:title", content: "Lumina | Modern Lifestyle Store" },
      {
        property: "og:description",
        content:
          "Discover curated watches, phones, and lifestyle accessories at Lumina.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const products = {
  watches: [
    {
      id: 1,
      name: "Minimal Chrono",
      price: 149,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Classic Steel",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600&q=80",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Sport Diver",
      price: 249,
      image:
        "https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&w=600&q=80",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Heritage Gold",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1619134778701-701fd3d923b9?auto=format&fit=crop&w=600&q=80",
      rating: 4.9,
    },
  ],
  phones: [
    {
      id: 5,
      name: "Slim Phone 12",
      price: 699,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
      rating: 4.6,
    },
    {
      id: 6,
      name: "Pro Pixel 7",
      price: 899,
      image:
        "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=600&q=80",
      rating: 4.8,
    },
    {
      id: 7,
      name: "Fold Air",
      price: 1199,
      image:
        "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80",
      rating: 4.7,
    },
    {
      id: 8,
      name: "Compact Mini",
      price: 499,
      image:
        "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=600&q=80",
      rating: 4.5,
    },
  ],
  accessories: [
    {
      id: 9,
      name: "Leather Strap",
      price: 39,
      image:
        "https://images.unsplash.com/photo-1616353329437-64eb81bb2011?auto=format&fit=crop&w=600&q=80",
      rating: 4.7,
    },
    {
      id: 10,
      name: "Wireless Buds",
      price: 129,
      image:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
      rating: 4.8,
    },
    {
      id: 11,
      name: "Canvas Tote",
      price: 59,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
      rating: 4.6,
    },
    {
      id: 12,
      name: "Travel Wallet",
      price: 79,
      image:
        "https://images.unsplash.com/photo-1627123424574-181ce5171c98?auto=format&fit=crop&w=600&q=80",
      rating: 4.9,
    },
  ],
};

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold tracking-tight text-foreground">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            L
          </span>
          Lumina
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button
            aria-label="Cart"
            className="relative grid h-10 w-10 place-items-center rounded-full text-foreground transition-colors hover:bg-accent"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute right-0 top-0 grid h-5 w-5 place-items-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                {cartCount}
              </span>
            )}
          </button>
          <button className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]">
            <User className="h-4 w-4" />
            Login
          </button>
        </div>

        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="grid h-10 w-10 place-items-center rounded-full hover:bg-accent md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/60 px-4 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <button className="mt-2 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground">
              <User className="h-4 w-4" />
              Login
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Curated lifestyle essentials
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Modern products for
            <span className="text-primary"> everyday life</span>.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Discover a clean selection of watches, phones, and accessories designed
            to fit seamlessly into your routine.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#products"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Shop now
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-8 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="mb-2 flex items-center gap-1 text-xs font-medium text-amber-500">
          <Star className="h-3.5 w-3.5 fill-current" />
          <span>{product.rating}</span>
        </div>
        <h3 className="text-base font-semibold text-card-foreground sm:text-lg">
          {product.name}
        </h3>
        <p className="mt-1 text-lg font-medium text-foreground">${product.price}</p>
        <button className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-full bg-secondary text-sm font-medium text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </article>
  );
}

function ProductSection({
  title,
  items,
  id,
}: {
  title: string;
  items: Product[];
  id?: string;
}) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Collection
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {title}
            </h2>
          </div>
          <a
            href="#"
            className="hidden text-sm font-medium text-primary hover:underline sm:block"
          >
            View all
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-y border-border/60 bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              About us
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Thoughtfully chosen, beautifully made.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Lumina brings together a tight edit of watches, phones, and
              everyday accessories. We prioritize clean design, honest pricing,
              and a shopping experience that feels effortless from start to
              finish.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-border bg-background p-6 text-center">
              <p className="text-3xl font-semibold text-foreground">200+</p>
              <p className="mt-1 text-sm text-muted-foreground">Products</p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6 text-center">
              <p className="text-3xl font-semibold text-foreground">15k</p>
              <p className="mt-1 text-sm text-muted-foreground">Happy customers</p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6 text-center">
              <p className="text-3xl font-semibold text-foreground">24h</p>
              <p className="mt-1 text-sm text-muted-foreground">Fast shipping</p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6 text-center">
              <p className="text-3xl font-semibold text-foreground">4.9</p>
              <p className="mt-1 text-sm text-muted-foreground">Average rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: "Free shipping",
      description: "On all orders over $50, delivered to your door.",
    },
    {
      title: "Secure checkout",
      description: "Encrypted payments and trusted payment providers.",
    },
    {
      title: "Easy returns",
      description: "30-day hassle-free returns on every purchase.",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <h3 className="text-lg font-semibold text-card-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const socials = [
    { label: "Instagram", icon: Instagram, href: "#" },
    { label: "Facebook", icon: Facebook, href: "#" },
    { label: "X / Twitter", icon: Twitter, href: "#" },
    { label: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  return (
    <footer id="contact" className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2 text-xl font-semibold tracking-tight text-foreground">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
                L
              </span>
              Lumina
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Modern essentials, curated with care for everyday life.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Shop
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Watches
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Phones
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="transition-colors hover:text-foreground">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-foreground">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h4>
            <p className="mt-4 text-sm text-muted-foreground">
              Email:{" "}
              <a
                href="mailto:kunalpareta123@gmail.com"
                className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
              >
                kunalpareta123@gmail.com
              </a>
            </p>
            <div className="mt-4 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lumina. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed with simplicity in mind.
          </p>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <div id="products">
          <ProductSection title="Watches" items={products.watches} />
          <ProductSection title="Phones" items={products.phones} />
          <ProductSection title="Accessories" items={products.accessories} />
        </div>
        <About />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
