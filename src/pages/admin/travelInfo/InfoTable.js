// import './App.css';
import React, { Component } from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

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
      bus_type: "",
      bus_company: "",
      travel_date: "",
      travel_time: "",
      price: "",
    },
    editInfoData: {
      id: "",
      departure: "",
      destination: "",
      bus_type: "",
      bus_company: "",
      travel_date: "",
      travel_time: "",
      price: "",
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
            bus_type: "",
            bus_company: "",
            travel_date: "",
            travel_time: "",
            price: "",
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
    let {
      departure,
      destination,
      bus_type,
      bus_company,
      travel_date,
      travel_time,
      price,
    } = this.state.editInfoData;
    axios
      .put(apiUrl + "/travel_informations/" + this.state.editInfoData.id, {
        departure,
        destination,
        bus_type,
        bus_company,
        travel_date,
        travel_time,
        price,
      })
      .then((response) => {
        this._refreshInfo();
        this.setState({
          editInfoModal: false,
          editInfoData: {
            id: "",
            departure: "",
            destination: "",
            bus_type: "",
            bus_company: "",
            travel_date: "",
            travel_time: "",
            price: "",
          },
        });
      });
  }

  editInfo(
    id,
    departure,
    destination,
    bus_type,
    bus_company,
    travel_date,
    travel_time,
    price
  ) {
    this.setState({
      editInfoData: {
        id,
        departure,
        destination,
        bus_type,
        bus_company,
        travel_date,
        travel_time,
        price,
      },
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
          {/* <td>{info.id}</td> */}
          <td>{info.departure}</td>
          <td>{info.destination}</td>
          <td>{info.bus_type}</td>
          <td>{info.bus_company}</td>
          <td>{info.travel_date}</td>
          <td>{info.travel_time}</td>
          <td>{info.price}</td>
          <td colSpan={3}>
            <Button
              color='success'
              className='mr-2'
              onClick={this.editInfo.bind(
                this,
                info.id,
                info.departure,
                info.destination,
                info.bus_type,
                info.bus_company,
                info.travel_date,
                info.travel_time,
                info.price
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
      <>
      <Jumbotron fluid className='jumbotron text-white'>
        <Container className='text-center'>
          <h3>
            <Link to='/' className='text-white'>
              Home/
            </Link>
            Travel Information
          </h3>
          <p>Travel-with-benefits social service</p>
        </Container>
      </Jumbotron>
      <div className='container'>
        {/* <h1 className='mt-4'>Travel Information</h1> */}
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
              <Label for='title'>Departure</Label>
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
              <Label for='title1'>Destination</Label>
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

            <FormGroup>
              <Label for='title1'>Bus</Label>
              <Input
                id='title1'
                value={this.state.newInfoData.bus_type}
                onChange={(e) => {
                  let { newInfoData } = this.state;
                  newInfoData.bus_type = e.target.value;
                  this.setState({ newInfoData });
                }}
              />
            </FormGroup>

            <FormGroup>
              <Label for='title1'>Company</Label>
              <Input
                id='title1'
                value={this.state.newInfoData.bus_company}
                onChange={(e) => {
                  let { newInfoData } = this.state;
                  newInfoData.bus_company = e.target.value;
                  this.setState({ newInfoData });
                }}
              />
            </FormGroup>

            <FormGroup>
              <Label for='title1'>Travel Date</Label>
              <Input
                id='title1'
                type='Date'
                value={this.state.newInfoData.travel_date}
                onChange={(e) => {
                  let { newInfoData } = this.state;
                  newInfoData.travel_date = e.target.value;
                  this.setState({ newInfoData });
                }}
              />
            </FormGroup>

            <FormGroup>
              <Label for='title1'>Travel Time</Label>
              <Input
                id='title1'
                value={this.state.newInfoData.travel_time}
                onChange={(e) => {
                  let { newInfoData } = this.state;
                  newInfoData.travel_time = e.target.value;
                  this.setState({ newInfoData });
                }}
              />
            </FormGroup>

            <FormGroup>
              <Label for='title1'>Price</Label>
              <Input
                id='title1'
                value={this.state.newInfoData.price}
                onChange={(e) => {
                  let { newInfoData } = this.state;
                  newInfoData.price = e.target.value;
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
              <Label for='title'>Departure</Label>
              <Input
                value={this.state.editInfoData.departure}
                onChange={(e) => {
                  let { editInfoData } = this.state;
                  editInfoData.departure = e.target.value;
                  this.setState({ editInfoData });
                }}
              />
            </FormGroup>

            <FormGroup>
              <Label for='title1'>Destination</Label>
              <Input
                value={this.state.editInfoData.destination}
                onChange={(e) => {
                  let { editInfoData } = this.state;
                  editInfoData.destination = e.target.value;
                  this.setState({ editInfoData });
                }}
              />
            </FormGroup>

            <FormGroup>
              <Label for='title1'>Bus</Label>
              <Input
                value={this.state.editInfoData.bus_type}
                onChange={(e) => {
                  let { editInfoData } = this.state;
                  editInfoData.bus_type = e.target.value;
                  this.setState({ editInfoData });
                }}
              />
            </FormGroup>

            <FormGroup>
              <Label for='title1'>Company</Label>
              <Input
                value={this.state.editInfoData.bus_company}
                onChange={(e) => {
                  let { editInfoData } = this.state;
                  editInfoData.bus_company = e.target.value;
                  this.setState({ editInfoData });
                }}
              />
            </FormGroup>

            <FormGroup>
              <Label for='title1'>Travel date</Label>
              <Input
              type="Date"
                value={this.state.editInfoData.travel_date}
                onChange={(e) => {
                  let { editInfoData } = this.state;
                  editInfoData.travel_date = e.target.value;
                  this.setState({ editInfoData });
                }}
              />
            </FormGroup>

            <FormGroup>
              <Label for='title1'>Travel time</Label>
              <Input
                value={this.state.editInfoData.travel_time}
                onChange={(e) => {
                  let { editInfoData } = this.state;
                  editInfoData.travel_time = e.target.value;
                  this.setState({ editInfoData });
                }}
              />
            </FormGroup>

            <FormGroup>
              <Label for='title1'>Price</Label>
              <Input
                value={this.state.editInfoData.price}
                onChange={(e) => {
                  let { editInfoData } = this.state;
                  editInfoData.price = e.target.value;
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
              {/* <th>#</th> */}
              <th>First</th>
              <th>Last</th>
              <th>Actions</th>
              <th>First</th>
              <th>Last</th>
              <th>Actions</th>
              <th>First</th>
              <th colSpan={3}>Actions</th>
            </tr>
          </thead>
          <tbody>{infos}</tbody>
        </Table>
      </div>
      </>
    );
  }
}

export default InfoTable;
