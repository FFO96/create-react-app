import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { State } from "../state/reducers/index";
import { Newspaper } from "../types/index";

const Searchbox: React.FC<{}> = (props) => {

    const dispatch = useDispatch();

    const stateInput = useRef<HTMLInputElement>(null);

    function submitHandler(event: React.FormEvent) {
        event.preventDefault();
        const enteredState = stateInput.current!.value;
        getNews(enteredState).then(newspapers => {
            dispatch({ type: 'update', payload: newspapers });
        });
    }

    function getNews(state: string) {
        const url = 'https://chroniclingamerica.loc.gov/search/titles/results/?terms=' + state + '&format=json';
        return fetch(url)
            .then(response => {
                return response.json();
            }).then(data => {
                return data.items.map((item: any) => {
                    const newspaper: Newspaper = {
                        title: item.title,
                        publisher: item.publisher,
                        country: item.country,
                        start_year: item.start_year,
                        end_year: item.end_year
                    };
                    return newspaper;
                });
            });
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="state" > Select state: </label>
                <input type="text" id="state" ref={stateInput} />
                <button>Search</button>
            </form>
        </div>
    );
}

export default Searchbox;