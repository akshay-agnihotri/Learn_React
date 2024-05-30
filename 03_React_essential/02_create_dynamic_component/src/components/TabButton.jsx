export default function TabButton({ onSelect,children, isSelected }){
    return (
      <button className={isSelected ? 'active':null} onClick={onSelect}>{children}</button>
    );
}