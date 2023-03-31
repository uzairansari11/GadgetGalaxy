import React from "react";
import { TextInput, ActionIcon, useMantineTheme } from "@mantine/core";
// import { IconSearch, IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
import { CiSearch } from "react-icons/ci";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import "./Style.css";
import Footer from "../../components/Footer/Footer";
import { NotFoundImage } from "../../components/404/404";
import  Navbar  from "../../components/Navbar/Navbar";

const Search = (props) => {
    const theme = useMantineTheme();

    return (
        <div className="search_main">
            <Navbar />
            <h1>Search Products</h1>
            <div className="search_tile">
                <TextInput
                    icon={<CiSearch size="1.1rem" stroke={1.5} />}
                    radius="xl"
                    size="md"
                    rightSection={
                        <ActionIcon
                            size={32}
                            radius="xl"
                            color={theme.primaryColor}
                            variant="filled">
                            {theme.dir === "ltr" ? (
                                <VscArrowRight size="1.1rem" stroke={1.5} />
                            ) : (
                                <VscArrowLeft size="1.1rem" stroke={1.5} />
                            )}
                        </ActionIcon>
                    }
                    placeholder="Search Products"
                    rightSectionWidth={42}
                    {...props}
                />
            </div>
            <div className="search_result">
                <NotFoundImage />
            </div>
            <Footer />
        </div>
    );
};

export default Search;
