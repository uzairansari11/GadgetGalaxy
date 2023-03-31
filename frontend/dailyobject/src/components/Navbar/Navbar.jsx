import React from "react";
import "./navbar.css";
import { gift } from "./data";
import { Link } from "react-router-dom";
import { Box, Image } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      {/* Space for LOGO */}
      <Box>
        <Image src="" />
      </Box>
      <div className="bottom_cont">
        <ul id="bottom_category">
          {gift?.map((el) => (
            <div id="dropdown">
              <li key={el} id="dropbtn">
                <Link>{el.text}</Link>
              </li>

              <div id="dropcont">
                <div className="big_parent">
                  <div id="parent">
                    <Link>
                      <h2 className="q">{el.lists.title}</h2>
                    </Link>
                    {el.lists.Sidebar?.map((item) => (
                      <div key={item}>
                        <p className="hub">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="right_grid">
                    {el.lists.alldata?.map((divs) => (
                      <div key={divs.heading}>
                        <Link>

                          <h2 className="grid_head">{divs.heading}</h2>
                        </Link>
                        {divs.child?.map((fields) => (
                          <Link>
                            
                            <p className="hub" key={fields}>
                              {fields}
                            </p>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
      {/* Space for accounts */}
      <Box></Box>
    </>
  );
};

export default Navbar;
