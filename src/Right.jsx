
function Boxx(probs) {
    return <>
    <div className="mt-10 text-center font-bold sm:block grid-cols-1 ">
        <div className= {` ${probs.Color} sm:w-[270px] w-28 sm:h-[115px] h-20 rounded-lg `}>
            <h1 className="sm:text-4xl text-2xl font-bold sm:pt-8 pt-4 sm:px-6">{probs.type}</h1>
        </div>
    </div>    
    
    
    
    
    
    </>
    
}
export default Boxx