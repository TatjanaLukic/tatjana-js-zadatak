import React from "react";
import "./loading.css";
import { ReactComponent as Icon } from "../../assets/images/circles.svg";

const Loading = () => (
  <div className="loading" data-testid="loading">
    <Icon />
  </div>
);

export default Loading;
