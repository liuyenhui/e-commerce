/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Featured = {
  _id: string;
  _type: "featured";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  first?: {
    title?: string;
    description?: string;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
    buttonText?: string;
    type?: "tag" | "brand";
    tag?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "tag";
    };
    brand?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "brand";
    };
  };
  second?: {
    title?: string;
    description?: string;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
    buttonText?: string;
    type?: "tag" | "brand";
    tag?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "tag";
    };
    brand?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "brand";
    };
  };
};

export type Comments = {
  _id: string;
  _type: "comments";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  text?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  createdAt?: string;
  user?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "users";
  };
  product?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "goods";
  };
};

export type Users = {
  _id: string;
  _type: "users";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  accountType?: Array<string>;
  registrationDate?: string;
  registrationType?: "google" | "email";
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: "AF" | "AX" | "AL" | "DZ" | "AS" | "AD" | "AO" | "AI" | "AQ" | "AG" | "AR" | "AM" | "AW" | "AU" | "AT" | "AZ" | "BS" | "BH" | "BD" | "BB" | "BY" | "BE" | "BZ" | "BJ" | "BM" | "BT" | "BO" | "BA" | "BW" | "BV" | "BR" | "IO" | "BN" | "BG" | "BF" | "BI" | "KH" | "CM" | "CA" | "CV" | "KY" | "CF" | "TD" | "CL" | "CN" | "CX" | "CC" | "CO" | "KM" | "CG" | "CD" | "CK" | "CR";
  zip?: string;
  creditCards?: Array<{
    cardType?: "visa" | "mastercard" | "amex";
    cardNumber?: string;
    expirationDate?: string;
    cvv?: string;
    _type: "creditCard";
    _key: string;
  }>;
};

export type Popular = {
  _id: string;
  _type: "popular";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  goods?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "goods";
  }>;
};

export type Size = {
  _id: string;
  _type: "size";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  description?: string;
  sizeValue?: {
    unit?: "cm" | "mm" | "inch";
    width?: number;
    height?: number;
  };
};

export type Billboard = {
  _id: string;
  _type: "billboard";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  leftTitle?: string;
  leftDescription?: string;
  leftButtonText?: string;
  leftImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  leftType?: "tags" | "categories";
  leftTags?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "tag";
  };
  leftCategories?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "class";
  };
  rightTitle?: string;
  rightDescription?: string;
  rightButtonText?: string;
  rightImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  rightType?: "tags" | "categories";
  rightTags?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "tag";
  };
  rightCategories?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "class";
  };
};

export type Tag = {
  _id: string;
  _type: "tag";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  description?: string;
  slug?: Slug;
  logo?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type Play = {
  _id: string;
  _type: "play";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  buttonText?: string;
  video?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
    };
    _type: "file";
  };
  product?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "goods";
  };
  isShow?: boolean;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Hero = {
  _id: string;
  _type: "hero";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  background?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  buttonText?: string;
  product?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "goods";
  };
  isShow?: boolean;
};

export type Goods = {
  _id: string;
  _type: "goods";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  sku?: string;
  description?: string;
  images?: Array<{
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
    color?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "colorValue";
    };
    _type: "images";
    _key: string;
  }>;
  introduction?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  isOnSale?: boolean;
  class?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "class";
  };
  brand?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "brand";
  };
  tags?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "tag";
  }>;
  origin?: "\u4E2D\u56FD" | "\u65E5\u672C" | "\u97E9\u56FD" | "\u7F8E\u56FD" | "\u82F1\u56FD" | "\u6CD5\u56FD" | "\u5FB7\u56FD" | "\u610F\u5927\u5229" | "\u897F\u73ED\u7259" | "\u5176\u4ED6";
  retailPrice?: number;
  memberPrice?: number;
  wholesalePrice?: number;
  size?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "size";
  }>;
  color?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "colorValue";
  }>;
  weight?: number;
  material?: string;
  packaging?: string;
};

export type Brand = {
  _id: string;
  _type: "brand";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  description?: string;
  logo?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  banner?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  website?: string;
};

