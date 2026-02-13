import { useState } from "react";
type useShowMoreProps = {
  limit: number;
  items: any[];
};
export default function useShowMore({ limit, items }: useShowMoreProps) {
  const [showAll, setShowAll] = useState(false);
  const shouldShow = items.length > limit;

  //For future reference, used for much longer list and for preformance optimization. Not needed for this project since we only have 6 items in the list.
  // const displayedItems = showAll
  //   ? PopularCategoriesItems
  //   : PopularCategoriesItems.slice(0, limit);

  const onHandleToggle = () => {
    setShowAll((prev) => !prev);
  };
  return {
    showAll,
    shouldShow,
    onHandleToggle,
  };
}
