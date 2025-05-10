import { toast } from "react-toastify";

const BASE_URL = "http://localhost:8000";

export const apiClient = async <TRequest = unknown, TResponse = unknown>(
  endpoint: string,
  method: "GET" | "POST" | "DELETE" | "PATCH",
  data?: TRequest,
  options: RequestInit = {}
): Promise<TResponse> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      signal: controller.signal,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });

    clearTimeout(timeoutId);

    if (!response.ok) throw new Error();

    const jsonResponse = await response.json();
    toast.success(jsonResponse.message);
    return jsonResponse as TResponse;
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
    const response = await fetch(`${BASE_URL}${endpoint}`, {
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

const handleApiError = (error: unknown) => {
  if (error instanceof Error) {
    toast.error(error.message || "An unexpected error occurred.");
  } else {
    toast.error("Something went wrong. Please try again.");
  }
};
