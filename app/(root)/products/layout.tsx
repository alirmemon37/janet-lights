import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products / Janet Lights",
  description:
    "Choose from wide range of products in different styles and sizes for every space",
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
