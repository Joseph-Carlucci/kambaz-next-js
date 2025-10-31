"use client";
import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa";
import Breadcrumb from "./Breadcrumb";
import { useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CoursesLayout({ children }: Readonly<{ children: ReactNode }>) {
    const { cid } = useParams();
    const router = useRouter();
    const { courses } = useSelector((state: any) => state.coursesReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const course = courses.find((course: any) => course._id === cid);
    
    useEffect(() => {
        if (currentUser) {
            const isEnrolled = enrollments.some(
                (enrollment: any) =>
                    enrollment.user === currentUser._id &&
                    enrollment.course === cid
            );
            if (!isEnrolled) {
                router.push("/Dashboard");
            }
        }
    }, [currentUser, enrollments, cid, router]);
    
    return (
        <div id="wd-courses">
                <h2 className="text-danger">
                    <FaAlignJustify className="me-4 fs-4 mb-1" />
                    <Breadcrumb course={course} />
                </h2>
            <hr />
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CourseNavigation />
                </div>
                <div className="flex-fill">
                    {children}
                </div>
            </div>
        </div>
    );
}

