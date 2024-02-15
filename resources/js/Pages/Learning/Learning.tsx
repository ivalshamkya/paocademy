import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import MetaHead from '@/components/MetaHead';
import { IoVideocam } from 'react-icons/io5';
import { IoMdVideocam } from 'react-icons/io';
import { Link } from '@inertiajs/react';

export default function Learning({ auth }: PageProps) {


    interface Course {
        title: string;
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

      const course: Course =
        {
          "title": "Introduction to Programming",
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
        }



    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">MyCourse</h2>}
        >
            <MetaHead title='My Course' />

            <div className="py-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            <div className="overflow-hidden bg-white shadow-md dark:bg-gray-800 rounded-lg">
                                <img className="object-cover w-full h-48" src={course.image} alt={course.title} />
                                <div className="p-6">
                                    <h3 className="font-semibold text-xl text-gray-800 dark:text-gray-200 mb-2">{course.title}</h3>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">{course.description}</p>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">Price: {course.price}</p>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">Category: {course.category.name}</p>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">Author: {course.user.name}</p>
                                    <div className="flex justify-between">
                                        <Link href={`/course/${course.title}`} className="text-indigo-600 hover:text-indigo-900">View Course</Link>
                                        <Link href={`/course/${course.title}/progress`} className="text-indigo-600 hover:text-indigo-900">Resume</Link>
                                    </div>
                                </div>
                                <div className="px-6 py-4 bg-gray-100 dark:bg-gray-700">
                                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Chapters</h4>
                                    <ul>
                                        {course.chapters.map((chapter, idx) => (
                                            <li key={idx} className="flex items-center">
                                                <span className="text-gray-700 dark:text-gray-300 mr-2">{idx + 1}.</span>
                                                <span>{chapter.title}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
