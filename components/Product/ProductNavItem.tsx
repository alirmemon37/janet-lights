interface Props {
  label: string;
  active?: boolean;
  onClick: () => void;
}

const ProductNavItem = ({ label, active, onClick }: Props) => {
  return (
    <div
      className={`cursor-pointer ${active ? "font-bold orange_gradient" : ""}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default ProductNavItem;
