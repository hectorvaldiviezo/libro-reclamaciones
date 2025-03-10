export default function Footer() {
  const year = new Date().getFullYear();
  const company = process.env.NEXT_PUBLIC_COMPANY_REASON_NAME;

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container max-w-screen-xl flex flex-col gap-2 mx-auto px-4 text-start">
        <p className="text-center text-xs md:text-sm">
          &copy; {year} {company}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
