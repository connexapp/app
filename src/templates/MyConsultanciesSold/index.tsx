import { useEffect, useState } from 'react'
import useRequest, { useRequestConfig } from 'hooks/useRequest'
import Menu from 'components/Menu'
import Banner from 'components/Banner'
import React from 'react'
import * as S from './styles'
import Footer from 'components/Footer'
import { useContext } from 'react'
import { AuthContext } from 'context/AuthContext'
import { Form, Input, Table, Space, Modal } from 'antd';
import { ConsultancyInfoBoxTitle } from 'components/ConsultancyBanner/styles'

class Demo extends React.Component {
  state = {
    top: 'topLeft',
    bottom: 'bottomRight',
  };
}

const MyConsultanciesSold = () => {
  const [myConsultanciesSold, setMyConsultanciesSold] = useState([])
  const { request } = useRequest()
  const userLogged = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dataModal, setDataModal] = useState();
  const [meet, setMett] = useState('');

  useEffect(() => {
    if(userLogged.user){
      const getMyServices = async () => {
        const config: useRequestConfig = {
          method: 'GET',
          url: `/schedule/getConsultanciesSold/${userLogged.user.id}`
        }
        const response = await request(config)
        if(response.error){
          setMyConsultanciesSold([])
          return
        }
        console.log(111111111, {response})
        setMyConsultanciesSold(response)
      }
  
      getMyServices()
    }
  }, [])

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const openModal = (scheduleId) => {
    console.log('scheduleId', scheduleId)
    setIsModalVisible(!isModalVisible);
    setDataModal(scheduleId)
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    const bla = meet.split('/')
    const indexx = bla.length - 1
    const getMyServices = async () => {
      const config: useRequestConfig = {
        method: 'POST',
        url: `/schedule/meet/4334/${bla[indexx]}`,
        sendToken: true
      }
      
      const response = await request(config)
        console.log('sasdasd', response)
        
      // setMyConsultanciesSold(response)
    
    }
    getMyServices()
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const columns = [
    {
      title: 'Nome do Cliente',
      dataIndex: 'nomeCliente',
      key: 'nomeCliente',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Horário',
      dataIndex: 'hourStart',
      key: 'hourStart',
      render: (text, record) =>(
        <Space size="middle">
          <S.PTable>{text}-{record.hourEnd}</S.PTable>
        </Space>
      )
    },
    {
      title: 'Consultoria Comprada',
      dataIndex: 'nomeServico',
      key: 'nomeServico',
    },
    {
      title: 'Reunião',
      dataIndex: 'scheduleId',
      key: 'scheduleId',
      render: (text, record) => (
        <Space size="middle">
          <S.PTable><S.ATable target="_blank" href="https://meet.google.com/new"  onClick={() => openModal(text)}>Meet com</S.ATable> {record.nomeCliente}</S.PTable>
        </Space>
      ),
    },
  ];

  return (
    <>
      <header>
        <Menu />
      </header>
      <section>
        <Banner box={false} />
      </section>
      <S.containerTable>
        <Table
          columns={columns}
          dataSource={myConsultanciesSold}
          pagination={{ pageSize: 10 }}
          loading={isLoading}
        />
      </S.containerTable>
      <Footer bottom={false} />
        <Modal title="Inserir link da meet" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Link Meet"
            name="linkMeet"
            rules={[{ required: true, message: 'insira o link da meet!' }]}
          >
            <Input placeholder='EX: meet.google.com/vex-rqye-nyw ' onChange={(e) => setMett(e.target.value)} />
          </Form.Item>
          
        </Form>
        </Modal>
    </>
  )
}

export default MyConsultanciesSold
