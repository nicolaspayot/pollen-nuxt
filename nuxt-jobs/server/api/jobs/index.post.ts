import {Job} from '~/models/Job';

export default defineEventHandler(async (event) => {
    const storage = useStorage('db');
    const jobs = (await storage.getItem<Job[]>('jobs')) || [];

    const {job: newJob} = await readBody(event);

    const lastId = jobs[jobs.length - 1].id || 0;
    newJob.id = lastId + 1;
    jobs?.push(newJob);

    await storage.setItem('jobs', jobs);

    return newJob;
});
