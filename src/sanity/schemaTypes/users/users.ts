import { defineField, defineType } from "sanity";
import { UserCircle } from "lucide-react";
import { countries } from "./countries";

export default defineType({
  name: "users",
  title: "用户信息",
  icon: UserCircle,

  type: "document",
  fields: [
    defineField({
      name: "firstName",
      type: "string",
      title: "First Name",
    }),
    defineField({
      name: "lastName",
      type: "string",
      title: "Last Name",
    }),
    defineField({
      name: "email",
      type: "string",
      title: "Email",
    }),
    defineField({
      name: "password",
      type: "string",
      title: "Password",
    }),
    defineField({
      name: "accountType",
      type: "array",
      title: "Account Type",
      of: [
        {
          type: "string",
          options: [
            { value: "google", title: "Google" },
            { value: "email", title: "Email" },
          ],
        },
      ],
    }),
    defineField({
      name: "registrationDate",
      type: "date",
      title: "Registration Date",
    }),
    defineField({
      name: "registrationType",
      type: "string",
      title: "Registration Type",
      options: {
        list: [
          { value: "google", title: "Google" },
          { value: "email", title: "Email" },
        ],
      },
    }),
    defineField({
      name: "phone",
      type: "string",
      title: "Phone",
    }),
    defineField({
      name: "address",
      type: "string",
      title: "Address",
    }),
    defineField({
      name: "city",
      type: "string",
      title: "City",
    }),
    defineField({
      name: "state",
      type: "string",
      title: "State",
    }),
    defineField({
      name: "country",
      type: "string",
      title: "Country",
      options: {
        list: countries,
      },
    }),

    defineField({
      name: "zip",
      type: "string",
      title: "Zip",
    }),
    defineField({
      name: "creditCards",
      type: "array",
      title: "Credit Cards",
      of: [
        {
          type: "object",
          name: "creditCard",
          fields: [
            defineField({
              name: "cardType",
              type: "string",
              title: "Card Type",
              options: {
                list: [
                  { value: "visa", title: "Visa" },
                  { value: "mastercard", title: "Mastercard" },
                  { value: "amex", title: "American Express" },
                ],
              },
            }),
            defineField({
              name: "cardNumber",
              type: "string",
              title: "Card Number",
            }),
            defineField({
              name: "expirationDate",
              type: "string",
              title: "Expiration Date",
            }),
            defineField({
              name: "cvv",
              type: "string",
              title: "CVV",
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      firstName: "firstName",
      lastName: "lastName",
      email: "email",
    },
    prepare(selection) {
      const { firstName, lastName, email } = selection;
      return {
        title: `${firstName} ${lastName}`,
        subtitle: email,
      };
    },
  },
});
