import { ReactNode } from 'react'
import { Layout } from 'antd'

const MainLayout = ({ children }: TMainLayout) => {
    const { Header, Content, Footer } = Layout
    const year = new Date().getFullYear()
    return (
        <Layout
            style={{
                backgroundColor: '#f0f2f5',
            }}
        >
            <Header
                style={{
                    position: 'fixed',
                    zIndex: 1,
                    width: '100%',
                    backgroundColor: '#fff',
                    borderBottom: '1px solid #f0f0f0',
                }}
            />
            <Content
                style={{
                    padding: '0 50px',
                    marginTop: 64,
                }}
            >
                <div style={{ margin: '56px 0' }} />
                <div
                    style={{
                        padding: 24,
                        minHeight: 'calc(100vh - 190px)',
                        backgroundColor: '#fff',
                    }}
                >
                    {children}
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                    backgroundColor: '#f0f2f5',
                }}
            >
                {`© ${year} zaki-hanafiah. All rights reserved.`}
            </Footer>
        </Layout>
    )
}

type TMainLayout = {
    children: ReactNode
}

export default MainLayout
