import { useDispatch } from "react-redux";

const Meme = ({ id, url, top, bttm }) => {
  const dispatch = useDispatch();
  const remove = () => dispatch({ type: "DELETE", payload: id });

  return (
    <div id={id} className="m-4 hover:animate-pulse " onClick={() => remove()}>
      <div className="relative w-60 h-full">
        <img className="rounded" src={url} alt="MEME" />
        <div className="absolute w-full flex items-center justify-center top-0">
          <p className=" p-4">{top}</p>
        </div>
        <div className="absolute w-full flex items-center justify-center bottom-0">
          <p className=" p-4">{bttm}</p>
        </div>
      </div>
    </div>
  );
};

export default Meme;
