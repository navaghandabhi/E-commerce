export type ProductData = {
    productId:string;
    productName:string;
    sortDescription?:string;
    longDescription?:string;
    availability?: boolean;
    rating?: number;
    reviewsCount?: number;
    price:number;
    discount:number;
    mrp:number;
    type:string,
    category:string;
    imageUrl?: string[];
}