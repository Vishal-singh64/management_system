import AddStudent from "../components/addStudent";
import Header from "../components/header";
import StudentList from "../components/studentList";

const Index = () => {



  return (
    <div className="flex-1 bg-green-100">
     <Header />
     <StudentList />
     <AddStudent/>
    </div>
  );
};

export default Index;
