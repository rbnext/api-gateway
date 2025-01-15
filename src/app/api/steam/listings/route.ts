export const preferredRegion = ["bom1"];

export const GET = async () => {
  const ipResponse = await fetch("https://api.ipify.org?format=json", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const ipData = await ipResponse.json();

  const steamResponse = await fetch(
    "https://steamcommunity.com/market/listings/730/AK-47%20%7C%20Redline%20%28Field-Tested%29/render/?query=&start=10&count=10&country=PL&language=english&currency=1",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const steamData = await steamResponse.json();

  return Response.json({ ipData, steamData });
};
