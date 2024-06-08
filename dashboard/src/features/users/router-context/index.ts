import { createContext, useContext } from "react";
import { UserType } from "@marzneshin/features/users";

interface RouterUserContextProps {
    user: UserType;
}

export const RouterUserContext = createContext<RouterUserContextProps | null>(null);

export const useRouterUserContext = () => {
    const ctx = useContext(RouterUserContext);
    return ctx;
};
