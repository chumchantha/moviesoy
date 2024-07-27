import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Row from "@/components/Row";
import Column from "@/components/Column";
import Modal from "@/components/Modal";

export default function Home() {
  return (
    <main className="relative">
      <Banner />

      <section className="ml-4 ">
        {/* <Modal /> */}
        <Row />
        <Column label={"Khmer Dubbed"} />
        <Row />
        <Row />
        <Column label="KDrama" />
      </section>

      <Footer />
    </main>
  );
}
