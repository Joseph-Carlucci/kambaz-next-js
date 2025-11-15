/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"
import { useParams, useRouter } from "next/navigation";
import { FormControl, FormLabel, FormSelect, FormCheck, Button } from "react-bootstrap";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { setAssignments } from "../reducer";
import { useState, useEffect } from "react";
import * as client from "../../../client";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const router = useRouter();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();
    
    const [assignment, setAssignment] = useState<any>({
        title: "",
        description: "",
        points: 100,
        due: "",
        availableFrom: "",
        availableUntil: "",
        course: cid
    });

    useEffect(() => {
        if (aid !== "new") {
            const existingAssignment = assignments.find((a: any) => a._id === aid);
            if (existingAssignment) {
                setAssignment(existingAssignment);
            }
        }
    }, [aid, assignments]);

    const handleSave = async () => {
        if (aid === "new") {
            const newAssignment = await client.createAssignmentForCourse(cid as string, assignment);
            dispatch(setAssignments([...assignments, newAssignment]));
        } else {
            await client.updateAssignment(assignment);
            const updatedAssignments = assignments.map((a: any) =>
                a._id === assignment._id ? assignment : a
            );
            dispatch(setAssignments(updatedAssignments));
        }
        router.push(`/Courses/${cid}/Assignments`);
    };

    return (
        <div id="wd-assignments-editor">
            <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
            <FormControl 
                id="wd-name" 
                value={assignment.title} 
                onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
                className="mb-3" 
            />

            <FormLabel htmlFor="wd-description">Description</FormLabel>
            <FormControl
                as="textarea"
                id="wd-description"
                rows={5}
                className="mb-3"
                value={assignment.description}
                onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
            />

            <div className="mb-3 row">
                <FormLabel htmlFor="wd-points" className="col-sm-2 col-form-label text-end">Points</FormLabel>
                <div className="col-sm-10">
                    <FormControl 
                        id="wd-points" 
                        type="number"
                        value={assignment.points} 
                        onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })}
                    />
                </div>
            </div>

            <div className="mb-3 row">
                <FormLabel htmlFor="wd-group" className="col-sm-2 col-form-label text-end">Assignment Group</FormLabel>
                <div className="col-sm-10">
                    <FormSelect id="wd-group">
                        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                    </FormSelect>
                </div>
            </div>

            <div className="mb-3 row">
                <FormLabel htmlFor="wd-display-grade-as" className="col-sm-2 col-form-label text-end">Display Grade as</FormLabel>
                <div className="col-sm-10">
                    <FormSelect id="wd-display-grade-as">
                        <option value="Percentage">Percentage</option>
                    </FormSelect>
                </div>
            </div>

            <div className="mb-3 row">
                <FormLabel htmlFor="wd-submission-type" className="col-sm-2 col-form-label text-end">Submission Type</FormLabel>
                <div className="col-sm-10">
                    <FormSelect id="wd-submission-type" className="mb-3">
                        <option value="Online">Online</option>
                    </FormSelect>

                    <FormLabel>Online Entry Options</FormLabel>
                    <FormCheck type="checkbox" id="wd-text-entry" label="Text Entry" />
                    <FormCheck type="checkbox" id="wd-website-url" label="Website URL" />
                    <FormCheck type="checkbox" id="wd-media-recordings" label="Media Recordings" />
                    <FormCheck type="checkbox" id="wd-student-annotation" label="Student Annotation" />
                    <FormCheck type="checkbox" id="wd-file-upload" label="File Uploads" />
                </div>
            </div>

            <div className="mb-3 row">
                <FormLabel htmlFor="wd-assign-to" className="col-sm-2 col-form-label text-end">Assign to</FormLabel>
                <div className="col-sm-10">
                    <FormControl id="wd-assign-to" defaultValue="Everyone" />
                </div>
            </div>

            <div className="mb-3 row">
                <FormLabel htmlFor="wd-due-date" className="col-sm-2 col-form-label text-end">Due</FormLabel>
                <div className="col-sm-10">
                    <FormControl 
                        type="date" 
                        id="wd-due-date" 
                        value={assignment.due} 
                        onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
                    />
                </div>
            </div>

            <div className="mb-3 row">
                <FormLabel htmlFor="wd-available-from" className="col-sm-2 col-form-label text-end">Available From</FormLabel>
                <div className="col-sm-10">
                    <FormControl 
                        type="date" 
                        id="wd-available-from" 
                        value={assignment.availableFrom} 
                        onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
                    />
                </div>
            </div>

            <div className="mb-3 row">
                <FormLabel htmlFor="wd-available-until" className="col-sm-2 col-form-label text-end">Available Until</FormLabel>
                <div className="col-sm-10">
                    <FormControl 
                        type="date" 
                        id="wd-available-until" 
                        value={assignment.availableUntil} 
                        onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}
                    />
                </div>
            </div>

            <hr />
            <div className="float-end">
                <Link href={`/Courses/${cid}/Assignments`}>
                    <Button variant="secondary" className="me-2">Cancel</Button>
                </Link>
                <Button variant="danger" onClick={handleSave}>Save</Button>
            </div>
        </div>
    );
}