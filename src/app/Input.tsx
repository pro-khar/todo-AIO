import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./Redux/todoSlice";

function Input_g() {
  const [data, setData] = useState({ title: "", gender: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(data));
    setData({ title: "", gender: "" });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div className="p-5 border w-1/2 rounded-md h-[fit-content] mt-[200px]">
      <form className="space-y-2" onSubmit={handleSubmit}>
        <Label htmlFor="title">Add Todo</Label>
        <div className="flex gap-1">
          <Input
            id="title"
            value={data.title}
            placeholder="Type title"
            onChange={handleChange}
            required
          />
          <Input
            id="gender"
            value={data.gender}
            placeholder="Type gender"
            onChange={handleChange}
            required
          />
          <Button className="w-1/3" type="submit">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Input_g;
