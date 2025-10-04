import Link from "next/link";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from "react-bootstrap";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link href="/Courses/1234/Home" className="text-decoration-none text-dark">
                                <CardImg src="/images/reactjs.jpg" height={160} />
                                <CardBody>
                                    <CardTitle>CS1234 React JS</CardTitle>
                                    <CardText>Full Stack software developer</CardText>
                                    <Button>Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link href="/Courses/1234/Home" className="text-decoration-none text-dark">
                                <CardImg src="/images/python.jpg" height={160} />
                                <CardBody>
                                    <CardTitle>CS1235 Python Programming</CardTitle>
                                    <CardText>Data Science and Machine Learning</CardText>
                                    <Button>Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link href="/Courses/1234/Home" className="text-decoration-none text-dark">
                                <CardImg src="/images/javascript.jpg" height={160} />
                                <CardBody>
                                    <CardTitle>CS1236 JavaScript Fundamentals</CardTitle>
                                    <CardText>Modern Web Development</CardText>
                                    <Button>Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link href="/Courses/1234/Home" className="text-decoration-none text-dark">
                                <CardImg src="/images/nodejs.jpg" height={160} />
                                <CardBody>
                                    <CardTitle>CS1237 Node.js Backend</CardTitle>
                                    <CardText>Server-side Development</CardText>
                                    <Button>Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link href="/Courses/1234/Home" className="text-decoration-none text-dark">
                                <CardImg src="/images/html-css.jpg" height={160} />
                                <CardBody>
                                    <CardTitle>CS1238 HTML & CSS</CardTitle>
                                    <CardText>Web Design Fundamentals</CardText>
                                    <Button>Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link href="/Courses/1234/Home" className="text-decoration-none text-dark">
                                <CardImg src="/images/mongodb.jpg" height={160} />
                                <CardBody>
                                    <CardTitle>CS1239 MongoDB Database</CardTitle>
                                    <CardText>NoSQL Database Management</CardText>
                                    <Button>Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link href="/Courses/1234/Home" className="text-decoration-none text-dark">
                                <CardImg src="/images/git.jpg" height={160} />
                                <CardBody>
                                    <CardTitle>CS1240 Git Version Control</CardTitle>
                                    <CardText>Collaborative Development</CardText>
                                    <Button>Go</Button>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}