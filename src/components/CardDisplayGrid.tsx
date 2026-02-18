"use client";
import useShowMore from "@/hooks/useShowMore";
import Card from "./Card";

type CardDisplayGridProps = {
  DisplayItem: any[];
  limit: number;
  buttonText?: string;
  title: string;
  textCenter: boolean;
};

export default function CardDisplayGrid({
  DisplayItem,
  limit,
  buttonText,
  title,
  textCenter,
}: CardDisplayGridProps) {
  const { showAll, shouldShow, onHandleToggle } = useShowMore({
    limit,
    items: DisplayItem,
  });

    const slugFromName = (DisplayItem: any[]) => {
    return DisplayItem.map((item: { name: string }) => {
      return {
        ...item,
        slug: item?.name
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-"),
      };
    });
  };

  const slug = slugFromName(DisplayItem);
  return (
    <section className="chefs-special-section py-15 md:py-0 md:pb-40">
      <div className="container mx-auto px-6">
        <div className="chefs-special-container">
          <h2
            className={`text-[32px] font-bold ${textCenter ? "text-center" : ""}`}
          >
            {title}
          </h2>
          <div className="specials-grid mt-10 grid md:grid-cols-3 gap-6">
            {DisplayItem.map((item, i) => {
              return (
                <Card
                  key={item.id}
                  items={item}
                  index={i}
                  showAll={showAll}
                  limit={limit}
                  buttonText={buttonText}
                  href={slug[i]?.slug}
                />
              );
            })}
          </div>
          {shouldShow && (
            <button
              onClick={onHandleToggle}
              className="text-blue-600 py-3.5 px-8 w-fit block sm:hidden mx-auto mt-10"
            >
              {showAll ? "View Less Specials" : "View All Specials"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
