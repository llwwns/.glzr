import "./style.css";
import { Component } from "solid-js";
import { KeyboardOutput } from "zebar";
import { useAnimatedClick } from "../hooks/useAnimatedClick";

interface KeyboardStatusProps {
  keyboard: KeyboardOutput;
}

const KeyboardStatus: Component<KeyboardStatusProps> = (props) => {
  const { isActive, handleClick } = useAnimatedClick();

  const handleMemoryClick = () => {
    handleClick();
  };
  return (
    <button
      classList={{
        keyboard: true,
        "clicked-animated": isActive(),
      }}
      onClick={handleMemoryClick}
    >
      <span class="content">
        <span class="i">{"\uf11c"}&nbsp;</span>
        <span class="mem-bar">{props.keyboard.layout.substring(0, 2)}</span>
      </span>
    </button >
  );
};

export default KeyboardStatus;
