import {Job} from '~/models/Job';

export default defineEventHandler(async (event) => {
    const jobs = await useStorage('db').getItem<Job[]>('jobs');
    const {jobId} = event.context.params!;
    return jobs?.find((job) => job.id === Number(jobId));
});
