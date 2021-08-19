import { Global } from "pages/home/components/styles/GlobalWrapper.styles";

const GlobalWrapper = ({ children }) => {
    return (
      <>
        <Global />
        {children}
      </>
    )
};

export default GlobalWrapper;