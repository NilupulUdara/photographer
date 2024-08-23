import { Slider } from "./components/Slider";
import { Me } from "./components/Me";
import { MyGallery } from "./components/MyGallery";
import { Hello } from "./components/Hello";
import { useTitle } from "../../hooks/useTitle";

export const Home = () => {
  useTitle("Home");

  return (
    <div>
      <Slider />
      <Me />
      <MyGallery />
      <Hello />
    </div>
  )
}
