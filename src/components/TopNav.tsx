import React from "react";
import { Menu, BookOpen, ChevronDown, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface TopNavProps {
  onMenuClick: () => void;
  sidebarOpen: boolean;
}

const courses = [
  { id: "web-development", title: "Web Development" },
  { id: "generative-ai", title: "Generative AI" },
  { id: "data-structures", title: "Data Structures & Algorithms" },
  { id: "blockchain", title: "Blockchain Development" },
];

export const TopNav = ({ onMenuClick, sidebarOpen }: TopNavProps) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleCourseSelect = (courseId: string) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3  sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left side */}

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuClick}
            className="lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Logo and title */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-2 rounded-lg shadow-md">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div>
              {/* on mobile devices, hide the learnhub logo title and the line below it, only display the logo. */}
              <h1 className=" text-md sm:text-xl  font-bold text-gray-900">LearnHub</h1>
              <p className="text-xs text-gray-500 ">Master Technology Skills</p>
            </div>
          </div>
        </div>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Analytics Link */}
          <Link
            to="/analytics"
            className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 font-medium"
          >
            <BarChart3 className="h-4 w-4" />
            <span>Analytics</span>
          </Link>

          {/* DSA Sheet Link */}
          <Link
            to="/dsa-sheet"
            className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 font-medium"
          >
            <span>DSA Sheet</span>
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Mobile Analytics Link */}
          <Link
            to="/analytics"
            className="md:hidden flex items-center space-x-1 px-3 py-2 rounded-lg text-green-600 bg-green-50 font-medium text-sm"
          >
            <BarChart3 className="h-4 w-4" />
            <span className="hidden sm:block ">Analytics</span>
          </Link>
          <div className="hidden  sm:flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center space-x-2 hover:bg-green-50 hover:border-green-200"
                >
                  <span>Courses</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-64 bg-white border border-gray-200 shadow-lg rounded-lg"
              >
                {courses.map((course) => (
                  <DropdownMenuItem
                    key={course.id}
                    onClick={() => handleCourseSelect(course.id)}
                    className="cursor-pointer hover:bg-green-50 p-3 rounded-md mx-1 my-1 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium">{course.title}</span>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Start Learning Button */}
            <Button
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium shadow-md transition-all duration-200 hover:shadow-lg"
              onClick={() => navigate("/start-learning")}
            >
              Start Learning
            </Button>
          </div>
        </div>
      </div>{" "}

{/* courses and start learning button on next row for mobile devices */}

      <div className="flex  justify-center items-center gap-3 my-1 pt-3 sm:hidden ">
        {" "}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center space-x-2 hover:bg-green-50 hover:border-green-200"
            >
              <span>Courses</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-64 bg-white border border-gray-200 shadow-lg rounded-lg"
          >
            {courses.map((course) => (
              <DropdownMenuItem
                key={course.id}
                onClick={() => handleCourseSelect(course.id)}
                className="cursor-pointer hover:bg-green-50 p-3 rounded-md mx-1 my-1 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-medium">{course.title}</span>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        {/* Start Learning Button */}
        <Button
          className="bg-green-600 hover:bg-green-700 text-white  rounded-lg font-medium shadow-md transition-all duration-200 hover:shadow-lg"
          onClick={() => navigate("/start-learning")}
        >
          Start Learning
        </Button>
      </div>
    </nav>
  );
};
