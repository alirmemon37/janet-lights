import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create / Janet Lights",
  description: "Add a new product to the Janet Lights store",
};

export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
