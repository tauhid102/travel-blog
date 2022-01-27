import React from 'react';
import { Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import PrivateRoute from '../Login/PrivateRoute/PrivateRoute';
import AddBlog from './AddBlog/AddBlog';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import MyBlog from './MyBlog/MyBlog';
import MyProfile from './MyProfile/MyProfile';

const Dashboard = () => {
    const { user, logout, admin } = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <div>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/dashboard">Dashboard</Navbar.Brand>

                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto">
                                <Navbar.Text className='me-2'>
                                    {user?.displayName}
                                </Navbar.Text>
                                <Image
                                    className='user-image' src={user?.photoURL}
                                ></Image>
                            </Nav>
                            <Row>
                                <Col xs={6} md={4}>
                                    <Image className='image' src='' roundedCircle />
                                </Col>
                            </Row>
                        </Navbar.Collapse>
                    </Container>

                </Navbar>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12 col-lg-2'>
                        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                            <Container>

                                <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="me-auto flex-column">
                                        <Navbar.Brand as={Link} to="/home" className='border border-dark p-2 rounded-pill'><Image
                                            // className='logo' src={logo}
                                        ></Image>Blog Home</Navbar.Brand>
                                        <Nav.Link className='border-bottom' as={Link} to={`${url}/myprofile`}><i class="fas fa-id-badge"></i> Profile</Nav.Link>
                                        {
                                            admin && <div>
                                                
                                                <Nav.Link className='border-bottom' as={Link} to={`${url}/myblog`}>My Blog</Nav.Link>
                                                <Nav.Link className='border-bottom' as={Link} to={`${url}/addblog`}><i class="fas fa-unlock-alt"></i> Add Blog</Nav.Link>
                                                <Nav.Link className='border-bottom' as={Link} to={`${url}/makeadmin`}><i class="fas fa-unlock-alt"></i> Make Admin</Nav.Link>
                                            </div>
                                        }

                                        {
                                            user?.email ?
                                                <button className="btn btn-dark logout-button" onClick={logout}>Logout</button>
                                                :
                                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                        }
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>

                        </Navbar>
                    </div>

                    <div className='col-sm-12 col-lg-10'>
                        <Switch>
                            <PrivateRoute path={`${url}/myprofile`}>
                                <MyProfile></MyProfile>
                            </PrivateRoute>
                            <AdminRoute path={`${url}/myblog`}>
                                <MyBlog></MyBlog>
                            </AdminRoute>
                            <AdminRoute path={`${url}/addblog`}>
                                <AddBlog></AddBlog>
                            </AdminRoute>
                            <AdminRoute path={`${url}/makeadmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;