import { PageHeader } from '@ant-design/pro-layout';
import { Card, Layout } from 'antd';

const SettingsPage = () => {
  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Settings"
        subTitle="Settings description"
        style={{ background: '#ffff' }}
      />
      <Layout style={{ margin: 24 }}>
        <Card>content</Card>
      </Layout>
    </>
  );
};

export default SettingsPage;
