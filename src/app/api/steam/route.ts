export const GET = async () => {
  const res = await fetch("https://api.ipify.org?format=json", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  return Response.json(data);
};
