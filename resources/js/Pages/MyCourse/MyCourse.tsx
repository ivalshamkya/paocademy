import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import MetaHead from '@/components/MetaHead';
import { IoVideocam } from 'react-icons/io5';
import { IoMdVideocam } from 'react-icons/io';
import { Link } from '@inertiajs/react';

export default function MyCourse({ auth }: PageProps) {


    interface Course {
        title: string;
        slug: string;
        description: string;
        image: string;
        price: number | string;
        isPublished: boolean;
        created_at: Date;
        category: Category;
        user: User;
        chapters: Chapter[];
      }

      interface Category {
        name: string;
      }

      interface User {
        name: string;
        email: string;
      }

      interface Chapter {
        title: string;
        description: string;
        videoUrl: string;
        position: number;
        isPublished: boolean;
        isFree: boolean;
      }

      const courses: Course[] = [
        {
          "title": "Introduction to Programming",
          "slug": "introduction-to-programming",
          "image": "https://picsum.photos/200",
          "description": "Lorem ipsum dolor sit amet, consectetur adipis",
          "price": "125.000",
          "isPublished": true,
          "created_at": new Date(),
          "category": {
            "name": "Programming"
          },
          "user": {
            "name": "John Doe",
            "email": "john@example.com"
          },
          "chapters": [
            {
              "title": "Getting Started with Python",
              "description": "Introduction to Python programming language.",
              "videoUrl": "https://example.com/python-intro",
              "position": 1,
              "isPublished": true,
              "isFree": true
            },
            {
              "title": "Variables and Data Types",
              "description": "Understanding variables and data types in Python.",
              "videoUrl": "https://example.com/python-variables",
              "position": 2,
              "isPublished": true,
              "isFree": true
            }
          ]
        },
        {
          "title": "Web Development Fundamentals",
          "slug": "web-development-fundamentals",
          "image": "https://picsum.photos/200",
          "description": "Learn the basics of web development.",
          "price": "100.000",
          "isPublished": true,
          "created_at": new Date(),
          "category": {
            "name": "Web Development"
          },
          "user": {
            "name": "Jane Doe",
            "email": "jane@example.com"
          },
          "chapters": [
            {
              "title": "Introduction to HTML",
              "description": "Learn the basics of HTML.",
              "videoUrl": "https://example.com/html-intro",
              "position": 1,
              "isPublished": true,
              "isFree": true
            },
            {
              "title": "Styling with CSS",
              "description": "Introduction to CSS for styling web pages.",
              "videoUrl": "https://example.com/css-styling",
              "position": 2,
              "isPublished": true,
              "isFree": true
            }
          ]
        }
      ]



    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">MyCourse</h2>}
        >
            <MetaHead title='My Course' />

            <div className="py-12">
                <div className="max-w-7xl mx-auto">
                    <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-5 dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        {
                            courses.length > 0 && courses.map(course =>
                                <Link href={`/learning/${course.slug}`}>
                                    <div className="rounded-xl bg-white border transition ease-linear duration-200 hover:scale-[1.025] hover:shadow">
                                        <div className="relative w-full max-h-[125px] md:max-h-[150px] overflow-hidden shadow-inner rounded-t-xl">
                                            <img src={course.image} alt="course image" className="w-full brightness-90" />
                                            <div className="absolute top-0 right-0 py-1 px-4 rounded-bl-lg bg-gradient-to-br from-blue-500 to-blue-600 font-bold text-xs text-white shadow-xl">
                                                New
                                            </div>
                                        </div>
                                        <div className="p-2 md:p-3">
                                            <div className="mb-2 md:mb-3">
                                                <h1 className="text-base md:text-lg text-neutral-900 font-semibold line-clamp-2 tracking-tight mb-1">{course.title}</h1>
                                                <Link href="#" className="text-xs text-neutral-500 hover:underline">{course.user.name}</Link>
                                            </div>
                                            {/* <p className="text-xs md:text-sm mb-2">{course.description}</p> */}
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="my-auto bg-blue-400/20 p-1 rounded-full text-blue-500"><IoMdVideocam /></span>
                                                <h1 className="text-xs mb-1">
                                                    {course.chapters.length} chapters
                                                </h1>
                                            </div>
                                            <h1 className="text-base md:text-lg text-neutral-900 font-black">Rp{course.price}</h1>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
