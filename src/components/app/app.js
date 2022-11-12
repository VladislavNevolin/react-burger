import { useState, useEffect } from 'react';
import AppHeader from '../header/header';
import Main from "../main/main";
import getIngredients from '../utils/burger-api';
import { DataContext, ChosenItemsContext } from '../../services/appContext';

export default function App() {
    const [state, setState] = useState({
        data: [],
        order: null
    });

    const [chosenItems, setChosenItems] = useState([]);

    useEffect(() => { getIngredients(setState) }, []);

    return (
        <>
            <AppHeader />
            <DataContext.Provider value={{state, setState}}>
                <ChosenItemsContext.Provider value={{chosenItems, setChosenItems}}>
                    <Main />
                </ChosenItemsContext.Provider>
            </DataContext.Provider>
        </>
    )
}