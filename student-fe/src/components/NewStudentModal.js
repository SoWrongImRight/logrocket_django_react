import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewStudentsForm from "./NewStudentForm";

class NewStudentsModal extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState(previous => ({
            model: !previous.modal
        }));
    };

    render() {
        const create = this.props.create;

        var title = "Editing Student";
        var button = <Button onClick={this.toggle}>Edit</Button>;
        if (create) {
            title = "Creating New Student";

            button = (
                <Button
                    color="primary"
                    className="float-right"
                    onClick={this.toggle}
                    style={{ minWidth: "200px"}}
                >
                    Create New                    
                </Button>
            );
        }

        return (
            <Fragment>
                {button}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

                    <ModalBody>
                        <NewStudentsForm
                            resetState={this.props.resetState}
                            toggle={this.toggle}
                            student={this.props.student}
                        />
                    </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}

export default NewStudentsModal;