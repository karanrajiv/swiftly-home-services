
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface User {
  email: string;
  name: string;
}

interface Order {
  id: string;
  items: Array<{
    id: string;
    name: string;
    price: number;
    duration: string;
    serviceType: string;
  }>;
  total: number;
  date: string;
  status: string;
}

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
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
      
      // Load user orders
      const userOrders = JSON.parse(localStorage.getItem('userOrders') || '[]');
      setOrders(userOrders);
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 container mx-auto py-16 px-4">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-6xl mx-auto">
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
                {orders.filter(order => order.status === 'confirmed').length > 0 ? (
                  <p className="text-green-600 font-medium">
                    {orders.filter(order => order.status === 'confirmed').length} confirmed booking(s)
                  </p>
                ) : (
                  <p className="text-gray-500">No upcoming appointments.</p>
                )}
              </div>
              
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-medium text-lg mb-2">Total Orders</h3>
                <p className="text-swiftly-blue font-bold text-2xl">{orders.length}</p>
              </div>
            </div>

            {/* Orders History */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Recent Bookings</h3>
              {orders.length > 0 ? (
                <div className="space-y-4">
                  {orders.slice().reverse().map((order) => (
                    <Card key={order.id}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">Order #{order.id.slice(-8)}</CardTitle>
                            <p className="text-sm text-gray-500">{formatDate(order.date)}</p>
                          </div>
                          <Badge variant={order.status === 'confirmed' ? 'default' : 'secondary'}>
                            {order.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                              <div>
                                <p className="font-medium">{item.name}</p>
                                <p className="text-sm text-gray-500">{item.duration}</p>
                                <Badge variant="outline" className="text-xs">
                                  {item.serviceType}
                                </Badge>
                              </div>
                              <p className="font-bold text-swiftly-blue">€{item.price}</p>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between items-center mt-4 pt-4 border-t">
                          <span className="font-bold">Total</span>
                          <span className="font-bold text-lg text-swiftly-blue">€{order.total}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 p-6 rounded-md text-center">
                  <p className="text-gray-500 mb-4">No service history found.</p>
                  <Button onClick={() => navigate('/')} className="bg-swiftly-blue hover:bg-swiftly-darkblue">
                    Book Your First Service
                  </Button>
                </div>
              )}
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
