import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, ExternalLink } from "lucide-react";
import Link from "next/link";

const featuredPublications = [
  {
    title: "Quantum Entanglement in Multi-Qubit Systems",
    authors: "Chen, E., Smith, J., & Johnson, M.",
    journal: "Nature Quantum Information",
    year: 2024,
    doi: "10.1038/s41534-024-0123-5",
    abstract:
      "This study explores the complex dynamics of quantum entanglement in systems with multiple qubits, providing new insights into quantum information processing and communication.",
    category: "Quantum Computing",
  },
  {
    title: "AI-Driven Climate Change Mitigation Strategies",
    authors: "Thompson, S., Lee, D., & Garcia, R.",
    journal: "Science",
    year: 2024,
    doi: "10.1126/science.abc1234",
    abstract:
      "We present a novel approach to developing climate change mitigation strategies using advanced AI algorithms, offering more accurate predictions and effective solutions.",
    category: "Climate Science",
  },
  {
    title: "Advancements in CRISPR Gene Editing Techniques",
    authors: "Patel, A., Nguyen, T., & Brown, L.",
    journal: "Cell",
    year: 2023,
    doi: "10.1016/j.cell.2023.09.012",
    abstract:
      "This paper details recent advancements in CRISPR gene editing techniques, improving precision and reducing off-target effects in genetic modifications.",
    category: "Biotechnology",
  },
];

export default function PublicationsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Publications</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Publications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPublications.map((pub, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{pub.title}</CardTitle>
                <CardDescription>{pub.authors}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2">
                  <strong>{pub.journal}</strong>, {pub.year}
                </p>
                <p className="text-sm mb-2">DOI: {pub.doi}</p>
                <p className="text-sm mb-4">{pub.abstract}</p>
                <Badge>{pub.category}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Publication Search</CardTitle>
          <CardDescription>
            Find publications by keyword, author, or year
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <Input placeholder="Search keywords..." className="flex-grow" />
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
              </SelectContent>
            </Select>
            <Button>Search</Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All Publications</TabsTrigger>
          <TabsTrigger value="journal-articles">Journal Articles</TabsTrigger>
          <TabsTrigger value="conference-papers">Conference Papers</TabsTrigger>
          <TabsTrigger value="books">Books & Chapters</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="space-y-4">
            {[
              {
                title: "Machine Learning Approaches in Genomic Data Analysis",
                authors: "Johnson, M. et al.",
                journal: "Bioinformatics",
                year: 2024,
                type: "Journal Article",
              },
              {
                title: "Sustainable Energy Storage Solutions for Smart Grids",
                authors: "Lee, D. et al.",
                conference: "IEEE Power & Energy Society General Meeting",
                year: 2023,
                type: "Conference Paper",
              },
              {
                title: "Quantum Computing: Principles and Practice",
                authors: "Chen, E. & Smith, J.",
                publisher: "Springer",
                year: 2023,
                type: "Book",
              },
              {
                title: "Neuroplasticity in Adult Learning: New Perspectives",
                authors: "Thompson, S. et al.",
                journal: "Neuroscience",
                year: 2024,
                type: "Journal Article",
              },
            ].map((pub, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{pub.title}</CardTitle>
                  <CardDescription>{pub.authors}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-2">
                    {pub.journal || pub.conference || pub.publisher}, {pub.year}
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{pub.type}</Badge>
                    <Button variant="outline" size="sm">
                      <FileText className="mr-2 h-4 w-4" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        {/* Add similar TabsContent for other publication types */}
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Research Repositories</CardTitle>
          <CardDescription>
            Access our open-access repositories and datasets
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="flex items-center text-blue-600 hover:underline"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Advanced Research Center Open Access Repository
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center text-blue-600 hover:underline"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Climate Science Data Portal
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center text-blue-600 hover:underline"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Quantum Computing Simulation Results
              </Link>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
