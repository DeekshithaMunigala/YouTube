import ButtonsContainer from "./ButtonsContainer";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="lg:ml-56 sm:ml-48 mt-5 p-1 w-full flex flex-col justify-center">
      <ButtonsContainer />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
