import React from "react";
import { useMatches } from "react-router-dom";

const usePageTitle = () => {
  const matches = useMatches();

  if (!matches?.length) return undefined;

  let pageTitle;

  for (let x = matches.length - 1; x >= 0 && !pageTitle; x--) {
    const handle = matches[x].handle as any;

    if (handle?.title) pageTitle = handle.title;
  }

  return pageTitle;
};

export default usePageTitle;
