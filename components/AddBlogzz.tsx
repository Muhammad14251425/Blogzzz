'use client'
import React, { useState } from 'react';
import { Button } from './ui/button'; 
import { revalidatePath } from 'next/cache';
import { redirect, useRouter } from 'next/navigation';
import CheckSession from './CheckSession';
import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';


const AddBlogzz = () => {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [heading1, setHeading1] = useState('');
    const [heading2, setHeading2] = useState('');
    const [heading3, setHeading3] = useState('');
    const [paragraph1, setParagraph1] = useState('');
    const [paragraph2, setParagraph2] = useState('');
    const [paragraph3, setParagraph3] = useState('');
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');

    const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       
    
        try {
            const res = await fetch('/api/blogzzzz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    author,
                    title,
                    headings: [heading1, heading2, heading3],
                    paragraphs: [paragraph1, paragraph2, paragraph3],
                    photos: [image1, image2, image3], 
                }),
            });

            if (!res.ok) {
                throw new Error(`API request failed with status ${res.status}`);
            }
            console.log('Blog post created successfully!');
            // window.location.href = '/';
            redirect("/")
        } catch (error) {
            console.error('Error creating blog post:', error);
        }
    };

    function convertToBase641(e: any) {
        console.log(e);
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setImage1(reader.result as string)
            console.log(reader.result as string);
            
        };
        reader.onerror = error => {
            console.log("Error: ", error);

        }

    }
    function convertToBase642(e: any) {
        console.log(e);
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setImage2(reader.result as string)
        };
        reader.onerror = error => {
            console.log("Error: ", error);

        }

    }
    function convertToBase643(e: any) {
        console.log(e);
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setImage3(reader.result as string)
        };
        reader.onerror = error => {
            console.log("Error: ", error);

        }

    }

    return (
        <div className="h-screen p-8">
            <form className="flex flex-col w-1/4 gap-y-4" onSubmit={HandleSubmit}>
                <div>
                    <h2>Name</h2>
                    <input
                        type="text"
                        onChange={(e) => setAuthor(e.target.value)}
                        value={author}
                        className="border-2 border-black rounded"
                    />
                </div>
                <div>
                    <h2>Title</h2>
                    <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        className="border-2 border-black rounded"
                    />
                </div>
                <div>
                    <h2>Heading 1</h2>
                    <input type="text" onChange={(e) => setHeading1(e.target.value)} value={heading1} className='border-2 border-black rounded' />
                </div>
                <div>
                    <h2>Heading 2</h2>
                    <input type="text" onChange={(e) => setHeading2(e.target.value)} value={heading2} className='border-2 border-black rounded' />
                </div>
                <div>
                    <h2>Heading 3</h2>
                    <input type="text" onChange={(e) => setHeading3(e.target.value)} value={heading3} className='border-2 border-black rounded' />
                </div>
                <div>
                    <h2>paragraph 1</h2>
                    <input type="text" onChange={(e) => setParagraph1(e.target.value)} value={paragraph1} className='border-2 border-black rounded' />
                </div>
                <div>
                    <h2>paragraph 2</h2>
                    <input type="text" onChange={(e) => setParagraph2(e.target.value)} value={paragraph2} className='border-2 border-black rounded' />
                </div>
                <div>
                    <h2>paragraph 3</h2>
                    <input type="text" onChange={(e) => setParagraph3(e.target.value)} value={paragraph3} className='border-2 border-black rounded' />
                </div>
                <div>
                    <h2>Image 1</h2>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={convertToBase641}
                        id="image-1" // Assign unique ID
                        className="border-2 border-black rounded"
                    />
                </div>
                <div>
                    <h2>Image 2</h2>
                   
                    <input
                        type="file"
                        accept="image/*"
                        onChange={convertToBase642}
                        id="image-2" // Assign unique ID
                        className="border-2 border-black rounded"
                    />
                </div>
                <div>
                    <h2>Image 3</h2>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={convertToBase643}
                        id="image-3" // Assign unique ID
                        className="border-2 border-black rounded"
                    />
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default AddBlogzz
