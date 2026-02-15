import CardDisplayGrid from "../CardDisplayGrid";
import { PopularCategoryItems } from "@/lib/MenuCategories";

export default function PopularCategory() {
  return (
    <CardDisplayGrid
      DisplayItem={PopularCategoryItems}
      limit={3}
      title="Popular"
      textCenter={false}
    />
  );
}
