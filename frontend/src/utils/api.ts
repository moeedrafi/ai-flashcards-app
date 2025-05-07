const BASE_URL = "http://localhost:8000";

export const apiClient = async (
  endpoint: string,
  method: "GET" | "POST" | "DELETE" | "PATCH",
  options: RequestInit = {}
) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method,
      signal: controller.signal,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "API request failed.");
    }

    return await response.json();
  } catch (error) {
    clearTimeout(timeoutId);
    throw handleApiError(error);
  }
};

export const apiFileClient = async (
  endpoint: string,
  formData: FormData,
  options: RequestInit = {}
) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      body: formData,
      method: "POST",
      signal: controller.signal,
      credentials: "include",
      ...options,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "File Upload Failed.");
    }

    return await response.json();
  } catch (error) {
    clearTimeout(timeoutId);
    throw handleApiError(error);
  }
};

const handleApiError = (error: unknown): Error => {
  if (error instanceof Error) {
    return error;
  } else {
    return new Error("Something went wrong!");
  }
};
