import React from "react";
import { Newspaper } from "../types/index";

/*type Newspaper = {
title: string,
publisher: string,
country: string,
start_year: string,
end_year: string
}*/

const NewspaperComponent: React.FC<{newspaper: Newspaper}> = (props) =>{

    return (
        <div>
            <ul>
                <li>Title: {props.newspaper.title}</li>
                <li>Publisher: {props.newspaper.publisher}</li>
                <li>Country: {props.newspaper.country}</li>
                <li>Start year: {props.newspaper.start_year}</li>
                <li>End year: {props.newspaper.end_year}</li>
            </ul>
        </div>
    );
}

export default NewspaperComponent;