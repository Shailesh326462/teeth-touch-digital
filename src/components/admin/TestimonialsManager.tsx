
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, Star } from "lucide-react";

interface TestimonialsManagerProps {
  testimonials: any[];
  onAdd: (testimonial: any) => void;
  onDelete: (id: number) => void;
}

const TestimonialsManager = ({ testimonials, onAdd, onDelete }: TestimonialsManagerProps) => {
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    rating: 5,
    comment: "",
    date: new Date().toISOString().split('T')[0],
    isActive: true
  });

  const handleAddTestimonial = () => {
    if (newTestimonial.name && newTestimonial.comment) {
      onAdd(newTestimonial);
      setNewTestimonial({
        name: "",
        rating: 5,
        comment: "",
        date: new Date().toISOString().split('T')[0],
        isActive: true
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Add New Testimonial
            <Plus className="h-5 w-5" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Patient Name"
                value={newTestimonial.name}
                onChange={(e) => setNewTestimonial({...newTestimonial, name: e.target.value})}
              />
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                value={newTestimonial.rating}
                onChange={(e) => setNewTestimonial({...newTestimonial, rating: parseInt(e.target.value)})}
              >
                <option value={5}>5 Stars</option>
                <option value={4}>4 Stars</option>
                <option value={3}>3 Stars</option>
                <option value={2}>2 Stars</option>
                <option value={1}>1 Star</option>
              </select>
            </div>
            <Textarea
              placeholder="Testimonial text"
              value={newTestimonial.comment}
              onChange={(e) => setNewTestimonial({...newTestimonial, comment: e.target.value})}
            />
            <Button onClick={handleAddTestimonial}>
              <Plus className="mr-2 h-4 w-4" />
              Add Testimonial
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Manage Testimonials</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <Badge variant={testimonial.isActive ? "default" : "secondary"}>
                        {testimonial.isActive ? "Active" : "Inactive"}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">"{testimonial.comment}"</p>
                    <p className="text-xs text-gray-500">{testimonial.date}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      onClick={() => onDelete(testimonial.id)}
                      variant="outline"
                      size="sm"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestimonialsManager;
