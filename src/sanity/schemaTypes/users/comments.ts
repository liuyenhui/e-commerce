import { defineField, defineType } from "sanity";
import { Star } from "lucide-react";

export default defineType({
  name: "comments",
  title: "用户评论",
  type: "document",
  fields: [
    defineField({
      name: "text",
      type: "string",
      title: "Text",
    }),
    // 1-5 rating scale
    defineField({
      name: "rating",
      type: "number",
      icon: Star,
      title: "Rating",
      validation: (rule) => rule.integer().min(1).max(5),
      options: {
        list: [
          { value: 1, title: "1" },
          { value: 2, title: "2" },
          { value: 3, title: "3" },
          { value: 4, title: "4" },
          { value: 5, title: "5" },
        ],
      },
    }),
    defineField({
      name: "createdAt",
      type: "date",
      title: "Created At",
    }),
    defineField({
      name: "user",
      type: "reference",
      title: "User",
      to: [{ type: "users" }],
    }),
    defineField({
      name: "product",
      type: "reference",
      title: "Product",
      to: [{ type: "goods" }],
    }),
  ],
  preview: {
    select: {
      firstName: "user.firstName",
      lastName: "user.lastName",
      title: "text",
      rating: "rating",
      media: "product.images.0.image.asset",
    },
    prepare(selection) {
      const { firstName, lastName, title, rating, media } = selection;
      const stars = "★".repeat(rating);
      // const stars = Array(rating)
      //  .fill(0)
      //  .map((_, i) => <Star key={i} color="yellow" />);

      return {
        title: `${firstName} ${lastName} ${stars}`,
        subtitle: `${title} (${rating}) `,
        // media: selection.media,
        media: media,
      };
    },
  },
});
