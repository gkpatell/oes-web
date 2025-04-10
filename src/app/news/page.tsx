import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, UserIcon } from "lucide-react";
import Image from "next/image";

const featuredNews = [
  {
    title: "Breakthrough in Quantum Computing Achieved",
    excerpt:
      "Researchers at our center have made a significant advancement in quantum computing, paving the way for more stable and efficient quantum systems.",
    image: "/event1.webp",
    date: "2024-03-15",
    category: "Research",
    author: "Dr. Jane Smith",
  },
  {
    title: "New AI Ethics Guidelines Published",
    excerpt:
      "Our AI research team has released a comprehensive set of ethical guidelines for the development and deployment of artificial intelligence systems.",
    image: "/event2.webp",
    date: "2024-03-10",
    category: "Publication",
    author: "Dr. John Doe",
  },
  {
    title: "Advanced Research Center Secures Major Grant",
    excerpt:
      "We're excited to announce that our center has been awarded a $10 million grant to further our research in sustainable energy technologies.",
    image: "/event3.png",
    date: "2024-03-05",
    category: "Funding",
    author: "Prof. Emily Chen",
  },
];

const recentNews = [
  {
    title: "Upcoming Symposium on Climate Change Solutions",
    excerpt:
      "Join us for a two-day symposium featuring leading experts in climate science and sustainable technologies.",
    date: "2024-03-20",
    category: "Event",
  },
  {
    title: "New Collaboration with Tech Industry Leaders",
    excerpt:
      "We're partnering with major tech companies to accelerate the development of next-generation computing technologies.",
    date: "2024-03-18",
    category: "Partnership",
  },
  {
    title: "Student Researcher Wins Prestigious Award",
    excerpt:
      "Congratulations to Sarah Johnson, whose work on machine learning algorithms has earned her the Young Scientist of the Year award.",
    date: "2024-03-12",
    category: "Achievement",
  },
  {
    title: "Open Positions: Join Our Research Teams",
    excerpt:
      "We're hiring talented researchers in various fields. Check out our career opportunities and be part of groundbreaking research.",
    date: "2024-03-08",
    category: "Careers",
  },
];

export default function NewsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">News & Announcements</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredNews.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge>{item.category}</Badge>
                  <div className="text-sm text-gray-500 flex items-center">
                    <CalendarIcon className="mr-1 h-3 w-3" />
                    {item.date}
                  </div>
                </div>
                <CardTitle className="text-xl mt-2">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <UserIcon className="mr-1 h-4 w-4" />
                  {item.author}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Recent News</h2>
          <div className="flex gap-4">
            <Input placeholder="Search news..." className="w-64" />
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="research">Research</SelectItem>
                <SelectItem value="events">Events</SelectItem>
                <SelectItem value="achievements">Achievements</SelectItem>
                <SelectItem value="partnerships">Partnerships</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All News</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div className="space-y-4">
              {recentNews.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{item.title}</CardTitle>
                      <Badge>{item.category}</Badge>
                    </div>
                    <CardDescription className="flex items-center">
                      <CalendarIcon className="mr-1 h-4 w-4" />
                      {item.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{item.excerpt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          {/* Add similar TabsContent for other categories */}
        </Tabs>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Stay Informed</CardTitle>
          <CardDescription>
            Subscribe to our newsletter for the latest updates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex gap-4">
            <Input
              placeholder="Enter your email"
              type="email"
              className="flex-grow"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
