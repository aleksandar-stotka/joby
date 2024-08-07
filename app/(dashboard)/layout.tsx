import Navbar from "@/components/ui/Navbar"
import Sidebar from "@/components/ui/Sidebar"

function layout({children} : {children: React.ReactNode}) {
  return (
    <main className="grid lg:grid-cols-5">
         <div className="hidden lg:block lg:col-span-1 lg:min-h-screen">
            <Sidebar/>
         </div>
         <div className="log:col-span-4">
            <Navbar/>

         </div>
         <div className="py-16 px-4 sm:px-8 lg:px-16">
         {children}
         </div>
        </main>
  )
}

export default layout