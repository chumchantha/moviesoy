import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Row from "@/components/Row";
import Column from "@/components/Column";
import Modal from "@/components/Modal";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Banner />

      <section className="ml-4 ">
        {/* <Modal /> */}
        <Row />
        <Column label={"Khmer Dubbed"} />
        <Row />
        <Row />
        <Column label="KDrama" />
      </section>
    </main>
  );
}
