import Helmet from "../components/Helmet";
import Slider from "../components/Slider/index";
import heroSliderData from "../assets/fake-data/hero-slider";

function Home() {
  return (
    <Helmet title="Trang chu">
      <Slider
        data={heroSliderData}
        control={true}
        auto={false}
        timeOutt={5000}
      />
    </Helmet>
  );
}

export default Home;
