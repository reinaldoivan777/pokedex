import React, { Fragment } from "react";
import { Badge } from "react-bootstrap";

const Badges = ({ datas, variant }) => {
  return (
    <Fragment>
      {datas &&
        datas.map(data => (
          <Badge className="mr-1" key={data} variant={variant}>
            {data}
          </Badge>
        ))}
    </Fragment>
  );
};

export default Badges;
