import ScrollTop from "@/views/components/ScrollTop";
import ScrollToTop from "@/views/components/ScrollToTop";
import Home from "@/views/Home";

export default function Page() {
  return (
    <div className="App">
      <ScrollToTop />
      <Home />
      <ScrollTop />
    </div>
  );
}
