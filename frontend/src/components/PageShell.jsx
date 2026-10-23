import { Link } from 'react-router-dom';
import CollegeBranding from './CollegeBranding';

// Shared top bar for public/marketing pages
export default function PageShell({ children, footer = true }) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col overflow-x-hidden px-4 pb-3 pt-5 sm:px-6 sm:pb-4 sm:pt-6">
      <header className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-3">
        <Link to="/" className="col-start-2 min-w-0">
          <CollegeBranding />
        </Link>
        <nav className="col-start-3 justify-self-end">
          <Link to="/team" className="btn-ghost px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm">Participants</Link>
        </nav>
      </header>

      <main className="flex-1 pb-8 pt-3 sm:pb-12 sm:pt-5">{children}</main>

      {footer && (
        <footer className="border-t border-[#333333] py-6 text-center text-xs text-[#A3A3A3]">
          Avishkar 5.0 Quiz Competition
        </footer>
      )}
    </div>
  );
}
