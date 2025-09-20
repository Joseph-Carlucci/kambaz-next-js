import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link href="/Courses/1234/Assignments/123" className="wd-dashboard-course-link">
                        <Image
                            src="/images/reactjs.jpg"
                            width={200}
                            height={150}
                            alt="React JS Course"
                        />
                        <div>
                            <h5> CS1234 React JS </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link href="/Courses/1235/Assignments/124" className="wd-dashboard-course-link">
                        <Image
                            src="/images/python.jpg"
                            width={200}
                            height={150}
                            alt="Python Programming Course"
                        />
                        <div>
                            <h5> CS1235 Python Programming </h5>
                            <p className="wd-dashboard-course-title">
                                Data Science and Machine Learning
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link href="/Courses/1236/Assignments/125" className="wd-dashboard-course-link">
                        <Image
                            src="/images/javascript.jpg"
                            width={200}
                            height={150}
                            alt="JavaScript Fundamentals Course"
                        />
                        <div>
                            <h5> CS1236 JavaScript Fundamentals </h5>
                            <p className="wd-dashboard-course-title">
                                Modern Web Development
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link href="/Courses/1237/Assignments/126" className="wd-dashboard-course-link">
                        <Image
                            src="/images/nodejs.jpg"
                            width={200}
                            height={150}
                            alt="Node.js Backend Development Course"
                        />
                        <div>
                            <h5> CS1237 Node.js Backend </h5>
                            <p className="wd-dashboard-course-title">
                                Server-side Development
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link href="/Courses/1238/Assignments/127" className="wd-dashboard-course-link">
                        <Image
                            src="/images/html-css.jpg"
                            width={200}
                            height={150}
                            alt="HTML & CSS Course"
                        />
                        <div>
                            <h5> CS1238 HTML & CSS </h5>
                            <p className="wd-dashboard-course-title">
                                Web Design Fundamentals
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link href="/Courses/1239/Assignments/128" className="wd-dashboard-course-link">
                        <Image
                            src="/images/mongodb.jpg"
                            width={200}
                            height={150}
                            alt="MongoDB Database Course"
                        />
                        <div>
                            <h5> CS1239 MongoDB Database </h5>
                            <p className="wd-dashboard-course-title">
                                NoSQL Database Management
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course">
                    <Link href="/Courses/1240/Assignments/129" className="wd-dashboard-course-link">
                        <Image
                            src="/images/git.jpg"
                            width={200}
                            height={150}
                            alt="Git Version Control Course"
                        />
                        <div>
                            <h5> CS1240 Git Version Control </h5>
                            <p className="wd-dashboard-course-title">
                                Collaborative Development
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}