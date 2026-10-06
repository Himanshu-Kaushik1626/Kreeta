import Link from "next/link";
import { HeartHandshake, Phone, Home, Calendar, Search } from "lucide-react";
import { PHONE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-bg-surface py-16 px-4">
      <div className="max-w-md w-full text-center bg-white rounded-[var(--radius-xl)] p-8 border border-border-light shadow-card">
        <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center text-primary mx-auto mb-4">
          <HeartHandshake className="w-8 h-8" />
        </div>

        <div className="text-4xl font-extrabold text-primary font-[family-name:var(--font-heading)] mb-2">
          404
        </div>
        <h1 className="text-xl font-bold text-text mb-2 font-[family-name:var(--font-heading)]">
          Page Not Found
        </h1>
        <p className="text-xs text-text-secondary mb-6 leading-relaxed">
          The page you are looking for might have been moved or doesn't exist. But our healthcare team is always right here to assist you.
        </p>

        <div className="flex flex-col gap-2.5 mb-6">
          <Link href="/">
            <Button variant="primary" size="md" className="w-full">
              <Home className="w-4 h-4 mr-2" /> Back to Homepage
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" size="md" className="w-full">
              <Search className="w-4 h-4 mr-2" /> Browse Healthcare Services
            </Button>
          </Link>
          <Link href="/booking">
            <Button variant="outline" size="md" className="w-full">
              <Calendar className="w-4 h-4 mr-2" /> Book Home Care Now
            </Button>
          </Link>
        </div>

        <div className="pt-4 border-t border-border-light">
          <div className="text-xs text-text-muted mb-2">Need immediate assistance?</div>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
          >
            <Phone className="w-3.5 h-3.5 fill-primary" /> Call 24x7 Helpline: {PHONE}
          </a>
        </div>
      </div>
    </div>
  );
}
