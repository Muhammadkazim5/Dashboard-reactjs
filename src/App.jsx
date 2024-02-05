import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Inputs from "./components/Inputs";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
import Student from "./pages/Student";
import Instructor from "./pages/Instructor";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BasicInfo from "./pages/BasicInfo";
import EditAccount from "./pages/EditAccount";
import ForgetPassword from "./pages/ForgetPassword";
import ProfilePrivacy from "./pages/ProfilePrivacy";
import Subcription from "./pages/Subcription";
import Conversation from "./pages/Conversation";
import Conversation2 from "./pages/Conversation2";
import PayInfo from "./pages/PayInfo";
import PayHistory from "./pages/PayHistory";
import StudentInvoice from "./pages/StudentInvoice";
import EditInvoice from "./pages/EditInvoice";
import UpgradeAccount from "./pages/UpgradeAccount";
import BrowseCourse from "./pages/BrowseCourse";
import ViewCourse from "./pages/ViewCourse";

function App() {
  return (
    <BrowserRouter>
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/student" element={<Student />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/basicinfo" element={<BasicInfo />} />
        <Route path="/profileprivacy" element={<ProfilePrivacy />} />
        <Route path="/subcription" element={<Subcription />} />
        <Route path="/editaccount" element={<EditAccount />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/conversation" element={<Conversation />} />
        <Route path="/conversation2" element={<Conversation2 />} />
        <Route path="/payinfo" element={<PayInfo />} />
        <Route path="/payhistory" element={<PayHistory />} />
        <Route path="/studentinvoice" element={<StudentInvoice />} />
        <Route path="/editinvoice" element={<EditInvoice />} />
        <Route path="/upgradeaccount" element={<UpgradeAccount />} />
        <Route path="/browsecourse" element={<BrowseCourse />} />
        <Route path="/viewcourse" element={<ViewCourse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
