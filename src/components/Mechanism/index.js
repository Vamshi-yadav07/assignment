import NavBar from "../NavBar";
import Footer from "../Footer/Footer";
import Titlesection from "./Titlesection";
import DevelopmentStage from "./DevelopmentStage";
import ExperienceFuture from "./ExperienceFuture";
import Roadmap from "./Roadmap";

const SpendCraftTimeline = () => {
  return (
    <div className="min-h-max px-2 text-white  bg-[#0A0B32] absolute inset-0 -z-50">
      <NavBar />
      {/* title section */}
      <Titlesection />
      {/* development stages section */}
      <DevelopmentStage />
      {/* experience the future section */}
      <ExperienceFuture />
      {/* Roadmap */}
      <Roadmap />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default SpendCraftTimeline;
