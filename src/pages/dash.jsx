import Boxx from "../Right"

function Dash() {
    return <>
    <div className="bg-blue-400 py-2">
    </div>    
    {/* {RIGHT PART}     */}

      <div className="flex gap-4 font-bold">
        <Boxx 
        Color ="bg-orange-500"
        type ="Courses"
        />
        <Boxx 
        Color ="bg-blue-500"
        type ="Employee"
        />
        <Boxx 
        Color ="bg-yellow-500"
        type ="Classes"
        />
      </div> 
    </>
    
}
export default Dash