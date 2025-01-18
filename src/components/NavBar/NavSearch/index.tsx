import { IoSearch } from "react-icons/io5";
import Input from "./../../Input";
import { useState } from "react";

const ids = {
    navSearchInput: "nav-search-input",
    navSearchIcon: "nav-search-icon",
}

const classes = {
    navSearch: "nav-search",
}

const NavSearch = () => {
    const [input, setInput] = useState<string>("");

    const onClickNavSearch = () => {
        document.getElementById(ids.navSearchInput)?.focus();
    }

    return (
        <div className={classes.navSearch} onClick={onClickNavSearch}>
            <IoSearch id={ids.navSearchIcon}/>
            <Input id={ids.navSearchInput} value={input} onValueChange={setInput} type="search" />
        </div>
    )
}

export default NavSearch;