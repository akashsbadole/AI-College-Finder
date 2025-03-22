import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Shield, Clock, Wrench } from "lucide-react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Sidebar from "../../components/Sidebar";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

function AdminPage() {
  const location = useLocation();
  const path = location.pathname.split("/").pop() || "admin";
  const title = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " ");

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{title} | IndianEduAI Admin</title>
        <meta name="description" content="Admin dashboard for IndianEduAI" />
        <meta property="og:title" content={`${title} | IndianEduAI Admin`} />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Header />
      
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:block w-64 min-h-screen bg-white border-r">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold">{title}</h1>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4" />
                <span>Admin Access</span>
              </div>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="bg-white">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Clock className="h-12 w-12 text-indigo-600" />
                  </div>
                  <CardTitle className="text-2xl">Coming Soon</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    We're working hard to bring you this feature. Stay tuned for updates!
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Wrench className="h-4 w-4" />
                    <span>Under Development</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AdminPage; 