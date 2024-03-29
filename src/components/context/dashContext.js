import { createContext } from "react";

export const dashContext = createContext({
    currentPage: 1,
    setCurrentPage: () => {},
    perPage: 10,
    handlePageChange: () => {},
    currentCourse: {},
    setSearch: () => {},
    openNewCourseDialog: () => {},
    openEditCourseDialog: () => {},
    openDeleteCourseDialog: () => {},
    createNewUser: () => {},
    courseData: [],
    filteredCourses: [],
    sortCoursesAsc: () => {},
    sortCoursesDes: () => {},
    validator: null,
});
