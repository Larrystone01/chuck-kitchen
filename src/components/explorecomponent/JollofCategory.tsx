import { JollofCategoryItems } from "@/lib/MenuCategories";
import CardDisplayGrid from "../CardDisplayGrid";

export default function JollofCategory() {
  return (
    <CardDisplayGrid
      DisplayItem={JollofCategoryItems}
      title="Jollof Rice & Entrees"
      limit={3}
      textCenter={false}
    />
  );
}
