'use client'

import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Switch,
  Upload,
} from 'antd'

import Icons from './Icons'

export default function FormComponent() {
  return (
    <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal">
      <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
        <Checkbox>Checkbox</Checkbox>
      </Form.Item>
      <Form.Item label="DatePicker">
        <DatePicker />
      </Form.Item>
      <Form.Item label="RangePicker">
        <DatePicker.RangePicker />
      </Form.Item>
      <Form.Item label="InputNumber">
        <InputNumber />
      </Form.Item>
      <Form.Item label="TextArea">
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label="Upload" valuePropName="fileList">
        <Upload action="/upload.do" listType="picture-card">
          <div>
            <Icons.Plus className="m-auto" />
            <div className="mt-2">Upload</div>
          </div>
        </Upload>
      </Form.Item>
      <Form.Item label="Button">
        <Button type="primary">Button</Button>
      </Form.Item>
    </Form>
  )
}
