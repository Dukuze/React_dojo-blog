import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}

export default Home;
 
// Lesson 24 voir bloc note 

// import { useEffect, useState } from "react";

// Lesson --> 20

 // const [blogs, setBlogs] = useState(null);
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch('http://localhost:8000/blogs')
  //     .then(res => {
  //       if (!res.ok) { // error coming back from server
  //         throw Error('could not fetch the data for that resource');
  //       } 
  //       return res.json();
  //     })
  //     .then(data => {
  //       setIsPending(false);
  //       setBlogs(data);
  //       setError(null);
  //     })
  //     .catch(err => {
  //       // auto catches network / connection error
  //       setIsPending(false);
  //       setError(err.message);
  //     })
  //   }, 1000);
  // }, [])

// Lesson 14 / 15 useEffect

// const [name, setName] = useState('mario');

// const handleDelete = (id) => {
//   const newBlogs = blogs.filter(blog => blog.id !== id);
//   setBlogs(newBlogs);
// }

// useEffect(() =>{
//   console.log('use effect ran');
//   console.log(name);
// }, [name]);

// return (
//   <div className="home">
//     <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
//     <button onClick ={() =>  setName('luigi')}>change name</button>
//   </div>
// );
// }

// Lesson 13 Function as Props

// const handleDelete = (id) => {
//   const newBlogs = blogs.filter(blog => blog.id !== id);
//   setBlogs(newBlogs);
// }
  
//     return (
//       <div className="home">
//         <BlogList blogs={blogs} title="All Blogs" />

//         {/* Lesson 12 */}
//         <BlogList blogs={blogs.filter((blog) => blog.author ==='mario')} title="Mario Blogs" />
//       </div>
//     );
//   }

// import { useState } from "react";
// // Lesson Props

// import BlogList from "./BlogList";
// // Lesson 10 Outputting lists

// const Home = () => {
//     const [blogs, setBlogs] = useState([
//       { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//       { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//       { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//     ]);



   
//   export default Home;
 

// Lesson 8 Hook and Usestate

// const Home = () => {
//     // let name = "mario";
//     const [name, setName] = useState("mario");
//     const [age, setAge] = useState(25);

//     const handleClick= ()  => {
//         setName('luigi');
//         setAge(30);
// }

//     return ( 
       
//         <div className="home">
//             <h2>HomePage</h2>
//             <p>{name} is {age} years olds</p>
//             <button onClick= {handleClick}>Click Me</button>
//      </div> 
//      );

//     }
// export default Home ;     

    

// Lesson 7

// const Home = () => {
     
//     const handleClick = (e) => {
//         console.log ("hello ninjas", e);
//     }

//     const handleClickAgain = (name) => {
//         console.log ("hello" + name);
//     }



//     return ( 
//         <div className="home">

//             <h2>HomePage</h2>

// <button onClick={handleClick}>Click Me</button>
// <button onClick = {() => 
//     handleClickAgain("mario")}>Click Me Again</button>

//             </div>
//      );
// }
 
// export default Home;