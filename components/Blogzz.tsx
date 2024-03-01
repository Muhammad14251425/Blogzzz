// import Image from 'next/image'
// import { Button } from './ui/button'
// import Link from 'next/link' 
// import { useEffect, useState } from "react";
// import { data } from 'autoprefixer';
// type Blogzzz = {
//     _id: string;
//     author: string;
//     title: string;
//     photos: string[];
//     headings: string[];
//     paragraphs: string[];
// };
// const getBlogzzz = async (): Promise<Blogzzz[]>=> {
//     try {
//         const res = await fetch(`/api/blogzzzz`)
//     if(!res.ok){
//         throw new Error(`Unable to fetch data`)
//     }
//     return res.json()
    
//     } catch (error) {
//        console.log(error);
//        return []
//     }
// }

// const Blogzz =  () => {
//     const [blogzz,setBlogzz] = useState<Blogzzz[]>([])
//     useEffect(() => {
//         const fetchData = async () => {
//             const data = await getBlogzzz();
//         const dataArray = Object.values(data);
//           setBlogzz(dataArray);
//         }
//     fetchData();
//     },[]);
//     console.log(blogzz);
//     return (
//         <div className="max-w-[1500px]  mx-auto p-8 h-full flex flex-col sm:grid sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-4  items-center">
//           {blogzz?.map((post: Blogzzz) => (
//             <Link key={post._id} href={`/${post._id}`}>
//             <div  className="h-[450px] w-auto border-2 border-gray-600 p-6 sm:p-4 flex flex-col justify-between hover:scale-105 rounded-lg transition-all">
    
//               <Image src={post.photos[0]} alt={post.title} height={1000} width={1000} className="h-[300px] w-auto shadow-md object-cover" />
              
    
//               <h2 className="text-2xl font-bold pt-3">{post.title}</h2>
                
           
//               <p className='truncate'>{post.paragraphs[2]}</p>
            
    
             
//             </div>
//             </Link>
//           ))}
//         </div>
//       );

// }

// export default Blogzz


import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getBlogzzz } from '@/lib/data';

type Blogzzz = {
  _id: string;
  author: string;
  title: string;
  photos: string[];
  headings: string[];
  paragraphs: string[];
};

// const getBlogzzz = async (): Promise<Blogzzz[]> => {
//   try {
//     const res = await fetch(`/api/blogzzzz`);
//     if (!res.ok) {
//       throw new Error(`Unable to fetch data`);
//     }
//     return res.json();
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };
  export const revalidate = 30;
const Blogzz = async () => {
  const data = await getBlogzzz()
  const blogzz = Object.values(data)
  // console.log(blogzz);
  
  // const [blogzz, setBlogzz] = useState<Blogzzz[]>([]);
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null); // Add error state for handling errors

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsPending(true); // Set pending state to true before fetching
  //     try {
  //       const data = await getBlogzzz();
  //       const dataArray = Object.values(data);
  //       setBlogzz(dataArray);
  //     } catch (error) {
  //       // setError(); // Set error state if fetching fails
  //       console.log(error);
        
  //     } finally {
  //       setIsPending(false); // Set pending state to false after fetching
  //     }
  //   };

  //   fetchData();
  // }, []);

  // Render content based on loading and error states
  return (
    <div className="max-w-[1500px] mx-auto p-8 h-full flex flex-col sm:grid sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-4 items-center">
      {/* {isPending && <div className="p-4 text-center">Loading blog posts...</div>} */}
      {/* {error && <div className="p-4 bg-red-200 text-red-600 rounded-lg mb-4">Error: {}</div>} */}
      {blogzz.map((post: Blogzzz) => (
        <Link key={post._id} href={`/${post._id}`}>
          <div className="h-[450px] w-auto border-2 border-gray-600 p-6 sm:p-4 flex flex-col justify-between hover:scale-105 rounded-lg transition-all">
            <Image src={post.photos[0]} alt={post.title} height={1000} width={1000} className="h-[300px] w-auto shadow-md object-cover" />
            <h2 className="text-2xl font-bold pt-3">{post.title}</h2>
            <p className="line-clamp-3">{post.paragraphs[2]}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blogzz;









// import Image from 'next/image';
// import { Button } from './ui/button';
// import Link from 'next/link';
// import { useEffect, useState } from "react";

// type Blogzzz = {
//   _id: string;
//   author: string;
//   title: string;
//   image: string[];
//   headings: string[];
//   paragraphs: string[];
// };

// const getBlogzzz = async (): Promise<Blogzzz[]> => {
//   try {
//     const res = await fetch(`http://localhost:3000/api/blogzzzz`);
//     if (!res.ok) {
//       throw new Error(`Unable to fetch data`);
//     }
//     const data: Blogzzz[] = await res.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//     return []; // Handle potential errors and return an empty array
//   }
// };

// const Blogzz: React.FC = () => {
//   const [blogzz, setBlogzz] = useState<Blogzzz[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//         const data = await getBlogzzz();
//     const dataArray = Object.values(data);
//       setBlogzz(dataArray);
//     };

//     fetchData();
//   },[]);
//   console.log(blogzz);
  

//   return (
//     <div className="max-w-[1500px] mx-auto p-8 h-full flex flex-col sm:grid sm:grid-cols-2 xl:grid-cols-3 gap-x-2 gap-y-2 items-center">
//       {blogzz.length === 0 ? (
//         <p className="text-center">Loading blog posts...</p>
//       ) : (
//         blogzz.map((post) => (
//           <div key={post._id} className="h-[450px] w-auto border-2 border-gray-600 p-6 sm:p-4 flex flex-col justify-between ">
//             <Image
//               src={""} // Handle missing image
//               alt={post.title}
//               height={1000}
//               width={1000}
//               className="h-[300px] w-auto shadow-md"
//             />
//             <h2 className="text-2xl font-bold pt-3">{post.title}</h2>
//             <p>{post.paragraphs.map((item,index)=>(
//                 <div key={index}>
//                     <h2>{item}</h2>
//                 </div>
//             ))}</p>
//             <Link href={`/blogzz/${post._id}`}>
//               <Button variant="outline" className="-mb-2 md:w-1/2 mt-2">
//                 Read More ...
//               </Button>
//             </Link>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Blogzz;
