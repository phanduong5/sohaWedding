import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

function useNavigateParams() {
  const navigate = useNavigate();
  const navigateWithParams = (url, params, other) => {
    let newUrl = url;
    if (url && url[0] !== "/") {
      newUrl = `/${url}`;
    }
    navigate(
      {
        pathname: newUrl,
        search: `?${createSearchParams(params)}`,
      },
      {
        state: other?.state,
      }
    );
  };
  return {
    navigateWithParams,
  };
}

export default useNavigateParams;
