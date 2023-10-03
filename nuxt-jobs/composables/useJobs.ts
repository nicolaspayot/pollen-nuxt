import {Job} from '~/models/Job';

export function useJobs() {
    const jobs = useState<Job[]>('jobs', () => []);

    async function getAllJobs() {
        const {data} = await useFetch<Job[]>('/api/jobs');
        jobs.value = data.value!;
    }

    async function createJob(job: Job) {
        return await $fetch('/api/jobs', {method: 'POST', body: {job}});
    }

    async function getJob(jobId: number) {
        if (!jobs.value.length) {
            await getAllJobs();
        }
        const job = jobs.value.find((job) => job.id === jobId);
        if (!job) {
            throw createError({statusCode: 404, message: `Job ${jobId} not found`});
        }
        return job;
    }

    async function updateJob(job: Job) {
        return await $fetch(`/api/jobs/${job.id}`, {method: 'PUT', body: {job}});
    }

    return {
        jobs,
        getAllJobs,
        createJob,
        getJob,
        updateJob,
    };
}
