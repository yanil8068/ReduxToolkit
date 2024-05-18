import { useSelector, useDispatch } from "react-redux";
import { add } from "./Slice.jsx";

export default function Increment() {
  const dispatch = useDispatch();
  const valueinreduxstore = useSelector((state) => state.value);
  console.log(valueinreduxstore);

  return (
    <>
      <div>
        {valueinreduxstore}
        <button
          onClick={() => {
            dispatch(add(1));
          }}
        >
          increment
        </button>
      </div>
    </>
  );
}
