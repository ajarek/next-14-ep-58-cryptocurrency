"use client";


import { useState } from "react";

import axios from "axios";
import { Button } from "./ui/button";
import { Input } from "./ui/input";


const Chatbot = () => {

const [response, setResponse] = useState<string>("Hi there! How can I assist you?");
const [value, setValue] = useState<string>("");
const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleSubmit = async () => {
    try {
      const response = (await axios.post("/api/chat/", { question: value })).data
        .choices[0].message.content;
      setResponse(response);
    } catch (error) {
      console.error("Error in API request:", error);
     
    }
  };

  

return (
    <div className="container">
      <div>
        <Input
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>
      <div>
        <Button  onClick={handleSubmit}>Click me for answers!</Button>
      </div>
      <div>
        <p>Chatbot: {response}</p>
      </div>
    </div>
  );
};

export default Chatbot;