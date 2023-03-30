import { Layout } from "antd";
import { ReactNode } from "react";

const { Header } = Layout;

interface IHeader {
  layoutColor?: string;
  children?: JSX.Element | ReactNode;
}

const LayoutHeader = ({ children, layoutColor }: IHeader) => {
  return (
    <Header
      style={{
        padding: 0,
        background: layoutColor,
        textAlign: "center",
        alignItems: "center",
        color: "#fff",
        fontFamily: "Ubuntu",
        fontSize: "20px",
      }}
    >
      <div className="logo" />
      {children}
    </Header>
  );
};

export default LayoutHeader;
