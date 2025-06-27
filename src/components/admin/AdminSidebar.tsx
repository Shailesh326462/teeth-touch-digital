
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AdminSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const AdminSidebar = ({ activeTab, onTabChange }: AdminSidebarProps) => {
  const navItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "appointments", label: "Appointments" },
    { id: "services", label: "Manage Services" },
    { id: "testimonials", label: "Testimonials" },
    { id: "doctors", label: "Doctors" },
    { id: "messages", label: "Messages" }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Navigation</CardTitle>
      </CardHeader>
      <CardContent>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                activeTab === item.id ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </CardContent>
    </Card>
  );
};

export default AdminSidebar;
