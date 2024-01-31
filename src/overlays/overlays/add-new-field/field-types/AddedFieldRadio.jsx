import '../addNewField.css';

export default function AddedField({ index, field, onDelete, onEdit }) {
  // Check if field or field.options is undefined
  if (!field) {
    // You can return null or some placeholder if the data is not available
    return null;
  }

  switch (field.type) {
    case 'radio': return (
      <div className='addedfield-container'>
        <p>{index + 1}: {field.title} ({field.type})</p>
        <div className="added-field-radio-btns">
          <p>Options:</p>
          {field.options.map((option, index) => (
            <div key={index}>
              <p>{index + 1}: {option}</p>
            </div>
          ))}
          <button className="delete" onClick={onDelete}>
            Delete
          </button>
          <button className="edit" onClick={onEdit}>
            Edit
          </button>
        </div>
      </div>)
    case 'checkbox': return (
      <div className='addedfield-container'>
        <p>{index + 1}: {field.title} ({field.type})</p>
        <div className="added-field-radio-btns">
          <p>Options:</p>
          {field.options.map((option, index) => (
            <div key={index}>
              <p>{index + 1}: {option}</p>
            </div>
          ))}
          <button className="delete" onClick={onDelete}>
            Delete
          </button>
          <button className="edit" onClick={onEdit}>
            Edit
          </button>
        </div>
      </div>)
    case 'upload': return (
      <div className='addedfield-container'>
        <p>{index + 1}: {field.title} ({field.type})</p>
        <button className="delete" onClick={onDelete}>
          Delete
        </button>
        <button className="edit" onClick={onEdit}>
          Edit
        </button>
      </div>)
    case 'text': return (
      <div className='addedfield-container'>
        <p>{index + 1}: {field.title} ({field.type})</p>
        <button className="delete" onClick={onDelete}>
          Delete
        </button>
        <button className="delete" onClick={onEdit}>
          Edit
        </button>
      </div>)
    case 'team': return (
      <div className='addedfield-container'>
        <p>{index + 1}: {field.title} ({field.type})</p>
        <button className="delete" onClick={onDelete}>
          Delete
        </button>
        <button className="edit" onClick={onEdit}>
          Edit
        </button>
      </div>)
    default: return (
      null
    );
  }
}