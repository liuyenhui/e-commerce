import type { StructureResolver } from "sanity/structure";
// https://lucide.dev/icons/
import { SquareChevronRight, VideoIcon, CircuitBoardIcon } from "lucide-react";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Website Settings")
    .items([
      ...S.documentTypeListItems().filter((listItem) =>
        ["goods", "users", "comments"].includes(listItem.getId() || "")
      ),
      S.divider(),
      S.listItem()
        .id("pageSettings")
        .title("页面设置")
        .icon(() => "🌐")
        .child(
          S.list()
            .id("pageSettings")
            .title("页面设置")
            .items([
              S.listItem()
                .id("header")
                .title("Header")
                .icon(SquareChevronRight)
                .child(S.document().schemaType("header").documentId("header")),
              S.listItem()
                .id("hero")
                .title("Hero")
                .icon(() => "🎉")
                .child(S.document().schemaType("hero").documentId("hero")),
              S.listItem()
                .id("play")
                .title("Play")
                .icon(VideoIcon)
                .child(S.document().schemaType("play").documentId("play")),
              S.listItem()
                .id("billboard")
                .title("Billboard")
                .icon(CircuitBoardIcon)
                .child(
                  S.document().schemaType("billboard").documentId("billboard")
                ),
              S.listItem()
                .id("popular")
                .title("Popular")
                .icon(() => "👏🏻")
                .child(
                  S.document().schemaType("popular").documentId("popular")
                ),
              S.listItem()
                .id("featured")
                .title("Featured")
                .icon(() => "🎁")
                .child(
                  S.document().schemaType("featured").documentId("featured")
                ),
            ])
        ),
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
              S.listItem()
                .id("tagFilter")
                .title("标签")
                .icon(() => "T")
                .child(
                  S.documentTypeList("tag")
                    .title("标签")
                    .filter("_type == $type")
                    .params({ type: "tag" })
                ),
              S.listItem()
                .id("sizeFilter")
                .title("尺寸")
                .icon(() => "📏")
                .child(
                  S.documentTypeList("size")
                    .title("尺寸")
                    .filter("_type == $type")
                    .params({ type: "size" })
                ),
              S.listItem()
                .id("colorFilter")
                .title("颜色")
                .icon(() => "🎨")
                .child(
                  S.documentTypeList("colorValue")
                    .title("颜色")
                    .filter("_type == $type")
                    .params({ type: "colorValue" })
                ),
            ])
        ),
    ]);
