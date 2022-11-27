import React from "react";
import Button from "../button/button";

const Card = ({
  variant,
  url,
  alt,
  title,
  body,
  btn,
  btnText,
  classBtn,
  cardClass,
  border,
  classBody,
  classTitle,
  classImg,
}) => {
  return (
    <>
      {/*Image, Button*/}

      {variant == "img" && btn && (
        <div className={`card ${cardClass} ${border}`}>
          <div className="card-top">
            <img className={`${classImg}`} src={url} alt={alt} />
          </div>
          <div className={`${classBody}`}>
            <div className={`${classTitle}`}>{title}</div>
            <div className="card-body">{body}</div>
            <Button
              text="Buy Pizza"
              className="bg-sky-500 text-white rounded w-full my-4 hover:bg-violet-600"
            />
          </div>
        </div>
      )}

      {/*Image*/}

      {variant == "img" && !btn && (
        <div className="card">
          <div className={`card ${cardClass} ${border}`}>
            <img src={img} alt={alt} />
          </div>
          <div className={`${classBody}`}>
            <div className={`${classTitle}`}>{title}</div>
            <div className="card-body">{body}</div>
          </div>
        </div>
      )}

      {/*Without Image, Button*/}

      {variant == "wimg" && btn === true && (
        <div className={`card ${cardClass} ${border}`}>
          <div className={`${classBody}`}>
            <div className={`${classTitle}`}>{title}</div>
            <div className="card-body">{body}</div>
            <Button
              text="Buy Pizza"
              className="bg-sky-500 text-white rounded w-full my-4 hover:text-3xl"
            />
          </div>
        </div>
      )}

      {/*Without Image, without Button*/}

      {variant == "wimg" && btn === false && (
        <div className={`card ${cardClass} ${border}`}>
          <div className="card-top">
            <img src={img} alt={alt} />
          </div>
          <div className={`${classBody}`}>
            <div className={`${classTitle}`}>{title}</div>
            <div className="card-body">{body}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
