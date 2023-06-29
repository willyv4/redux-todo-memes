import { useSelector } from "react-redux";
import Meme from "./Meme";

const MemeListContainer = () => {
  const memes = useSelector((st) => st.meme);
  console.log(memes);

  return (
    <div className="mt-10 flex justify-center align-items">
      <div className="flex flex-wrap p-10">
        {memes.map((m) => (
          <Meme key={m.id} {...m} />
        ))}
      </div>
    </div>
  );
};

export default MemeListContainer;
