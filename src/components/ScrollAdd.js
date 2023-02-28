import React from "react";

function ScrollAdd() {
  React.useEffect(() => {
    window.scrollTo(0, window.innerHeight -100);
  }, []);
  return null;
}

export default ScrollAdd;
