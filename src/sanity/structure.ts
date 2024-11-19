import type { StructureResolver } from "sanity/structure";
// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Website Settings")
    .items([
      ...S.documentTypeListItems().filter((listItem) =>
        ["goods"].includes(listItem.getId() || "")
      ),
      S.divider(),
      // 商品设置 -> 分类、品牌
      S.listItem()
        .id("goodsSettings")
        .title("商品设置")
        .icon(() => "📝")
        .child(
          S.list()
            .title("Filters")
            .items([
              S.listItem()
                .id("classFilter")
                .title("分类")
                .icon(() => "🔖")
                .child(
                  S.documentTypeList("class")
                    .title("分类")
                    .filter("_type == $type")
                    .params({ type: "class" })
                ),
              S.listItem()
                .id("brandFilter")
                .title("品牌")
                .icon(() => "🏷️")
                .child(
                  S.documentTypeList("brand")
                    .title("品牌")
                    .filter("_type == $type")
                    .params({ type: "brand" })
                ),
            ])
        ),
    ]);
