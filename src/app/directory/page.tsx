import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, Building } from "lucide-react";

// This would typically come from a database or API
const researchers = [
  {
    name: "Brad Thacker",
    role: "Director of Operations",
    email: "bwt1@rice.edu",
    phone: "+1 (832) 275-0895",
    department: "Operations",
    image: "https://utfs.io/f/aLqPSH9rfhqDaIQnmg9rfhqD02FQVB16zxmJKIoAnEHvp954",
  },
  {
    name: "Dan McGarry",
    role: "Assistant Director of Operations",
    email: "dem13@rice.edu",
    phone: "+1 (555) 987-6543",
    department: "Operations",
    image: "https://utfs.io/f/aLqPSH9rfhqDaIQnmg9rfhqD02FQVB16zxmJKIoAnEHvp954",
  },
  {
    name: "Robert Anderson",
    role: "Shipping and Receiving Coordinator",
    email: "randerson@rice.edu",
    phone: "+1 (713) 348-2729",
    department: "Operations",
    image: "https://utfs.io/f/aLqPSH9rfhqDaIQnmg9rfhqD02FQVB16zxmJKIoAnEHvp954",
  },
];

export default function DirectoryPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">
        O&apos;Connor Building Directory
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Input placeholder="Search Directory..." className="flex-grow" />
        <Select>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Departments</SelectItem>
            <SelectItem value="physics">Physics</SelectItem>
            <SelectItem value="biology">Biology</SelectItem>
            <SelectItem value="cs">Computer Science</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {researchers.map((researcher, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={researcher.image} alt={researcher.name} />
                <AvatarFallback>
                  {researcher.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{researcher.name}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {researcher.role}
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">{researcher.email}</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{researcher.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4" />
                <span className="text-sm">{researcher.department}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
