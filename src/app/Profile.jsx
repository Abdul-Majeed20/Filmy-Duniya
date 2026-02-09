import profile from "../assets/icons/person.png"
const Profile = () => {
  return (
   <div className="flex items-center justify-center">
     <div className='text-white p-6 flex-col items-center justify-center shadow-md border border-gray-200 rounded-lg'>
     <div className="">
       <img src={profile} alt="" className="w-32 h-32 object-cover text-white p-4 border-2 bg-amber-400 rounded-full" />
      <p className="text-2xl text-white my-2 font-semibold">UserName</p>
      <p className="text-2xl text-white my-2 font-semibold">user@gmail.com</p>
     </div>
      <div className="grid grid-cols-2 space-x-3 mt-5 space-y-3">
        <input type="text" value="first Name" className="border border-white p-2 rounded-md" />
        <input type="text" value="Laster Name" className="border border-white p-2 rounded-md" />
        <input type="email" value="email" className="border border-white p-2 rounded-md" />
        <input type="email" value="email" className="border border-white p-2 rounded-md" />
        
      </div>
    </div>
   </div>
  )
}

export default Profile