import { Layout, theme } from "antd";
import { ReactNode } from "react";

const { Footer } = Layout;

const LayoutFooter = ({ children }: { children?: JSX.Element | ReactNode }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Footer style={{ textAlign: "center", background: colorBgContainer }}>
      {children || null}
    </Footer>
  );
};

export default LayoutFooter;
