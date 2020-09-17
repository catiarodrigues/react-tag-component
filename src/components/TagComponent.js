import React from 'react'

const TagComponent = () => {
  const [tags, setTags] = React.useState([])
  
  const handleKeyDown = (e) => {
    if(e.keyCode === 13 && e.target.value !== '') {
      const newTag = e.target.value;
      setTags(tags => [...tags, newTag]);
      e.target.value = '';
    }
  }
  
  const removeTag = (index) => {
    const newTags = [...tags]
    if (index !== -1) {
      newTags.splice(index, 1)
      setTags(newTags)
    }
  }
  
  return(
    <>
      <div className="field">
        <label className="label">Tags:</label>
        <input className="input" type="text" placeholder="your tag" onKeyDown={(e) => handleKeyDown(e)} />
        <p className="help">Add a tag by pressing enter</p>
      </div>
      <div className="tags">
        {tags.map((tag, index) => {
          return (
            <span key={index} className="tag is-info is-medium">{tag}
              <button className="delete is-small" onClick={() => removeTag(index)}></button>
            </span>
          )
        })}
      </div>
    </>
  );

}

export default TagComponent
