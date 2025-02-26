import { getCollection } from "astro:content";

export const workshops = (await getCollection("workshops"))
    .filter(x => !x.data.hidden);