export type Class = {
  _id: string;
  _type: "class";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  description?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type ColorValue = {
  _id: string;
  _type: "colorValue";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  color?: Color;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type Header = {
  _id: string;
  _type: "header";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  logo?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  subTitle?: string;
  background?: Color;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Color = {
  _type: "color";
  hex?: string;
  alpha?: number;
  hsl?: HslaColor;
  hsv?: HsvaColor;
  rgb?: RgbaColor;
};

export type RgbaColor = {
  _type: "rgbaColor";
  r?: number;
  g?: number;
  b?: number;
  a?: number;
};

export type HsvaColor = {
  _type: "hsvaColor";
  h?: number;
  s?: number;
  v?: number;
  a?: number;
};

export type HslaColor = {
  _type: "hslaColor";
  h?: number;
  s?: number;
  l?: number;
  a?: number;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | Geopoint | Featured | Comments | Users | Popular | Size | Billboard | Tag | Play | SanityFileAsset | Hero | Goods | Brand | Class | ColorValue | Slug | Header | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata | Color | RgbaColor | HsvaColor | HslaColor;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/query/section.ts
// Variable: QUERY_HEADER
// Query: *[_type == "header"][0]    {_id,title,subTitle,"backgroundColor": background.rgb,"logo": logo.asset->url}
export type QUERY_HEADERResult = {
  _id: string;
  title: string | null;
  subTitle: string | null;
  backgroundColor: RgbaColor | null;
  logo: string | null;
} | null;
// Variable: QUERY_HERO
// Query: *[_type == "hero" && _id == "hero"][0]{  title,buttonText,  "ref":product._ref,  "background":background.asset->url,    isShow,  product->{    name,    origin,    description,    "slug":slug.current,    brand->{       name,       "logo":logo.asset->url    }  }}
export type QUERY_HEROResult = {
  title: string | null;
  buttonText: string | null;
  ref: string | null;
  background: string | null;
  isShow: boolean | null;
  product: {
    name: string | null;
    origin: "\u4E2D\u56FD" | "\u5176\u4ED6" | "\u5FB7\u56FD" | "\u610F\u5927\u5229" | "\u65E5\u672C" | "\u6CD5\u56FD" | "\u7F8E\u56FD" | "\u82F1\u56FD" | "\u897F\u73ED\u7259" | "\u97E9\u56FD" | null;
    description: string | null;
    slug: string | null;
    brand: {
      name: string | null;
      logo: string | null;
    } | null;
  } | null;
} | null;
// Variable: QUERY_PLAY
// Query: *[_type == "play" ][0]{  title,  isShow,  buttonText,  "video":video.asset->url,  product->{    "slug":slug.current,    name,    description  }}
export type QUERY_PLAYResult = {
  title: string | null;
  isShow: boolean | null;
  buttonText: string | null;
  video: string | null;
  product: {
    slug: string | null;
    name: string | null;
    description: string | null;
  } | null;
} | null;
// Variable: QUERY_BILLBOARD
// Query: *[_type == "billboard"][0]{  "leftImage":leftImage.asset->url,  "rightImage":rightImage.asset->url,  leftTitle,  rightTitle,  leftDescription,  rightDescription,  leftButtonText,  rightButtonText,  leftTags->,  rightTags->,  leftCategories->,  rightCategories->    }
export type QUERY_BILLBOARDResult = {
  leftImage: string | null;
  rightImage: string | null;
  leftTitle: string | null;
  rightTitle: string | null;
  leftDescription: string | null;
  rightDescription: string | null;
  leftButtonText: string | null;
  rightButtonText: string | null;
  leftTags: {
    _id: string;
    _type: "tag";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    name?: string;
    description?: string;
    slug?: Slug;
    logo?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
  } | null;
  rightTags: {
    _id: string;
    _type: "tag";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    name?: string;
    description?: string;
    slug?: Slug;
    logo?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
  } | null;
  leftCategories: {
    _id: string;
    _type: "class";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    name?: string;
    slug?: Slug;
    description?: string;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
  } | null;
  rightCategories: {
    _id: string;
    _type: "class";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    name?: string;
    slug?: Slug;
    description?: string;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
  } | null;
} | null;
// Variable: QUERY_POPULAR
// Query: *[_type == "popular" && _id == "popular"][0]{  title,  sku,  "goods":goods[]->{      sku,      name,      retailPrice,      isOnSale,      "image":images[0].image.asset->url  }}
export type QUERY_POPULARResult = {
  title: string | null;
  sku: null;
  goods: Array<{
    sku: string | null;
    name: string | null;
    retailPrice: number | null;
    isOnSale: boolean | null;
    image: string | null;
  }> | null;
} | null;
// Variable: QUERY_COMMENTS
// Query: *[_type == "comments" ]| order(rating desc){  _id,  user->{    lastName,    firstName,  },  "comment":text,  rating,  product->{    name,    slug,    "image":images[0].image.asset->url  }}[0...3]
export type QUERY_COMMENTSResult = Array<{
  _id: string;
  user: {
    lastName: string | null;
    firstName: string | null;
  } | null;
  comment: string | null;
  rating: 1 | 2 | 3 | 4 | 5 | null;
  product: {
    name: string | null;
    slug: Slug | null;
    image: string | null;
  } | null;
}>;
// Variable: QUERY_FEATURED
// Query: *[_type == "featured" && _id == "featured"][0]{  title,  "first":{    "title":first.title,    "description":first.description,    "imageurl":first.image.asset->url,    "slug":select(      first.type == "brand" => first.brand->slug.current,      first.type == "tag" => first.tag->slug.current    )  },  "second":{    "title":first.title,    "description":first.description,    "imageurl":second.image.asset->url,    "slug":select(      second.type == "brand" => second.brand->slug.current,      second.type == "tag" => second.tag->slug.current    )  },}
export type QUERY_FEATUREDResult = {
  title: string | null;
  first: {
    title: string | null;
    description: string | null;
    imageurl: string | null;
    slug: string | null;
  };
  second: {
    title: string | null;
    description: string | null;
    imageurl: string | null;
    slug: string | null;
  };
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type == \"header\"][0]\n    {_id,title,subTitle,\"backgroundColor\": background.rgb,\"logo\": logo.asset->url}": QUERY_HEADERResult;
    "*[_type == \"hero\" && _id == \"hero\"][0]{\n  title,buttonText,\n  \"ref\":product._ref,\n  \"background\":background.asset->url,  \n  isShow,\n  product->{\n    name,\n    origin,\n    description,\n    \"slug\":slug.current,\n    brand->{\n       name,\n       \"logo\":logo.asset->url\n    }\n  }\n}": QUERY_HEROResult;
    "*[_type == \"play\" ][0]{\n  title,\n  isShow,\n  buttonText,\n  \"video\":video.asset->url,\n  product->{\n    \"slug\":slug.current,\n    name,\n    description\n  }\n}": QUERY_PLAYResult;
    "*[_type == \"billboard\"][0]{\n  \"leftImage\":leftImage.asset->url,\n  \"rightImage\":rightImage.asset->url,\n  leftTitle,\n  rightTitle,\n  leftDescription,\n  rightDescription,\n  leftButtonText,\n  rightButtonText,\n  leftTags->,\n  rightTags->,\n  leftCategories->,\n  rightCategories->\n    \n}": QUERY_BILLBOARDResult;
    "*[_type == \"popular\" && _id == \"popular\"][0]{\n  title,\n  sku,\n  \"goods\":goods[]->{\n      sku,\n      name,\n      retailPrice,\n      isOnSale,\n      \"image\":images[0].image.asset->url\n  }\n}": QUERY_POPULARResult;
    "*[_type == \"comments\" ]| order(rating desc){\n  _id,\n  user->{\n    lastName,\n    firstName,\n  },\n  \"comment\":text,\n  rating,\n  product->{\n    name,\n    slug,\n    \"image\":images[0].image.asset->url\n  }\n}[0...3]": QUERY_COMMENTSResult;
    "*[_type == \"featured\" && _id == \"featured\"][0]{\n  title,\n  \"first\":{\n    \"title\":first.title,\n    \"description\":first.description,\n    \"imageurl\":first.image.asset->url,\n    \"slug\":select(\n      first.type == \"brand\" => first.brand->slug.current,\n      first.type == \"tag\" => first.tag->slug.current\n    )\n  },\n  \"second\":{\n    \"title\":first.title,\n    \"description\":first.description,\n    \"imageurl\":second.image.asset->url,\n    \"slug\":select(\n      second.type == \"brand\" => second.brand->slug.current,\n      second.type == \"tag\" => second.tag->slug.current\n    )\n  },\n}": QUERY_FEATUREDResult;
  }
}
