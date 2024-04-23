import React, { useState, useEffect } from "react";
import { Box, Text, Button, Flex, Input } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [karaokeText, setKaraokeText] = useState("");
  const [play, setPlay] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (play && index < inputText.length) {
      setTimeout(() => {
        setKaraokeText(karaokeText + inputText[index]);
        setIndex(index + 1);
      }, 300); // Delay of 300ms for karaoke effect
    }
  }, [play, index, inputText, karaokeText]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const startKaraoke = () => {
    setPlay(true);
    setKaraokeText("");
    setIndex(0);
  };

  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh" padding="20px">
      <Input placeholder="Enter text for karaoke" value={inputText} onChange={handleInputChange} marginBottom="20px" width="80%" />
      <Button leftIcon={<FaPlay />} colorScheme="teal" onClick={startKaraoke}>
        Play
      </Button>
      <Box marginTop="20px">
        <Text fontSize="2xl">
          {karaokeText.split("").map((char, i) => (
            <Text as="span" key={i} color={i === index - 1 ? "red.500" : "gray.500"}>
              {char}
            </Text>
          ))}
        </Text>
      </Box>
    </Flex>
  );
};

export default Index;
