"use client"
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import Link from "next/link";
import { Button, InputGroup, FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import InputGroupText from "react-bootstrap/esm/InputGroupText";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;
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

                {assignments
                .filter((assignment: any) => assignment.course === cid)
                .map((assignment: any) => (
                    <ListGroupItem key={assignment._id}>
                    <Link href={`/Courses/${cid}/Assignments/${assignment._id}`} className="text-decoration-none text-dark">
                        <div>{assignment.title}</div>
                        <div>Due: {assignment.due}</div>
                        <div>Points: {assignment.points}</div>
                    </Link>
                    </ListGroupItem>
                ))}
            </ListGroup>
        </div>
    );
}