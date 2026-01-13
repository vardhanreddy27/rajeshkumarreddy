import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { BUSINESS, COURTS, SOCIALS } from "@/lib/site-data";
import { IoCallOutline, IoCloseOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineScale,
  HiOutlinePhone,
  HiOutlineBookOpen,
} from "react-icons/hi2";

/* SERVICES – MODIFIED AS PER YOUR FATHER’S REAL EXPERTISE */
const SERVICES = {
  "Civil Law": [
    { label: "Civil Suits & Appeals", href: "/civil-suits-kadapa" },
    { label: "Injunction & Declaratory Suits", href: "/injunction-cases-kadapa" },
    { label: "Partition Suits", href: "/partition-suits-kadapa" },
    { label: "Property Disputes", href: "/property-disputes-kadapa" },
    { label: "Rent Control Matters", href: "/rent-control-kadapa" },
    { label: "Execution Petitions", href: "/execution-petitions-kadapa" },
  ],
  "Criminal Law": [
    { label: "Sessions Trials", href: "/sessions-trials-kadapa" },
    { label: "Bail & Anticipatory Bail", href: "/bail-lawyer-kadapa" },
    { label: "Criminal Appeals", href: "/criminal-appeals-kadapa" },
    { label: "NDPS Cases", href: "/ndps-lawyer-kadapa" },
    { label: "IPC Offences (498A / 307 / 376)", href: "/ipc-offences-kadapa" },
    { label: "Criminal Revisions", href: "/criminal-revisions-kadapa" },
  ],
  "Family Court": [
    { label: "Divorce Proceedings", href: "/divorce-lawyer-kadapa" },
    { label: "Maintenance & Alimony", href: "/maintenance-kadapa" },
    { label: "Child Custody", href: "/child-custody-kadapa" },
    { label: "Domestic Violence Cases", href: "/domestic-violence-kadapa" },
    { label: "Restitution of Conjugal Rights", href: "/rcr-kadapa" },
  ],
  "Property & Revenue": [
    { label: "Land Disputes", href: "/land-disputes-kadapa" },
    { label: "Title Verification", href: "/title-verification-kadapa" },
    { label: "Sale Deed Documentation", href: "/sale-deed-kadapa" },
    { label: "Succession & Inheritance", href: "/succession-kadapa" },
    { label: "Revenue Court Matters", href: "/revenue-cases-kadapa" },
  ],
};

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* SEO – CLEAN & BAR-COUNCIL SAFE */}
      <Head>
        <title>
          Rajesh Kumar Reddy – Senior Advocate, Kadapa | Civil & Criminal Lawyer
        </title>
        <meta
          name="description"
          content="Rajesh Kumar Reddy is a Senior Advocate in Kadapa with 36+ years of practice. Former President, Kadapa District Bar Association. Practicing Civil, Criminal, Family & Property matters."
        />
      </Head>

      <div className="min-h-screen flex flex-col bg-white">
        {/* HEADER */}
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
          {/* ✅ DESKTOP CONTAINER: SAME AS YOUR CODE */}
          <div className="container">
            <div className="flex items-center justify-between h-16">
              {/* BRAND */}
              <Link href="/" className="flex flex-col">
                <span className="text-lg font-bold text-gray-900">
                  Rajesh Kumar Reddy
                </span>
                <span className="text-xs text-gray-600">
                  Senior Advocate, Kadapa
                </span>
              </Link>

              {/* DESKTOP NAV (UNCHANGED) */}
              <nav className="hidden md:flex items-center gap-10 text-sm font-semibold text-slate-700">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>

                {Object.entries(SERVICES).map(([service, items]) => (
                  <div key={service} className="relative group ">
                    <span className="cursor-pointer text-slate-700 hover:text-slate-900">
                      {service}
                    </span>

                    <div className="absolute left-0 top-full mt-3 hidden group-hover:block rounded-xl bg-white border border-slate-200 shadow-xl min-w-[260px]">
                      <ul className="py-2">
                        {items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="block px-4 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}

                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
              </nav>

              {/* CALL & WHATSAPP (UNCHANGED) */}
              <div className="hidden md:flex items-center gap-3">
                <a
                  href={`https://wa.me/${BUSINESS.phoneTel.replace("+", "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-1.5 cta-primary bg-green-600 text-white text-sm flex items-center"
                >
                  <FaWhatsapp className="mx-1 text-xl" /> WhatsApp
                </a>
                <a
                  href={`tel:${BUSINESS.phoneTel}`}
                  className="px-4 py-1.5 cta-primary bg-gray-900 text-white text-sm flex items-center"
                >
                  <IoCallOutline className="mx-1 text-lg" />
                  {BUSINESS.phone}
                </a>
              </div>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setMenuOpen(true)}
                className="md:hidden rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700"
              >
                Menu
              </button>
            </div>
          </div>
        </header>

        {/* ✅ MOBILE OVERLAY MENU (ONLY THIS IS NEW) */}
        {menuOpen && (
          <div className="fixed inset-0 z-[999] bg-white md:hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-5">
              <span className="text-lg font-semibold text-slate-900">Menu</span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <IoCloseOutline className="text-3xl text-slate-700" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="px-6 mt-8 space-y-8">
              <MobileNavItem
                icon={<HiOutlineHome className="text-2xl" />}
                label="Home"
                href="/"
                onClose={() => setMenuOpen(false)}
              />
              <MobileNavItem
                icon={<HiOutlineUser className="text-2xl" />}
                label="About"
                href="/about"
                onClose={() => setMenuOpen(false)}
              />

              {/* Services section (kept relevant) */}
              <div>
                <div className="flex items-center gap-3 text-2xl font-semibold text-slate-900 mb-4">
                  <HiOutlineScale className="text-2xl" />
                  Services
                </div>

                {/* Main services only (simple + senior-friendly) */}
                <div className="ml-6 space-y-3 text-lg text-slate-800">
                  {Object.keys(SERVICES).map((service) => (
                    <Link
                      key={service}
                      href="/services"
                      onClick={() => setMenuOpen(false)}
                      className="block"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              </div>

              <MobileNavItem
                icon={<HiOutlineBookOpen className="text-2xl" />}
                label="Blog"
                href="/blog"
                onClose={() => setMenuOpen(false)}
              />
              <MobileNavItem
                icon={<HiOutlinePhone className="text-2xl" />}
                label="Contact"
                href="/contact"
                onClose={() => setMenuOpen(false)}
              />
            </nav>

            {/* Bottom CTA */}
            <div className="absolute bottom-6 left-6 right-6 flex gap-3">
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                className="flex-1 text-center py-3 rounded-lg bg-slate-900 text-white text-lg"
              >
                Call
              </a>
              <a
                href={`https://wa.me/${BUSINESS.phoneTel.replace("+", "")}`}
                className="flex-1 text-center py-3 rounded-lg bg-emerald-600 text-white text-lg"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}

        {/* MAIN */}
        <main className="flex-1">{children}</main>

        {/* FOOTER */}
        <footer className="bg-slate-900 text-slate-200 ">
          <div className="container py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div>
              <h1 className="font-bold mb-2">
                Rajesh Kumar Reddy – Senior Advocate
              </h1>
              <p>{BUSINESS.address}</p>
              <p className="mt-1">
                Phone:{" "}
                <a href={`tel:${BUSINESS.phoneTel}`} className="underline">
                  {BUSINESS.phone}
                </a>
              </p>
              <p>Email: {BUSINESS.email}</p>
            </div>

            <div>
              <p className="font-semibold mb-2">Courts Practiced</p>
            <ul className="grid grid-cols-2 gap-1">
              {[
                "Kadapa",
                "Pulivendula",
                "Jammalamadugu",
                "Mydukur",
                "Kamalapuram",
                "Sidhout",
                "Nandalur",
                "Railway Kodur",
                "Rayachoty",
                "Proddatur",
              ].map((court) => (
                <li key={court}>{court}</li>
              ))}
            </ul>
            </div>

            <div>
              <p className="font-semibold mb-2">Connect</p>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                {SOCIALS.map((s) => {
                  const icons = {
                    Instagram: <FaInstagram />,
                    Facebook: <FaFacebook />,
                    YouTube: <FaYoutube />,
                    X: <FaXTwitter />,
                    Twitter: <FaXTwitter />,
                    LinkedIn: <FaLinkedin />,
                  };

                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-100 hover:text-white"
                    >
                      {icons[s.name]}
                      {s.name === "X" ? "Twitter" : s.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 py-3 text-center text-xs">
            Senior Advocate, Kadapa | Civil • Criminal • Family • Property Law
          </div>
        </footer>
        <div className="sr-only">
          Rajesh Kumar Reddy Advocate Office is a trusted advocate in Kadapa.
          People searching for the best lawyer in Kadapa, top lawyer in Kadapa,
          best advocate in Kadapa, top advocate in Kadapa, best civil lawyer in
          Kadapa, or best criminal lawyer in Kadapa can contact the office
          beside Kadapa District Court in YSR Kadapa District, Andhra Pradesh.
        </div>
      </div>
    </>
  );
}

function MobileNavItem({ icon, label, href, onClose }) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className="flex items-center justify-between text-2xl font-medium text-gray-900 border-b border-gray-400 pb-4"
    >
      <span className="flex items-center gap-3">
        {icon} {label}
      </span>
      <FiArrowUpRight className="text-xl" />
    </Link>
  );
}
