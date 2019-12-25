import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Evolutions({ datas }) {
  return (
    <Fragment>
      {datas.map(({ name, id, image, number }) => {
        return (
          <Link key={id} to={`/pokemon/${id}`}>
            <div className="text-left evolution-item">
              <img src={image} className="ml-3 image-evolution" alt={name} />
              <span className="mx-3">{`${number} --- ${name}`}</span>
            </div>
          </Link>
        );
      })}
    </Fragment>
  );
}
