import React from "react";
import { Image } from "antd";
import { FaCircleCheck, FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

const ProductItem = ({
  productId,
  productStock,
  productImg,
  productTitle,
  oldPrice,
  newPrice,
  onClick,
}) => {
  // const [rating, setRating] = useState(0);
  // const [reviews, setReviews] = useState(0);

  // useEffect(() => {
  //   const fetchProductDetails = async () => {
  //     try {
  //       const response = await axios.get("../../../src/product.json");
  //       const product = response.data.products.find((p) => p.id === productId);
  //       if (product) {
  //         setRating(product.rating);
  //         setReviews(product.reviews);
  //       } else {
  //         console.error("Product not found");
  //       }
  //     } catch (error) {
  //       console.error("Failed to fetch product details:", error);
  //     }
  //   };

  //   fetchProductDetails();
  // }, [productId]);
  const product = useSelector((state) =>
    state.allCart.data?.products?.find((p) => p.id === productId)
  );
  const rating = product?.rating || 0;
  const reviews = product?.reviews || 0;

  return (
    <div>
      <div className="w-[234px] h-[385px] px-6 pb-5  flex flex-col gap-3">
        <div className="text-[10px]">
          {productStock === "In Stock" && (
            <div className="flex items-center gap-1">
              <FaCircleCheck className="text-green" />
              <span className="text-green">In Stock</span>
            </div>
          )}
          {productStock === "Check Availability" && (
            <div className="flex items-center gap-1 cursor-pointer">
              <i className="fa-solid fa-circle-phone text-red "></i>
              <span className="text-red">Check Availability</span>
            </div>
          )}
        </div>
        <Image
          className="w-full object-contain"
          height={150}
          src={productImg}
        />
        <div className="flex flex-col gap-2 w-full h-full">
          <div className="h-full flex flex-col gap-2">
            <div className="flex justify-between">
              <div className="icons text-orange-400 flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => {
                  if (index < Math.floor(rating)) {
                    return <FaStar key={index} color="orange" />;
                  } else if (index < rating) {
                    return <FaStarHalfAlt key={index} color="orange" />;
                  } else {
                    return <FaStar key={index} color="gray" />;
                  }
                })}
              </div>
              <p className="text-[12px] opacity-70">Reviews ({reviews})</p>
            </div>
            <h3 className="text-[13px] ">EX Display: {productTitle}</h3>
          </div>
          <div className="flex items-center gap-5 h-1/3">
            <div className="">
              <p className="leading-[140%] line-through text-[13px] text-gray_textTwo">
                ${oldPrice}
              </p>
              <p className="mt-1 font-semibold text-[18px] leading-[140%]">
                ${newPrice}
              </p>
            </div>
            <button
              onClick={onClick}
              type="button"
              className="text-white hover:bg-transparent border border-transparent hover:border-black hover:text-black transition-all duration-300 bg-black px-4 py-2 w-full rounded-lg text-base"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
