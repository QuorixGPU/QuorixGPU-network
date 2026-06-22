export function scheduleJob(
  workload: string
) {
  return {
    workload,
    status: "queued"
  };
}
