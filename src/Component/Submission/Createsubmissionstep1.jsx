import React, { useState } from 'react'
import { Cascader, DatePicker, Form, Input, InputNumber, Radio, Select, Switch, TreeSelect } from 'antd';
import 'antd/dist/antd.css';

const Createsubmissionstep1 = () => {
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    return (
        <>
            <div>
                <Form
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    layout="horizontal"
                    initialValues={{
                        size: componentSize,
                    }}
                    onValuesChange={onFormLayoutChange}
                    size={componentSize}
                >

                    <Form.Item label="Name">
                        <Input placeholder='Title IX Survey' style={{ background: 'none' }} />
                    </Form.Item>
                    <Form.Item label="Government Agency" >
                        <Select placeholder='Department of Education' style={{ background: 'none' }} >
                            <Select.Option value="demo" >Demo</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Organization">
                        <Input placeholder='Survey Org' style={{ background: 'none' }} />
                    </Form.Item>

                    <Form.Item label="File Location">
                    <Input placeholder='Survey Org' style={{ background: 'none' }} />
                    </Form.Item>
                    <Form.Item label="Document ID">
                        <Input placeholder='Survey Org' style={{ background: 'none' }} />
                    </Form.Item>
                    <Form.Item label="Select Column">
                        <Select placeholder="Document_ID">
                            <Select.Option value="demo">Demo</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Comment Column">
                        <Select placeholder="Comment">
                            <Select.Option value="demo">Demo</Select.Option>
                        </Select>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}

export default Createsubmissionstep1