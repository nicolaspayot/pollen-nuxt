import {Job} from '~/models/Job';

export default defineEventHandler(async (event) => {
    const storage = useStorage('db');

    const {jobId} = event.context.params!;
    const {job} = await readBody(event);

    const jobs = (await storage.getItem<Job[]>('jobs'))!;

    const index = jobs.findIndex((job) => job.id === Number(jobId));
    jobs[index] = job;

    await storage.setItem('jobs', jobs);

    return job;
});
