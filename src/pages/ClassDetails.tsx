import { Header } from "@/components/Header";
import { useParams } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, Video, Globe, BookOpen } from "lucide-react";

const ClassDetails = () => {
  const { id } = useParams();
  
  // In a real application, this would come from an API
  const classes = [
    {
      id: 1,
      title: "Advanced Mathematics",
      description: "Covers calculus, algebra, and trigonometry for college preparation. This comprehensive course is designed to prepare students for college-level mathematics. Topics include advanced algebraic concepts, trigonometric functions and their applications, and an introduction to calculus concepts including limits, derivatives, and basic integration.",
      instructor: "Dr. Sarah Johnson",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      comments: [
        {
          id: 1,
          author: "Alex Thompson",
          content: "How do we approach the limit problems discussed in the video?",
          isVerified: false,
          response: "Start by substituting values close to the limit point from both sides. This helps visualize the behavior of the function.",
          responseAuthor: "Dr. Sarah Johnson",
        },
        {
          id: 2,
          author: "Maria Garcia",
          content: "The trigonometry section was very helpful! Could you elaborate more on the unit circle?",
          isVerified: true,
          response: "I'm glad you found it helpful! The unit circle is fundamental to understanding trigonometry. I'll cover this in more detail in the next lecture.",
          responseAuthor: "Dr. Sarah Johnson",
        }
      ],
      materials: {
        documents: [
          { title: "Calculus Fundamentals", url: "#", size: "2.3 MB" },
          { title: "Practice Problems Set 1", url: "#", size: "1.1 MB" },
        ],
        videos: [
          { title: "Understanding Derivatives", url: "#", duration: "15:30" },
          { title: "Integration Techniques", url: "#", duration: "20:45" },
        ],
        articles: [
          { title: "History of Calculus", url: "#", source: "Mathematics Today" },
          { title: "Real-world Applications", url: "#", source: "Science Weekly" },
        ],
        books: [
          { title: "Advanced Calculus: A Complete Guide", url: "#", author: "Dr. Sarah Johnson" },
          { title: "Trigonometry in Practice", url: "#", author: "Mathematical Society" },
        ],
      }
    },
    {
      id: 2,
      title: "World Literature",
      description: "Explore classic and contemporary works from different cultures.",
      instructor: "Prof. Michael Chen",
      image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      comments: [],
      materials: {
        documents: [],
        videos: [],
        articles: [],
        books: [],
      }
    },
    {
      id: 3,
      title: "Physics Fundamentals",
      description: "Learn mechanics, thermodynamics, and wave motion with hands-on experiments.",
      instructor: "Dr. Robert Miller",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      comments: [],
      materials: {
        documents: [],
        videos: [],
        articles: [],
        books: [],
      }
    },
    {
      id: 4,
      title: "World History",
      description: "Journey through major historical events and civilizations.",
      instructor: "Prof. Emily White",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      comments: [],
      materials: {
        documents: [],
        videos: [],
        articles: [],
        books: [],
      }
    }
  ];

  const classData = classes.find(c => c.id === Number(id));

  if (!classData) {
    return <div>Class not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-education-700">{classData.title}</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="aspect-video mb-8">
                <iframe
                  src={classData.videoUrl}
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Course Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{classData.description}</p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Additional Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="documents">
                      <AccordionTrigger className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Documents
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {classData.materials?.documents.map((doc, index) => (
                            <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                              <span className="text-gray-700">{doc.title}</span>
                              <span className="text-sm text-gray-500">{doc.size}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="videos">
                      <AccordionTrigger className="flex items-center gap-2">
                        <Video className="h-5 w-5" />
                        Additional Videos
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {classData.materials?.videos.map((video, index) => (
                            <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                              <span className="text-gray-700">{video.title}</span>
                              <span className="text-sm text-gray-500">{video.duration}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="articles">
                      <AccordionTrigger className="flex items-center gap-2">
                        <Globe className="h-5 w-5" />
                        Articles
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {classData.materials?.articles.map((article, index) => (
                            <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                              <span className="text-gray-700">{article.title}</span>
                              <span className="text-sm text-gray-500">{article.source}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="books">
                      <AccordionTrigger className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        E-Books
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {classData.materials?.books.map((book, index) => (
                            <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                              <span className="text-gray-700">{book.title}</span>
                              <span className="text-sm text-gray-500">{book.author}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Instructor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${classData.instructor}`} />
                      <AvatarFallback>{classData.instructor[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{classData.instructor}</p>
                      <p className="text-sm text-gray-500">Course Instructor</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Discussion</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {classData.comments.map((comment) => (
                      <div key={comment.id} className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <p className="font-semibold">{comment.author}</p>
                            {comment.isVerified && (
                              <Badge variant="secondary">Verified Student</Badge>
                            )}
                          </div>
                          <p className="text-gray-600">{comment.content}</p>
                        </div>
                        
                        {comment.response && (
                          <div className="pl-6 border-l-2 border-education-200">
                            <div className="flex items-center gap-2 mb-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${comment.responseAuthor}`} />
                                <AvatarFallback>{comment.responseAuthor[0]}</AvatarFallback>
                              </Avatar>
                              <p className="font-semibold text-sm">{comment.responseAuthor}</p>
                              <Badge variant="outline">Instructor</Badge>
                            </div>
                            <p className="text-gray-600">{comment.response}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClassDetails;
