import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/esm/Button";
import { useMediaQuery } from "usehooks-ts";

import { TextInput } from "../../TextInput";
import { TextArea } from "../../TextArea";
import { useState } from "react";

export const MessageForm = () => {
  const [message, setMessage] = useState("");
  const isAbove500w = useMediaQuery("(min-width: 500px)");
  const isAbove750w = useMediaQuery("(min-width: 750px)");

  return (
    <Stack
      style={{
        maxWidth: "80%",
        width: isAbove750w ? "420px" : isAbove500w ? "300px" : undefined,
        alignSelf: "center",
      }}
      gap={2}
    >
      <TextArea
        id={"message"}
        placeholder={"Escreva uma mensagem"}
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <TextInput id={"name"} placeholder={"Nome"} />
      <Button
        style={{
          width: "38%",
          alignSelf: "flex-end",
        }}
      >
        ENVIAR
      </Button>
    </Stack>
  );
};
