import { generatePath, Route } from "react-router-dom";

interface SwitchRoutes {
    root: string;
    list: string;
    rickamorty: string;
}

export const switchRoutes: SwitchRoutes = {
    root: "/",
    list: "/list",
    rickamorty: "/rickamorty",
}

/* 
interface Routes extends Omit<SwitchRoutes, "detail"> {
    detail: (id: string) => string;
}

export const routes: Routes = {
 ...switchRoutes,
 detail:(id:string) => generatePath("/detail/:id", {id}),
} */