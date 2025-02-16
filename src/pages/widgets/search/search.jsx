import { useEffect, useRef, useState } from "react";
import {
  Container,
  SearchInput,
  IconRightArrow,
  IconMagnifyingGlass
} from "./styles.jsx";

function Search(props) {
  const targetRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const showSearchInput = isHovered || isFocused;

  useEffect(() => {
    targetRef.current.value = "";
  }, [showSearchInput]);

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      hover={showSearchInput}
    >
      <SearchInput ref={targetRef} onChange={()=>props.getValue(targetRef.current.value)} showSearchInput={showSearchInput} />
      {showSearchInput ? <IconRightArrow /> : <IconMagnifyingGlass />}
    </Container>
  );
}

export default Search;