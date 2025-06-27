
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MessagesManager = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Messages</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold">Sarah Wilson</h3>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              "I'm interested in learning more about your cosmetic dentistry services..."
            </p>
            <Badge variant="secondary">Unread</Badge>
          </div>
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold">Robert Brown</h3>
              <span className="text-sm text-gray-500">1 day ago</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              "What insurance plans do you accept? I have Delta Dental..."
            </p>
            <Badge>Replied</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MessagesManager;
