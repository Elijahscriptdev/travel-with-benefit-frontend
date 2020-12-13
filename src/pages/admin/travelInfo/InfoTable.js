// import './App.css';
import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import axios from "axios";

const apiUrl = "https://travel-backend-api.herokuapp.com";
class InfoTable extends Component {
  state = {
    infos: [],
    newInfoData: {
      departure: "",
      destination: "",
    },
    editInfoData: {
      id: "",
      departure: "",
      destination: "",
    },
    newInfoModal: false,
    editInfoModal: false,
  };

  componentWillMount() {
    this._refreshInfo();
  }

  toggleNewInfoModal() {
    this.setState({
      newInfoModal: !this.state.newInfoModal,
    });
  }

  addInfo() {
    axios
      .post(apiUrl + "/new-travel-information", this.state.newInfoData)
      .then((response) => {
        let { infos } = this.state;
        infos.push(response.data);
        this.setState({
          infos,
          newInfoModal: false,
          newInfoData: {
            departure: "",
            destination: "",
          },
        });
      });
  }

  toggleEditInfoModal() {
    this.setState({
      editInfoModal: !this.state.editInfoModal,
    });
  }

  updateInfo() {
    let { departure, destination } = this.state.editInfoData;
    axios
      .put(apiUrl + "/travel_informations/" + this.state.editInfoData.id, {
        departure,
        destination,
      })
      .then((response) => {
        this._refreshInfo();
        this.setState({
          editInfoModal: false,
          editInfoData: {
            id: "",
            departure: "",
            destination: "",
          },
        });
      });
  }

  editInfo(id, departure, destination) {
    this.setState({
      editInfoData: { id, departure, destination },
      editInfoModal: !this.state.editInfoModal,
    });
  }

  deleteInfo(id) {
    axios.delete(apiUrl + "/travel_informations/" + id).then((response) => {
      this._refreshInfo();
    });
  }

  _refreshInfo() {
    axios.get(apiUrl + "/travel-information").then((response) => {
      this.setState({
        infos: response.data,
      });
    });
  }

  render() {
    let infos = this.state.infos.map((info) => {
      return (
        <tr key={info.id}>
          <td>{info.id}</td>
          <td>{info.departure}</td>
          <td>{info.destination}</td>
          <td>
            <Button
              color='success'
              className='mr-2'
              onClick={this.editInfo.bind(
                this,
                info.id,
                info.departure,
                info.destination
              )}
            >
              Edit
            </Button>
            <Button
              color='danger'
              onClick={this.deleteInfo.bind(this, info.id)}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });

    return (
      <div className='container'>
        <h1 className='mt-4'>Travel Information</h1>
        <Button
          className='my-5'
          color='success'
          onClick={this.toggleNewInfoModal.bind(this)}
        >
          Add Info
        </Button>
        <Modal
          isOpen={this.state.newInfoModal}
          toggle={this.toggleNewInfoModal.bind(this)}
        >
          <ModalHeader toggle={this.toggleNewInfoModal.bind(this)}>
            Add New Info
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for='title'>Title</Label>
              <Input
                id='title'
                value={this.state.newInfoData.departure}
                onChange={(e) => {
                  let { newInfoData } = this.state;
                  newInfoData.departure = e.target.value;
                  this.setState({ newInfoData });
                }}
              />
            </FormGroup>

            <FormGroup>
              <Label for='title1'>Title</Label>
              <Input
                id='title1'
                value={this.state.newInfoData.destination}
                onChange={(e) => {
                  let { newInfoData } = this.state;
                  newInfoData.destination = e.target.value;
                  this.setState({ newInfoData });
                }}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={this.addInfo.bind(this)}>
              Add Info
            </Button>{" "}
            <Button
              color='secondary'
              onClick={this.toggleNewInfoModal.bind(this)}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        <Modal
          isOpen={this.state.editInfoModal}
          toggle={this.toggleEditInfoModal.bind(this)}
        >
          <ModalHeader toggle={this.toggleEditInfoModal.bind(this)}>
            Edit Info
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for='title'>Title</Label>
              <Input
                id='title'
                value={this.state.editInfoData.departure}
                onChange={(e) => {
                  let { editInfoData } = this.state;
                  editInfoData.departure = e.target.value;
                  this.setState({ editInfoData });
                }}
              />
            </FormGroup>

            <FormGroup>
              <Label for='title1'>Title</Label>
              <Input
                id='title1'
                value={this.state.editInfoData.destination}
                onChange={(e) => {
                  let { editInfoData } = this.state;
                  editInfoData.destination = e.target.value;
                  this.setState({ editInfoData });
                }}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={this.updateInfo.bind(this)}>
              Update Info
            </Button>{" "}
            <Button
              color='secondary'
              onClick={this.toggleEditInfoModal.bind(this)}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        <Table className=''>
          <thead>
            <tr>
              <th>#</th>
              <th>First</th>
              <th>Last</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{infos}</tbody>
        </Table>
      </div>
    );
  }
}

export default InfoTable;
