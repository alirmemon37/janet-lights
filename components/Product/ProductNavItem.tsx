import React from "react";

interface ProductNavItemProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const ProductNavItem = ({ label, active, onClick }: ProductNavItemProps) => {
  return (
    <div
      className={`cursor-pointer ${active ? "font-bold" : ""}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default ProductNavItem;
