import { Layout, theme } from "antd";
import { ReactNode } from "react";
import LayoutFooter from "./Footer/Footer";
import LayoutHeader from "./Header/Header";

const { Header, Content, Footer } = Layout;

const MainLayout = ({ children }: { children: JSX.Element | ReactNode }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <LayoutHeader>LOGO</LayoutHeader>
      <Content>{children}</Content>
      <LayoutFooter>aaa</LayoutFooter>
    </Layout>
  );
};

export default MainLayout;
