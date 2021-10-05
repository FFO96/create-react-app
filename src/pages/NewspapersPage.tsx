import React from "react";
import NewspaperList from "../components/NewspaperList";
import Searchbox from "../components/Searchbox";

const NewspapersPage: React.FC<{}> = (props) =>{

    

    return (
        <div>
            <Searchbox />
            <NewspaperList />
            </div>
    );
}

export default NewspapersPage;