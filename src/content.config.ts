import {defineCollection, z} from 'astro:content';
import {glob, file} from 'astro/loaders';
import {getCollection} from 'astro:content';

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

export const collections = {team_data_schema};