import React from 'react'
import SignUpFormStyle from './SignUpFormStyle';
import { Form, Input, Button, DatePicker, Select } from "antd";
const { Option } = Select;

const SignUpForm = () => {
    return (
        <SignUpFormStyle>
            {/* Sign Up Form... */}
            <Form className = "sign-up-form" >
                {/* First Name */}
                <Form.Item
                    className = "label"
                    label="First Name"
                    name="fname"
                    rules={[
                    {
                    required: true,
                    message: 'This is a required field!',
                    },
                    ]}
                    >
                    <Input className = "input" placeholder = "First Name" />
                </Form.Item>
                
                {/* Last Name */}
                <Form.Item
                    className = "label"
                    label="Last Name"
                    name="lname"
                    rules={[
                    {
                    required: true,
                    message: 'This is a required field!',
                    },
                    ]}
                    >
                    <Input className = "input" placeholder = "Last Name" />
                </Form.Item>
                
                {/* Date of Birth */}
                
                <Form.Item
                    className = "label"
                    label="Date of Birth"
                    name="DOB"
                    rules={[
                    {
                    required: true,
                    message: 'This is a required field!',
                    },
                    ]}
                    >
                    <DatePicker className = "date" />
                </Form.Item>

                {/* Gender */}

                <Form.Item
                    className = "label"
                    label="Gender"
                    name="gender"
                    rules={[
                    {
                    required: true,
                    message: 'This is a required field!',
                    },
                    ]}
                    >
                    < Select className = "gender-select" defaultValue = "Select Gender" >
                        <Option value = "male" >
                            Male
                        </Option>
                        <Option value = "female" >
                            Female
                        </Option>
                        <Option value = "other" >
                            Other
                        </Option>
                    </Select>
                </Form.Item>

                {/* Phone no. */}

                <Form.Item
                    className = "label"
                    label="Phone No."
                    name="Ph"
                    rules={[
                    {
                    required: true,
                    message: 'This is a required field!',
                    },
                    ]}
                    >
                    <div className="phone-number">
                        <Input />
                    </div>
                </Form.Item>
                
                {/* e-mail */}

                <Form.Item
                    className = "label"
                    label="Email Address"
                    name="email-address"
                    rules={[
                    {
                    required: true,
                    message: 'This is a required field!',
                    type: 'email'
                    },
                    ]}
                >
                    <Input className = "input" placeholder = "Email" />
                </Form.Item>

                {/* Password */}

                <Form.Item
                    className = "label"
                    label="Create Password"
                    name="setPassword"
                    rules={[
                    {
                    required: true,
                    message: 'This is a required field!',
                    },
                    ]}
                >
                    <Input.Password className = "input" placeholder = "Atleast 8 characters" />
                </Form.Item>

                <Form.Item
                    className = "label"
                    label="Confirm Password"
                    name="confirmPassword"
                    rules={[
                    {
                    required: true,
                    message: 'This is a required field!',
                    },
                    ]}
                >
                    <Input.Password className = "input" placeholder = "Confirm Password" />
                </Form.Item>
                
                <Form.Item >
                    <Button type="primary" htmlType="submit" className = "submit" >
                        Login
                    </Button>
                </Form.Item>

            </Form>
        </SignUpFormStyle>
    )
}

export default SignUpForm;