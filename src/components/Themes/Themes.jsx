import Security from "../../assets/themes/theme-security.png";
import Web3 from "../../assets/themes/theme-web-3.png";
import AI_ML from "../../assets/themes/theme-ai-ml.png";
import Innovation from "../../assets/themes/theme-innovation.png";
import Finance from "../../assets/themes/theme-finance.png";
import DevProductivity from "../../assets/themes/theme-dev-productivity.png";
import Inclusivity from "../../assets/themes/theme-inclusivity.png";
import AR_VR from "../../assets/themes/theme-ar-vr.png";

function Themes() {
  const themes = [
    {
      id: 0,
      name: "Security and Safety",
      img: Security,
    },
    {
      id: 1,
      name: "Finance",
      img: Finance,
    },
    {
      id: 2,
      name: "Open Innovation",
      img: Innovation,
    },
    {
      id: 3,
      name: "Web 3",
      img: Web3,
    },
    {
      id: 4,
      name: "Inclusivity and Representation",
      img: Inclusivity,
    },
    {
      id: 5,
      name: "AR/VR",
      img: AR_VR,
    },
    {
      id: 6,
      name: "Developer Productivity",
      img: DevProductivity,
    },
    {
      id: 7,
      name: "AI/ML",
      img: AI_ML,
    },
  ];

  return (
    <>
      <section
        id="Themes"
        className="container flex flex-col mx-auto my-8 max-w-[85%] relative"
      >
        <h1 className="font-karrera text-primary text-center tracking-widest font-normal text-5xl md:text-3xl pb-10 md:py-6 ">
          THEMES
        </h1>
        <div className="grid grid-cols-4 py-6 md:grid-cols-2 gap-x-16 gap-y-12 md:gap-6 mx-auto">
          {themes.map(({ id, name, img }) => (
            <div className="img-container" key={id}>
              <img
                src={img}
                alt={name}
                className="img max-h-[350px] p-0 ease-in duration-300 hover:scale-110  "
                style={{
                  WebkitFilter: 'drop-shadow(5px 5px 5px #222)',
                  filter: 'drop-shadow(5px 5px 5px #222)',
                }}
                
                onClick={() => {}}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Themes;
