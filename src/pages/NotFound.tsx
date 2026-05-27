import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl">404</h1>
        <h2 className="mt-4 text-xl">Strona nie została znaleziona</h2>
        <p className="mt-2 text-sm text-muted-foreground">Lorem ipsum — taki adres nie istnieje.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-foreground px-5 py-2.5 text-sm text-background">
          Wróć na stronę główną
        </Link>
      </div>
    </div>
  );
}
