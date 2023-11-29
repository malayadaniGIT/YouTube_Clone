import React, { useContext } from "react";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";

const LeftNav = () => {
  const { selectedCategory, setSelectedCategory, mobileMenu } = useContext(Context);

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "home":
        return setSelectedCategory(name);
      case "menu":
        return false;
      default: 
        break;
    }
  };

  return (
    <div className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 ${!mobileMenu ? "hidden md:block" : ""}`}>
      <div className="flex px-5 flex-col">
        
        {categories.map((item) => (
          <React.Fragment key={item.name}>
            <LeftNavMenuItem
              className={`${selectedCategory === item.name ? "bg-white/[0.15]" : ""}`}
              text={item.type === "home" ? "Home" : item.name}
              icon={item.icon}
              action={() => {
                clickHandler(item.name, item.type);
              }}
            />
            {item.divider && <hr className='my-5 border-white/[0.2]' />}
          </React.Fragment>
        ))}

        <hr className='my-5 border-white/[0.2]' />

        <div className="text-white/[0.5] text-[13px]">
          Clone by: Malaya Ranjan Dani
        </div>

      </div>
    </div>
  );
};

export default LeftNav;
