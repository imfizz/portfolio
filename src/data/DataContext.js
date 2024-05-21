import { createContext, useEffect, useState } from "react"

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await fetch("/resumeData.json");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                setData(result);
            } catch (e) {
                setIsError(e);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return (
        <DataContext.Provider value={{ data, loading, isError }}>
            {children}
        </DataContext.Provider>
    )
}