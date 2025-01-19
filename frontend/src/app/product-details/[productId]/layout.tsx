export function generateMetadata({ params }: any) {
  const fromSlug = (slug: any) => {
    // Replace hyphens with spaces and capitalize each word's first letter
    return slug
      .split("-")
      .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const productId = fromSlug(params.productId);

  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    title: `${productId} | Ceramic Product | The Earthern Vogue`,
    keywords: `${productId}, eco-friendly home decor, sustainable products, handcrafted ceramics, The Earthern Vogue, stylish home decor, buy ${productId} online`,
    description: `Explore the ${productId} at The Earthern Vogue. Handcrafted with care, this ${productId} piece blends style and sustainability. Perfect for your modern lifestyle. Shop now!`,
    brand: {
      "@type": "Brand",
      name: "The Earthern Vogue",
    },
    openGraph: {
      title: `${productId} - Product | The Earthern Vogue`,
      description: `Discover the timeless charm of ${productId} from The Earthern Vogue. Perfectly crafted to complement your eco-conscious lifestyle.`,
      url: `https://theearthernvogue.com/product-details/${params.productId}`,
      keywords: `${productId}, eco-friendly home decor, sustainable products, handcrafted ceramics, The Earthern Vogue, stylish home decor, buy ${productId} online`,
      images: [
        {
          url: "/images/logo/TEV_logo.webp",
          width: 1200,
          height: 630,
          alt: `${productId}'s page`,
        },
      ],
      locale: "en_IN",
      type: "profile",
    },
    offers: {
      "@type": "Offer",
      url: `https://theearthernvogue.com/product-details/${params.productId}`,
      priceCurrency: "[INR]",
      price: "[499,599,999]",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
    },
  };
}

const Layout = (props: any) => {
  return <>{props.children}</>;
};

export default Layout;
