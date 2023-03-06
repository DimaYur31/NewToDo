import { createContext, useContext } from 'react';

const AppContext = createContext(null);
export const AppContextProvider = AppContext.Provider;

export const useAppContext = () => {
	const data = useContext(AppContext)

	if (!data) {
		throw new Error('Can not use withaut AppContextProvidet');
	}

	return data;
}