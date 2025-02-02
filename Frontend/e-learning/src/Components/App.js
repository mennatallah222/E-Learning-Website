import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './userContext';
import Navbar from './Navbar/navbar';
import Home from './home/home';
import AllCourses from './Courses/allCourses';
import CourseDetail from './Courses/CourseDetail';
import Login from './Login/login';
import Register from './Register/register';
import About from './About/About';
import ProfileStudent from './ProfileManagment/student/ProfileSitting';
import ProfileTrainer from './ProfileManagment/trainer/ProfileSitting';
import UploadCourseForm from './ProfileManagment/trainer/UploadCourseForm';
import Footer from './Footer/Footer';
import Dashboard from './Dashboard/Dashboard';
import TeachersList from './Teachers/TeacherList';
import Upper from './ToUpper/ToUpper';
import { Provider } from 'react-redux';
import store from '../redux/store';
import NotFound from '../NotFound';
function App() {
    return (
        <React.StrictMode>
        <Provider store={store}>
            <UserProvider>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about-us" element={<About />} />
                        <Route path="/courses" element={<AllCourses />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/Register" element={<Register />} />
                        <Route path="/add-course-form" element={<UploadCourseForm />} />
                        <Route path="/profile" element={<ProfileTrainer />} />
                        <Route path="/profile-student" element={<ProfileStudent />} />
                        <Route path="/teacher-profile" element={<ProfileTrainer />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/course/:id" element={<CourseDetail />} />
                        <Route path="/allteachers" element={<TeachersList />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Upper />
                    <section id="Footer" >
                        <Footer />
                    </section>
            </UserProvider>
        </Provider>
        </React.StrictMode>
    );
}

export default App;
