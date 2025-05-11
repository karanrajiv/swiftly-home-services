
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface User {
  email: string;
  name: string;
}

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is logged in
    const userStr = localStorage.getItem("user");
    if (!userStr) {
      navigate("/login");
      return;
    }

    try {
      setUser(JSON.parse(userStr));
    } catch (err) {
      localStorage.removeItem("user");
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast({
      title: "Logged out successfully",
      description: "Come back soon!",
    });
    navigate("/");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 container mx-auto py-16 px-4">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome, {user.name}!</h1>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Dashboard</h2>
              <p className="text-gray-600">
                From here, you can manage your service appointments, view your history,
                and update your profile settings.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-medium text-lg mb-2">Your Upcoming Services</h3>
                <p className="text-gray-500">No upcoming appointments.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-medium text-lg mb-2">Recent Service History</h3>
                <p className="text-gray-500">No service history found.</p>
              </div>
            </div>
            
            <div className="flex justify-end mt-6">
              <Button
                onClick={handleLogout}
                variant="outline"
                className="border-swiftly-blue text-swiftly-blue hover:bg-swiftly-blue/10"
              >
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
