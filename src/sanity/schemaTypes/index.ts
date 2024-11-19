import { type SchemaTypeDefinition } from "sanity";
import header from "./section/header";
import goods from "./goods/goods";
import goodsClass from "./goods/group/class";
import goodsBrand from "./goods/group/brand";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [header, goodsClass, goodsBrand, goods],
};
