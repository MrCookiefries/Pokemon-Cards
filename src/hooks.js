import { useState } from "react";
import uuid from "uuid";
import axios from "axios";

export const useFlip = () => {
    const [state, setState] = useState(true);
    function flip() {
        setState(currState => !currState);
    }
    return [state, flip];
};

export const useAxios = url => {
    const [state, setState] = useState([]);
    async function addCard(endPoint = "") {
        try {
            const resp = await axios.get(url + endPoint);
            setState(state => [...state, { ...resp.data, id: uuid() }]);
        } catch (err) {
            console.error(err);
        }
    };
    function removeState() {
        setState([]);
    }
    return [state, addCard, removeState];
};
