import React from 'react';

const DragDrop = ({ onChange, value }) => {
  const fileReader = new FileReader();

  fileReader.onload = () => onChange({ target: { name: 'base64', value: fileReader.result } });

  let fileInput = null;


  const handleImage = (e) => {
    e.preventDefault();
    const file = (e.target.files || e.dataTransfer.files)[0];
    fileReader.readAsDataURL(file);
    console.log(file);
  };

  const style = value ? { backgroundImage: `url(${value})` } : null;

  return (
    <div className="drag-drop">
      <input
        type="file"
        accept="image/*"
        ref={element => fileInput = element}
        onChange={handleImage}
      />
      <div className="dropzone"
        style={style}
        onDragOver={e => e.preventDefault()}
        onDrop={handleImage}
        onClick={() => fileInput.click()}
      ></div>
    </div>
  );
};


export default DragDrop;
