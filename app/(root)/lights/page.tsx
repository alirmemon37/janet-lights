import { getLights } from "@/sanity/actions";

const LightsPage = async () => {
  const lights = await getLights();

  console.log(lights);

  return (
    <div>
      {lights.map((light) => {
        return <>{light.name}</>;
      })}
    </div>
  );
};

export default LightsPage;
