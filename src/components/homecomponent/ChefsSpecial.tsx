import CardDisplayGrid from "../CardDisplayGrid";
import { ChefsSpecialItems } from "@/lib/Chefs-Special";

export default function ChefsSpecial() {
  return (
    <CardDisplayGrid
      DisplayItem={ChefsSpecialItems}
      limit={3}
      title="Chef's Special"
      textCenter={true}
      buttonText="Add to cart"
    />
  );
}
