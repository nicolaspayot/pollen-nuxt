import {Job} from '~/models/Job';

export default defineEventHandler(async (event) => {
    const jobs = await useStorage('db').getItem<Job[]>('jobs');
    const {jobId} = event.context.params!;

    const job = jobs?.find((job) => job.id === Number(jobId));

    if (!job) {
        throw createError({statusCode: 404, message: 'Job not found'});
    }

    return job;
});
