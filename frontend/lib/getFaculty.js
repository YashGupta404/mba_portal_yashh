export async function getFaculty() {
  const res = await fetch("http://localhost:5000/api/faculty", {
    cache: "no-store",
  });

  return res.json();
}
