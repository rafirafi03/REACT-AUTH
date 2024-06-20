import React, {useState, useEffect} from 'react';
import { Table, Button, InputGroup, FormControl, Container, Row, Col, Card } from 'react-bootstrap';
import { FaUserPlus } from 'react-icons/fa';
import axios from 'axios';

const AdminScreen = () => {

  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(()=>{
    fetchUsers()
  },[])

  const fetchUsers = async ()=> {
    try {
      const { data } = await axios.get('http://localhost:5000/api/admin/users')
      console.log(data)
    } catch (error) {
      console.log('error')
    }
  }
  return (
    <Container className="py-5">
      <Row className="justify-content-center mb-4">
        <Col md={8}>
          <Card className="p-4 shadow-sm">
            <h1 className="text-center">Admin Dashboard</h1>
            <InputGroup className="my-3">
              <FormControl
                placeholder="Search Users"
                aria-label="Search Users"
                aria-describedby="basic-addon2"
              />
              <Button variant="primary" className="ms-2">
                <FaUserPlus /> Add User
              </Button>
            </InputGroup>
            <Table striped bordered hover responsive className="table-sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>user id</td>
                  <td>user name</td>
                  <td>user email</td>
                  <td>
                    <Button variant="light" className="btn-sm">
                      Edit
                    </Button>
                  </td>
                </tr>
                {/* Repeat <tr> for other users */}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminScreen;
