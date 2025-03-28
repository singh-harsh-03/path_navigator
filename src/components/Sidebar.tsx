//import logo from "../assets/img/pathpal-logo.svg";
import { FiChevronRight } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import {
  MapDataContextType,
  NavigationContextType,
  ObjectItem,
} from "@/utils/types";
import { MapDataContext, NavigationContext } from "../pages/Map";

import { navigateToObject } from "@/utils/navigationHelper";
import { useLocation, useSearchParams } from "react-router-dom";

interface ParsedObjects {
  [key: string]: {
    len: number;
    results: ObjectItem[];
  };
}

function Sidebar() {
  const { navigation, setNavigation, setIsEditMode } = useContext(
    NavigationContext
  ) as NavigationContextType;
  const { objects } = useContext(MapDataContext) as MapDataContextType;
  const [parsedObjects, setParsedObjects] = useState<ParsedObjects>({});
  const [searchParams] = useSearchParams();
  const location = useLocation();
  //const [isRotating, setIsRotating] = useState(false);
  useEffect(() => {
    const groupedObjects = () => {
      const data: ParsedObjects = {};
      objects.forEach((object) => {
        const firstLetter = object.name.charAt(0).toUpperCase();
        if (!data[firstLetter]) {
          data[firstLetter] = {
            len: 0,
            results: [],
          };
        }
        data[firstLetter].results.push(object);
        data[firstLetter].len += 1;
      });
      setParsedObjects(data);
    };
    groupedObjects();
  }, [objects]);

  function handleObjectNavigation(selectedObjectName: string) {
    const object = objects.find((obj) => obj.name === selectedObjectName);
    setIsEditMode(false);
    if (!object) return;
    console.log(object);
    navigateToObject(object.name, navigation, setNavigation);
  }

  // Automatically handle navigation when the destination changes in the URL
  useEffect(() => {
    const destination = searchParams.get("destination");
    console.log("Destination from URL:", destination);
    if (destination) {
      handleObjectNavigation(destination); // Trigger navigation logic
    }
  }, [location]); // Trigger when searchParams changes
  return (
    <aside className="flex flex-col rounded-none w-[35rem] h-screen p-3 bg-white shadow-xl shadow-gray-200 -translate-x-full transform transition-transform duration-150 ease-in lg:translate-x-0 lg:shadow-md ">
      <div className="overflow-auto h-full">
        {Object.keys(parsedObjects)
          .sort()
          .map((letter, index) => (
            <div key={index} className="mb-4">
              <header className="p-2">
                <h2 className="text-2xl font-bold">
                  {letter}
                  <span className="ml-2 text-sm font-medium text-gray-900">
                    - {parsedObjects[letter].len}{" "}
                    {parsedObjects[letter].len === 1 ? "Result" : "Results"}
                  </span>
                </h2>
              </header>
              <div className="flex flex-col ">
                {parsedObjects[letter].results.map((item) => (
                  <div
                    key={item.id?.toString()}
                    data-product={item.name}
                    className="flex bg-[#f4faff] m-1 px-4 py-2 shadow-sm rounded-md cursor-pointer h-auto hover:bg-[#e4f2ff]"
                    onClick={() => handleObjectNavigation(item.name)}
                  >
                    <div className="m-1">
                      <p className="text-xs 2xl:text-sm font-semibold">
                        {item.name}
                      </p>
                      <p className="text-xs 2xl:text-sm  text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                    <div className="center ml-auto h-auto center text-xl text-blue-300">
                      <FiChevronRight />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </aside>
  );
}
export default Sidebar;
