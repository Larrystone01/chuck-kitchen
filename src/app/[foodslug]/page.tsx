import NavWrapper from "@/components/Wrapper/NavFooterWrapper";
import { AllFoods } from "@/lib/MenuCategories";
import Image from "next/image";
import { Timer, X } from "lucide-react";

type FoodDetailsProps = {
  params: { foodslug: string };
};

export default async function FoodDetails({ params }: FoodDetailsProps) {
  const { foodslug } = await params;
  const decodedSlug = decodeURIComponent(params.foodslug);

  const slugFromName = <T extends { name: string }>(AllFoods: T[]) => {
    return AllFoods.map((item) => {
      return {
        ...item,
        slug: item.name
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-"),
      };
    });
  };

  const sluggedNames = slugFromName(AllFoods);
  console.log(foodslug);
  console.log(sluggedNames.map((name) => name.slug));

  const food = sluggedNames.find((f) => f.slug === foodslug);

  if (!food) return <p>Food Not Found</p>;

  return (
    <NavWrapper>
      <section className="food-page">
        <div className="food-page-container h-fit w-screen flex flex-col md:flex-row">
          <div
            className="image relative h-73.5 md:h-full w-full md:w-1/2"
            // style={{ width: "50%" }}
          >
            <Image
              src={food.img}
              fill
              alt={food.name}
              className="object-cover"
            />
          </div>

          <div
            className="food-details relative bg-white px-6 w-full md:w-1/2 md:mx-10 mx-0 md:my-2.5 my-0 py-6"
            style={
              {
                // width: "50%",
                // marginInline: "40px",
                // marginBlock: "10px",
                // paddingBlock: "24px",
              }
            }
          >
            <div
              className="close-btn bg-black absolute"
              style={{ backgroundColor: "black", right: "10px" }}
            >
              <X color="white" />
            </div>
            <div className="details mt-10">
              <p className="font-bold text-[32px] leading-10.5">{food.name}</p>
              <p className="font-semibold text-[#FF7A18] text-[24px] leading-8">
                ₦{food.price}
              </p>
              <p className="font-regular text-[16px] leading-35">
                {food.description}
              </p>
            </div>
            <div
              className="options flex mt-10 flex-wrap"
              style={{ gap: "20px" }}
            >
              <button
                className="flex items-center bg-[#F3F4F6] md:bg-none rounded-lg py-1 px-2 md:gap-1.5"
                style={{
                  // gap: "5px",
                  fontSize: "16px",
                  lineHeight: "140%",
                  letterSpacing: "-2%",
                }}
              >
                <span className="mr-3">
                  <Timer color="#FF7A18" />
                </span>
                Mildly spicy
              </button>
              <button
                className="flex items-center bg-[#F3F4F6] md:bg-none rounded-lg py-1 px-2 md:gap-1.5"
                style={{
                  // gap: "5px",
                  fontSize: "16px",
                  lineHeight: "140%",
                  letterSpacing: "-2%",
                }}
              >
                <span className="mr-3">
                  <Timer color="#FF7A18" />
                </span>
                Vegetarian option available
              </button>
              <button
                className="flex items-center bg-[#F3F4F6] md:bg-none rounded-lg py-1 px-2 md:gap-1.5"
                style={{
                  // gap: "5px",
                  fontSize: "16px",
                  lineHeight: "140%",
                  letterSpacing: "-2%",
                }}
              >
                <span className="mr-3">
                  <Timer color="#FF7A18" />
                </span>
                View Allergies
              </button>
            </div>

            <div className="proteins mt-5">
              <h3 className="capitalize font-medium text-[24px] leading-8.5">
                Choose your protein
              </h3>
              <div
                className="protein-lis flex flex-col mt-5"
                style={{ gap: "12px" }}
              >
                <button
                  className="flex w-full"
                  style={{
                    border: "1px solid #BDBDBD",
                    paddingInline: "3px",
                    paddingBlock: "5px",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    className="radio rounded-full"
                    style={{
                      width: "24px",
                      height: "24px",
                      border: "4px solid #FF7A18",
                    }}
                  ></div>
                  <p
                    className="capitalize ml-3"
                    style={{
                      marginLeft: "12px",
                      lineHeight: "140%",
                      letterSpacing: "-2%",
                    }}
                  >
                    fried chicken
                  </p>
                  <p className="capitalize" style={{ marginLeft: "auto" }}>
                    (default)
                  </p>
                </button>
                <button
                  className="flex w-full"
                  style={{
                    border: "1px solid #BDBDBD",
                    paddingInline: "3px",
                    paddingBlock: "5px",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    className="radio rounded-full"
                    style={{
                      width: "24px",
                      height: "24px",
                      border: "4px solid #FF7A18",
                    }}
                  ></div>
                  <p
                    className="capitalize ml-3"
                    style={{
                      marginLeft: "12px",
                      lineHeight: "140%",
                      letterSpacing: "-2%",
                    }}
                  >
                    grilled fish
                  </p>
                  <p className="capitalize" style={{ marginLeft: "auto" }}>
                    +₦500
                  </p>
                </button>
                <button
                  className="flex w-full"
                  style={{
                    border: "1px solid #BDBDBD",
                    paddingInline: "3px",
                    paddingBlock: "5px",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    className="radio rounded-full"
                    style={{
                      width: "24px",
                      height: "24px",
                      border: "4px solid #FF7A18",
                    }}
                  ></div>
                  <p
                    className="capitalize ml-3"
                    style={{
                      marginLeft: "12px",
                      lineHeight: "140%",
                      letterSpacing: "-2%",
                    }}
                  >
                    beef
                  </p>
                  <p className="capitalize" style={{ marginLeft: "auto" }}>
                    +₦700
                  </p>
                </button>
              </div>
            </div>
            <div className="extras" style={{ marginBlock: "16px" }}>
              <h3 className="capitalize font-medium text-[24px] leading-8.5">
                extra sides (optional)
              </h3>
              <div
                className="extra-listing flex flex-col mt-5"
                style={{ gap: "12px" }}
              >
                <button
                  className="flex items-center w-full cursor-pointer"
                  style={{
                    border: "1px solid #BDBDBD",
                    paddingInline: "3px",
                    paddingBlock: "5px",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    className="radio"
                    style={{
                      width: "24px",
                      height: "24px",
                      border: "1px solid gray",
                      borderRadius: "8px",
                    }}
                  ></div>
                  <p
                    className="capitalize ml-3"
                    style={{
                      marginLeft: "12px",
                      lineHeight: "140%",
                      letterSpacing: "-2%",
                    }}
                  >
                    fried plantain
                  </p>
                  <p className="capitalize" style={{ marginLeft: "auto" }}>
                    +₦700
                  </p>
                </button>
                <button
                  className="flex w-full cursor-pointer"
                  style={{
                    border: "1px solid #BDBDBD",
                    paddingInline: "3px",
                    paddingBlock: "5px",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    className="radio rounded-lg"
                    style={{
                      width: "24px",
                      height: "24px",
                      border: "1px solid gray",
                    }}
                  ></div>
                  <p
                    className="capitalize ml-3"
                    style={{
                      marginLeft: "12px",
                      lineHeight: "140%",
                      letterSpacing: "-2%",
                    }}
                  >
                    coleslaw
                  </p>
                  <p className="capitalize" style={{ marginLeft: "auto" }}>
                    +₦500
                  </p>
                </button>
                <button
                  className="flex w-full cursor-pointer"
                  style={{
                    border: "1px solid #BDBDBD",
                    paddingInline: "3px",
                    paddingBlock: "5px",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    className="radio rounded-lg"
                    style={{
                      width: "24px",
                      height: "24px",
                      border: "1px solid gray",
                    }}
                  ></div>
                  <p
                    className="capitalize ml-3"
                    style={{
                      marginLeft: "12px",
                      lineHeight: "140%",
                      letterSpacing: "-2%",
                    }}
                  >
                    extra pepper sauce
                  </p>
                  <p className="capitalize" style={{ marginLeft: "auto" }}>
                    +₦300
                  </p>
                </button>
              </div>
            </div>
            <div className="special-instructions w-full">
              <h3
                className="text-[24px] font-medium leading-8.5 tracking-[0%]"
                style={{ marginBottom: "16px" }}
              >
                Special Instructions
              </h3>
              <textarea
                className="w-full border"
                style={{
                  border: "1px solid gray",
                  padding: "3px",
                  height: "112px",
                  borderRadius: "8px",
                }}
                placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhhh food is tasty"
              ></textarea>
            </div>
          </div>
        </div>
      </section>
    </NavWrapper>
  );
}
