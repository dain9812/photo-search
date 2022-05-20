import PickItem from "./PickItem";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { showPhoto } from "../redux/reducer/show";

const PickWrap = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showPhoto(id));
  }, []);

  return (
    <div>
      <PickItem />
    </div>
  );
};

export default PickWrap;
