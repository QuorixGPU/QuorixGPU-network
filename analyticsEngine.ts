export function totalRequests(
  requests: number[]
) {
  return requests.reduce(
    (a, b) => a + b,
    0
  );
}
