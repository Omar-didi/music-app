const API_URL = "http://192.168.1.4:3000";

export async function checkBackend() {
  const response = await fetch(`${API_URL}/health`);

  if (!response.ok) {
    throw new Error("Error del servidor");
  }

  return response.json();
}

export async function requestDownload(url: string) {
  const response = await fetch(`${API_URL}/download`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error ?? "Error solicitando descarga");
  }

  return data;
}