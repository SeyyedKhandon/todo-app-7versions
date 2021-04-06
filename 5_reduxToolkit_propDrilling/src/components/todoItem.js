export const TodoItem = ({
  todo: { text, id, checked },
  onCheck,
  onDelete
}) => {
  const onClose = e => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <li
      title={new Date(id)}
      className={checked ? "checked" : ""}
      onClick={onCheck}
    >
      {text}
      <span className="close" onClick={onClose}>
        ×
      </span>
    </li>
  );
};
