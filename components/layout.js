import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col bg-primary">
      <div className="min-h-screen">
        <Header />
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
}
