import { API_BASE_URL } from "./api-config";

export async function getFaculty() {
  const res = await fetch(`${API_BASE_URL}/api/faculty`, {
    cache: "no-store",
  });

  return res.json();
}
