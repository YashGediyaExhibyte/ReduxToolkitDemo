import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../redux/slices/ProductSlice";

const ProductList = () => {
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductList());
  }, []);

  useEffect(() => {
    setData(list);
    console.log(data);
  }, [list]);

  return (
    <div className="m-10">
      <div className="grid grid-cols-5 gap-5">
        {data?.map((val, i) => (
          <div key={i} className="border border-slate-400 rounded-md">
            <div className="flex items-center justify-center my-5">
              <img
                src={val?.image}
                alt=""
                className="rounded-md h-[260px] object-cover"
              />
            </div>
            <div className="p-5 space-y-2">
              <div className="flex gap-5">
                <span className="font-bold">Title: </span>
                <h3 className="text-sm">{val?.title}</h3>
              </div>
              <div className="flex gap-5 items-center">
                <span className="font-bold">Price: </span>
                <h3 className="text-sm">{val?.price} $</h3>
              </div>
              <div className="flex gap-5 items-center">
                <span className="font-bold">Rating: </span>
                <h3 className="text-sm">{val?.rating.rate}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
