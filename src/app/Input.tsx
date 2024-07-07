import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./Redux/todoSlice";

function Input_g() {
  const [data, setdata] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(data));
    setdata("");
  };

  return (
    <div className="p-5 border w-1/2 rounded-md h-[fit-content] mt-[200px]">
      <form className="space-y-2" onSubmit={handleSubmit}>
        <Label htmlFor="input1">Add Todo</Label>
        <div className="flex gap-1">
          <Input
            id="input1"
            value={data}
            placeholder="Type something"
            onChange={(e) => setdata(e.target.value)}
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
