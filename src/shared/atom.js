import { atom } from "jotai";

export const routeAtom = atom("");
export const readRoute = atom((get) => get(routeAtom));
export const writeRoute = atom(null, (get, set, update) => {
  set(routeAtom, update);
});
