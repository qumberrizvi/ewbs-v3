
export const animationCreate = () => {
  if (typeof window !== "undefined") {
    import("wowjs").then((module) => {
      const WOW = module.default;
      new WOW.WOW({live: false}).init()
    });
  }
};

export const calculateDiscountedPrice = (price:number, discount:number) => {
  return (price - (price * discount) / 100).toFixed(2);
};

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getImageUrl = (url?: string) => {
  const storageURI = process.env.STORAGE_URL || 'https://blog.ewbsbusiness.ae/admin/storage/';
  return `${storageURI}/${url || ''}`;
}
