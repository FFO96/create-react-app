import React from "react";
import { useSelector } from "react-redux";
import { State } from "../reducers/index";
import NewspaperComponent from "./NewspaperComponent";


const NewspaperList: React.FC<{}> = (props) => {
    const newspapers = useSelector((state: State) => state);

    console.log(newspapers);

    return (

        <div>{newspapers.length === 0 ? <div>There is no newspapers</div> : <div> {
            newspapers.map(newspaper => <NewspaperComponent newspaper={newspaper} />)} </div>}</div>
    );
}

export default NewspaperList;