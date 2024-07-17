import React from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import Giscus from "@giscus/react"
import OnlineCourses from "./OnlineCourses"
import "./coursesAll.css"

const CourseHome = () => {
  return (
    <>
      <Back title='Explore Courses' />
      <CoursesCard />
      <OnlineCourses />
      {/* <div class="Nishit">
        <h1 className="comment">Comments</h1>
      <Giscus
      id="comments"
      repo="rokad03/FreeTube"
      repoId="R_kgDOKQPW9Q"
      category="Announcements"
      categoryId="DIC_kwDOKQPW9c4CZITm"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
    />  */}
    {/* </div> */}
    </>
  )
}

export default CourseHome
