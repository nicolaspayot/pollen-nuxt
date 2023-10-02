import {Job} from '~/models/Job';

export default defineEventHandler(async () => {
    const jobs = await useStorage('db').getItem<Job[]>('jobs');
    return jobs;
});
