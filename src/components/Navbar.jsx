import { NavLink } from 'react-router-dom';
// import {
//     NavigationMenu,
//     // NavigationMenuContent,
//     NavigationMenuItem,
//     NavigationMenuLink,
//     NavigationMenuList,
//     // NavigationMenuTrigger,
//   } from "@/components/ui/navigation-menu"


const Navbar = () => {
  return (
    // <div className="flex items-start justify-start bg-black text-white ">
    //     <NavigationMenu className="max-w-screen">
    //         <NavigationMenuList className="flex items-center justify-between p-6">

    //             <NavigationMenuItem className="font-bold text-lg text-white">  
    //                 <NavigationMenuLink href="/" className="hover:text-gray-300">Mental Wellness</NavigationMenuLink>
    //             </NavigationMenuItem>
       

    //             {/* all navigation links */}
    //             <div className="space-x-6 p-3"> 
    //                 <NavigationMenuItem>
    //                     <NavigationMenuLink href="/" className="text-white hover:text-gray-300">Home</NavigationMenuLink>
    //                 </NavigationMenuItem>
    //                 <NavigationMenuItem>
    //                     <NavigationMenuLink href="/journal" className="text-white hover:text-gray-300">Journal</NavigationMenuLink>
    //                 </NavigationMenuItem>
    //                 <NavigationMenuItem>
    //                     <NavigationMenuLink href="/mood" className="text-white hover:text-gray-300">Mood Tracker</NavigationMenuLink>
    //                 </NavigationMenuItem>
    //                 <NavigationMenuItem>
    //                     <NavigationMenuLink href="/quotes" className="text-white hover:text-gray-300">Inspirational</NavigationMenuLink>
    //                 </NavigationMenuItem>
    //             </div>
    //         </NavigationMenuList>
    //     </NavigationMenu>
    // </div>
    <nav className="bg-black p-4 text-white flex justify-between items-center">
        {/* right side of the navbar */}
      <div>
        <NavLink to="/" className="text-2xl font-bold hover:scale-125 text-yellow-500 tracking-widest"> Mental Wellness </NavLink>
      </div>

    {/* the left side content  */}
      <div className='flex p-1 space-x-16 '>
        <NavLink to="/" className="text-white text-lg hover:text-gray-400 tracking-wider active:text-yellow-400">Home</NavLink>
        <NavLink to="/journal" className="text-white text-lg hover:text-gray-400 tracking-wider">Journal</NavLink>
        <NavLink to="/quotes" className="text-white text-lg hover:text-gray-400 tracking-wider">Quotes</NavLink>
        <NavLink to="/mood" className="text-white text-lg hover:text-gray-400 tracking-wider">Mood</NavLink>
      </div>
    </nav>
  )
}

export default Navbar