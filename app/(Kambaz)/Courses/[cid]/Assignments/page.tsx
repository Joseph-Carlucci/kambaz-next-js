import Link from "next/link";
import { Button, InputGroup, FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import InputGroupText from "react-bootstrap/esm/InputGroupText";

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <InputGroup className="mb-3">
                <InputGroupText>
                    <FaSearch />
                </InputGroupText>
                <FormControl
                    placeholder="Search for Assignments"
                    id="wd-search-assignment"
                />
            </InputGroup>

            <div className="mb-3">
                <Button variant="secondary" className="float-end ms-2" id="wd-add-assignment">
                    <BsPlus /> Assignment
                </Button>
                <Button variant="secondary" className="float-end" id="wd-add-assignment-group">
                    <BsPlus /> Group
                </Button>
            </div>

            <ListGroup className="rounded-0">
                <ListGroupItem className="p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />
                    ASSIGNMENTS 40% of Total
                    <span className="float-end">
                        <BsPlus className="fs-4" />
                        <IoEllipsisVertical className="fs-4" />
                    </span>
                </ListGroupItem>

                <ListGroupItem className="wd-assignment-list-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link text-decoration-none text-dark">
                        <strong>A1 - ENV + HTML</strong>
                    </Link>
                    <span className="float-end">
                        <IoEllipsisVertical className="fs-4" />
                    </span>
                    <br />
                    <span className="ms-5 text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am |
                    <br />
                    <span className="ms-5"><strong>Due</strong> May 13 at 11:59pm | 100 pts</span>
                </ListGroupItem>

                <ListGroupItem className="wd-assignment-list-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    <Link href="/Courses/1234/Assignments/124" className="wd-assignment-link text-decoration-none text-dark">
                        <strong>A2 - CSS + BOOTSTRAP</strong>
                    </Link>
                    <span className="float-end">
                        <IoEllipsisVertical className="fs-4" />
                    </span>
                    <br />
                    <span className="ms-5 text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am |
                    <br />
                    <span className="ms-5"><strong>Due</strong> May 20 at 11:59pm | 100 pts</span>
                </ListGroupItem>

                <ListGroupItem className="wd-assignment-list-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    <Link href="/Courses/1234/Assignments/125" className="wd-assignment-link text-decoration-none text-dark">
                        <strong>A3 - JAVASCRIPT + REACT</strong>
                    </Link>
                    <span className="float-end">
                        <IoEllipsisVertical className="fs-4" />
                    </span>
                    <br />
                    <span className="ms-5 text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00am |
                    <br />
                    <span className="ms-5"><strong>Due</strong> May 27 at 11:59pm | 100 pts</span>
                </ListGroupItem>
            </ListGroup>
        </div>
    );
}