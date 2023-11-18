import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact / Janet Lights",
  description:
    "Contact us for more information about our products and services",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
