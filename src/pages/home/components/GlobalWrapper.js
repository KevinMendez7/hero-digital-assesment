import { Global } from "./styles/GlobalWrapper.styles";

const GlobalWrapper = ({ children }) => {
    return (
      <>
        <Global />
        {children}
      </>
    )
};

export default GlobalWrapper;