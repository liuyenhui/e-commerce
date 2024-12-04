import { type SchemaTypeDefinition } from "sanity";
import header from "./section/header";
import goods from "./goods/goods";
import goodsClass from "./goods/group/class";
import goodsBrand from "./goods/group/brand";
import tag from "./goods/group/tag";
import size from "./goods/group/size";
import color from "./goods/group/color";
import hero from "./section/hero";
import play from "./section/play";
import tags from "./section/tags";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    header,
    hero,
    play,
    tags,
    goodsClass,
    goodsBrand,
    tag,
    size,
    color,
    goods,
  ],
};
