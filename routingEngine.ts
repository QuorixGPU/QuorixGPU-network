export interface RouteRequest {
  model: string;
  optimizeFor: "cost" | "latency" | "balanced";
}

export async function findBestRoute(
  request: RouteRequest
) {
  return {
    provider: "akash",
    gpu: "A100",
    price: 0.22,
    latency: 82
  };
}
