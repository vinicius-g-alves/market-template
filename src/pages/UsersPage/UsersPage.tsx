import { PageHeader } from '@ant-design/pro-layout';
import { Card, Layout } from 'antd';

const UsersPage = () => {
  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Users"
        subTitle="Users description"
        style={{ background: '#ffff' }}
      />
      <Layout style={{ margin: 24 }}>
        <Card>content</Card>
      </Layout>
    </>
  );
};

export default UsersPage;
