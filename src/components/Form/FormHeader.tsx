import { useEffect, useState } from "react";
import FormHeaderImageOne from "../../assets/FormBanner1.jpg"
import FormHeaderImageTwo from "../../assets/FormBanner2.jpg"
import LOGO from "../../assets/LOGO.png"
import { useSearchParams } from "react-router-dom";

export const FormHeader = () => {
  const [searchParams] = useSearchParams();

  const [headerImage, setHeaderImage] = useState("");

  const photos = searchParams && searchParams.get("id");

  useEffect(() => {
    if (photos === "2") {
      setHeaderImage(FormHeaderImageTwo);
    } else {
        setHeaderImage(FormHeaderImageOne);
    }
  }, [photos]);

  return (
    <div className="h-[170px] w-full relative">
       
      <img src={headerImage} alt="" className="w-full object-fit rounded-[5px] h-[inherit]"/>
      <div className="h-[60px] w-[60px] bg-slate-500 rounded-[50%] shadow-sm absolute -top-[15%] transform -translate-x-1/2">
        <img src={LOGO} alt="" className="w-full object-fit rounded-[50%] h-[inherit]"/>
      </div>
    </div>
  );
};
