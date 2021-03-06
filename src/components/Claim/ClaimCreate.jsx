import React, { Component } from "react";
import axios from "axios";
import { Editor, EditorState, ContentState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import { stateFromHTML } from "draft-js-import-html";
import "draft-js/dist/Draft.css";
import { Typography, Form, Input, Button, message, Row, Col } from "antd";

const { Title } = Typography;
class ClaimCreate extends Component {
    formRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            editorState: EditorState.createEmpty()
        };
        this.saveClaim = this.saveClaim.bind(this);
        this.updateClaim = this.updateClaim.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount() {
        if (this.props.edit) {
            axios
                .get(
                    `${process.env.API_URL}/claim/${this.props.match.params.claimId}`
                )
                .then(response => {
                    const { content, title } = response.data;
                    const editorState = EditorState.createWithContent(
                        stateFromHTML(content.html)
                    );
                    this.setState(
                        {
                            title,
                            editorState,
                            content: stateToHTML(
                                this.state.editorState.getCurrentContent()
                            )
                        },
                        () => {
                            this.formRef.current.setFieldsValue({
                                title,
                                content: this.state.content
                            });
                        }
                    );
                })
                .catch(err => {
                    throw err;
                    console.log("Error while fetching claim");
                });
        }
    }

    saveClaim(values) {
        console.log(values);
        const content = stateToHTML(this.state.editorState.getCurrentContent());
        const title = this.state.title;
        const personality = this.props.match.params.id;
        axios
            .post(`${process.env.API_URL}/claim`, {
                title,
                content,
                personality
            })
            .then(response => {
                const { title, _id } = response.data;
                message.success(`"${title}" created with success`);
                // Redirect to personality profile in case _id is not present
                const path = _id ? `./${_id}` : "../";
                this.props.history.push(path);
            })
            .catch(err => {
                const response = err && err.response;
                if (!response) {
                    // TODO: Track unknow errors
                    console.log(err);
                }
                const { data } = response;
                message.error(
                    data && data.message
                        ? data.message
                        : "Error while saving claim"
                );
            });
    }

    updateClaim(values) {
        const content = stateToHTML(this.state.editorState.getCurrentContent());
        const title = this.state.title;
        axios
            .put(
                `${process.env.API_URL}/claim/${this.props.match.params.claimId}`,
                {
                    title,
                    content
                }
            )
            .then(response => {
                const { title, _id } = response.data;
                message.success(`"${title}" updated with success`);
                // Redirect to personality profile in case _id is not present
                const path = "./";
                this.props.history.push(path);
            })
            .catch(err => {
                const response = err && err.response;
                if (!response) {
                    // TODO: Track unknow errors
                    console.log(err);
                }
                const { data } = response;
                message.error(
                    data && data.message
                        ? data.message
                        : "Error while updating claim"
                );
            });
    }

    onChange(editorState) {
        this.setState({ editorState }, () => {
            if (this.formRef.current) {
                this.formRef.current.setFieldsValue({
                    content: stateToHTML(
                        this.state.editorState.getCurrentContent()
                    )
                });
            }
        });
    }

    render() {
        return (
            <>
                <Row gutter={[32, 0]}>
                    <Col span={24}>
                        <Title level={2}>
                            <center>Create Claim</center>
                        </Title>
                        <Form
                            ref={this.formRef}
                            id="createClaim"
                            onFinish={
                                this.props.edit
                                    ? this.updateClaim
                                    : this.saveClaim
                            }
                        >
                            <Form.Item
                                name="title"
                                label="Title"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please insert a title"
                                    }
                                ]}
                                wrapperCol={{ sm: 24 }}
                                style={{
                                    width: "100%"
                                }}
                            >
                                <Input
                                    value={
                                        (this.state && this.state.title) || ""
                                    }
                                    onChange={e =>
                                        this.setState({ title: e.target.value })
                                    }
                                    placeholder={"Some Title"}
                                />
                            </Form.Item>
                            <Form.Item
                                name="content"
                                label="Content"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please insert the content"
                                    }
                                ]}
                                wrapperCol={{ sm: 24 }}
                                style={{
                                    width: "100%"
                                }}
                            >
                                <div className="ant-input">
                                    <Editor
                                        placeholder="Claim"
                                        editorState={this.state && this.state.editorState}
                                        onChange={this.onChange}
                                    />
                                </div>
                            </Form.Item>
                            <Form.Item>
                                {this.props.edit ? (
                                    <Button type="primary" htmlType="submit">
                                        Update
                                    </Button>
                                ) : (
                                    <Button type="primary" htmlType="submit">
                                        Save
                                    </Button>
                                )}
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </>
        );
    }
}

export default ClaimCreate;
