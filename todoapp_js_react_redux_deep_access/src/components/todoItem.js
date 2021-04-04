export const TodoItem = ({
  todo: { text, id, checked },
  onCheck,
  onDelete
}) => {
  const onClose = e => {
    e.stopPropagation();
    onDelete(id, e);
  };

  return (
    <li
      title={new Date(id)}
      className={checked ? "checked" : ""}
      onClick={() => onCheck(id)}
    >
      {text}
      <span className="close" onClick={onClose}>
        ×
      </span>
    </li>
  );
};
