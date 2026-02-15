import { SwallowItems } from "@/lib/MenuCategories";
import CardDisplayGrid from "../CardDisplayGrid";

export default function Swallows() {
  return (
    <CardDisplayGrid
      DisplayItem={SwallowItems}
      limit={3}
      title="Swallow & Soups"
      textCenter={false}
    />
  );
}
