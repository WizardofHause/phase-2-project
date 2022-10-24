import React from "react"

function SuspectAvatar({ suspect, onDeleteSuspect }) {
    const { id, alias, name, image, description, at_large, category } = suspect

    const handleDeleteClick = () => {
        fetch(`http://localhost:3000/suspects/${id}`, {
          method: "DELETE",
        });
        onDeleteSuspect(suspect)
          .then((r) => console.log(r))
          .then(onDeleteSuspect(suspect));
      };

    return (
        <li className="avatar">
            <figure className="container">
                <h4>{alias}</h4>
                <img className="avatar-img" src={image} alt={alias} />
                <p>{name}</p>
                <p>{description}</p>
                <p>Category: {category}</p>
                {at_large ? (<p>AT LARGE</p>) : (<p>CAPTURED</p>)}
                <button className="button" onClick={handleDeleteClick}>DECEASED</button>
            </figure>
        </li>
    )
}

export default SuspectAvatar