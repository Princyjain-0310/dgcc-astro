import {defineCollection, z} from 'astro:content';
import { file } from 'astro/loaders'; // Not available with legacy API

const team_member_schema = z.object({
    "name": z.string(),
    "year": z.string(),
    "role": z.string(),
    "image": z.string(),
    "bio": z.string()
})

const team_data_schema = defineCollection({
    loader: file("src/data/team.yml"),
    schema: z.array(team_member_schema)
})

const workshops = defineCollection({
    type: "content",
    // loader: glob({ pattern: "**/*.md", base: "./src/content/workshops" }),
    // loader: file("src/data/workshop.yml"),
    schema: z.object({
        "title": z.string(),
        "date": z.string(),
        "time": z.string(),
        "description": z.string(),
        "speaker": z.string(),
        "location": z.string(),
        "calenderLink": z.string(),
        "hidden": z.boolean().optional(),
    })
})

export const collections = {team_data_schema, workshops};