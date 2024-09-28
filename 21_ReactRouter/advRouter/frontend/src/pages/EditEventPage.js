import React from "react";
import { useParams } from "react-router-dom";

function EditEventPage() {
  const id = useParams().id;
  return (
    <div>
      <h1>EditEvent : {id}</h1>
    </div>
  );
}

export default EditEventPage;
