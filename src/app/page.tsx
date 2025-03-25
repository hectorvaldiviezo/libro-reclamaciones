import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ComplaintForm from "@/components/ComplaintForm";
import { MILLA_BASE } from "@/lib/config";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header heightToScroll={250} />
      <main>
        <Hero
          title="LIBRO DE RECLAMACIONES"
          subtitle=""
          description=""
          src={
            MILLA_BASE + process.env.NEXT_PUBLIC_HERO_IMAGE_URL
          }
          height="h-[400px]"
          gradient={true}
          complaint={true}
        />
        <ComplaintForm />
      </main>
      <Footer />
    </div>
  );
}
