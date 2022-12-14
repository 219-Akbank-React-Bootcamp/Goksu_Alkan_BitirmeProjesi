import React, { FC, useState } from "react";
import {comment } from "../../../services/http/endpoints/comment";
import { Input, Card } from "../../elements";
import { InputProps } from "../../elements/Input/Input.types";
import { Styled } from "./AddCommentForm.styled";
import { AddCommentFormProps } from "./AddCommentForm.types";

const AddCommentForm: FC<AddCommentFormProps> = (props) => {
 
  const [value, setValue] = useState<string>("");
  const handleChange: InputProps["onChange"] = (e, val) => {
    setValue(val);
  };

  const handleAddComment = (card: any) => {
   props.dispatches.addComment(card);
  };

  const handleAddClick = () => {
    comment.create({
      cardId: props.cardId,
      message: value,
    }).then(({ data }) => {
      handleAddComment(data);
    });
  };

  return (
    <Styled>
      <>
        <Card title="Add Comment">
          <span className="list-span">
          </span>
          <Input
            placeholder="Enter Comment Name"
            type="text"
            onChange={handleChange}
          />
          <button className="add-button" onClick={handleAddClick}>
            Add
            <span className="material-symbols-outlined">library_add</span>
          </button>
        </Card>
      </>
    </Styled>
  );
};

export default AddCommentForm;
