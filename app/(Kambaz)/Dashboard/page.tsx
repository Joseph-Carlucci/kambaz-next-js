"use client";
import { useState } from "react";
import Link from "next/link";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { enrollInCourse, unenrollFromCourse } from "../Enrollments/reducer";

export default function Dashboard() {
    const { courses } = useSelector((state: any) => state.coursesReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const dispatch = useDispatch();
    const [showAllCourses, setShowAllCourses] = useState(false);
    const [course, setCourse] = useState<any>({
        _id: "0",
        name: "New Course",
        number: "New Number",
        startDate: "YYYY-MM-DD",
        endDate: "YYYY-MM-DD",
        image: "/images/reactjs.jpg",
        description: "New Description"
    });

    const isEnrolled = (courseId: string) => {
        return enrollments.some(
            (enrollment: any) =>
                enrollment.user === currentUser._id &&
                enrollment.course === courseId
        );
    };

    const handleEnroll = (courseId: string) => {
        dispatch(enrollInCourse({ userId: currentUser._id, courseId }));
    };

    const handleUnenroll = (courseId: string) => {
        dispatch(unenrollFromCourse({ userId: currentUser._id, courseId }));
    };

    const displayedCourses = showAllCourses
        ? courses
        : courses.filter((course: any) => isEnrolled(course._id));

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            
            <h5>New Course
                <Button className="float-end" id="wd-add-new-course-click" onClick={() => dispatch(addNewCourse(course))}>
                    Add
                </Button>
                <Button variant="warning" className="float-end me-2" onClick={() => dispatch(updateCourse(course))} id="wd-update-course-click">
                    Update
                </Button>
            </h5>
            <br />

            <FormControl
                value={course.name}
                className="mb-2"
                onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
            <FormControl
                value={course.description}
                as="textarea"
                rows={3}
                onChange={(e) => setCourse({ ...course, description: e.target.value })}
            />
            <hr />

            <h2 id="wd-dashboard-published">
                Published Courses ({courses.length})
                <Button 
                    variant="primary" 
                    className="float-end"
                    onClick={() => setShowAllCourses(!showAllCourses)}
                >
                    {showAllCourses ? "Show Enrolled" : "Enrollments"}
                </Button>
            </h2>
            <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                {displayedCourses.map((course: any) => (
                    <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                    <Card>
                        <Link href={`/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark" >
                        <CardImg src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                        <CardBody className="card-body">
                            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                            {course.name}
                            </CardTitle>
                            <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                            {course.description}
                            </CardText>
                            <Button variant="primary"> Go </Button>
                        </CardBody>
                        </Link>
                        <CardBody>
                            {showAllCourses && (
                                <>
                                    {isEnrolled(course._id) ? (
                                        <Button
                                            onClick={(event) => {
                                                event.preventDefault();
                                                handleUnenroll(course._id);
                                            }}
                                            variant="danger"
                                            className="float-end"
                                        >
                                            Unenroll
                                        </Button>
                                    ) : (
                                        <Button
                                            onClick={(event) => {
                                                event.preventDefault();
                                                handleEnroll(course._id);
                                            }}
                                            variant="success"
                                            className="float-end"
                                        >
                                            Enroll
                                        </Button>
                                    )}
                                </>
                            )}
                            {!showAllCourses && (
                                <>
                                    <Button
                                        onClick={(event) => {
                                            event.preventDefault();
                                            dispatch(deleteCourse(course._id));
                                        }}
                                        variant="danger"
                                        className="float-end"
                                        id="wd-delete-course-click"
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        id="wd-edit-course-click"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }}
                                        variant="warning"
                                        className="me-2 float-end"
                                    >
                                        Edit
                                    </Button>
                                </>
                            )}
                        </CardBody>
                    </Card>
                    </Col>
                ))}
                </Row>
            </div>
        </div>
    );
}