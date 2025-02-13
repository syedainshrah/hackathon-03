import { groq } from "next-sanity";


export const allproducts = groq `*[_types == "product"]`;
export const fourPro = groq `*[_types == "product"][0..3]`;