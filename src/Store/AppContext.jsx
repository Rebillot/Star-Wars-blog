import React, { useState, useEffect } from "react";
import getGlobalData from "./Flux.jsx";

export const Context = React.createContext(null);

const injectContext = (PassedComponent) => {
    const StoreWrapper = (props) => {
        const [globalData, setGlobalData] = useState(
        getGlobalData({
            getStore: () => globalData.store,
            getActions: () => globalData.actions,
            setStore: (updatedStore) =>
            setGlobalData({
                store: Object.assign(globalData.store, updatedStore),
                actions: { ...globalData.actions },
            }),
        })
        );

        useEffect(() => {
        globalData.actions.fetchCharacters();
        globalData.actions.fetchPlanets();
        globalData.actions.fetchVehicles();
        globalData.actions.fetchFilms();
        }, []);

        return (
        <Context.Provider value={globalData}>
            <PassedComponent {...props} />
        </Context.Provider>
        );
    };
    return StoreWrapper;
};

export default injectContext;
