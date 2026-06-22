export interface Provider {
  id: string;
  name: string;
  online: boolean;
}

export async function getProviders(): Promise<Provider[]> {
  return [
    {
      id: "1",
      name: "Akash",
      online: true
    },
    {
      id: "2",
      name: "Nosana",
      online: true
    }
  ];
}
