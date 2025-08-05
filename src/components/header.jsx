import { NavLink } from "react-router-dom"

function Header() {
    return <>
        <div className="bg-green-500 sm:w-[350px] w-screen sm:h-[590px] h-[450px] space-x-2 text-white">
            <div>
            <i class={`fa-solid fa-bars ml-[285px] mt-10  text-2xl`}></i>
            </div>    

                <div className=" items-center space-y-4 px-4 mt-10 ">
                    <div className="flex items-center space-x-4 font-bold text-4xl">
                        <NavLink to="/"><i class="fa-brands fa-slack"></i>Dash</NavLink>
                    </div>
                    
                    <div className="flex items-center space-x-4 font-bold text-3xl">
                        <NavLink to="/product"><i class="fa-brands fa-product-hunt"></i>Product</NavLink>
                    </div>    
                    
                    <div className="flex items-center space-x-4 font-bold text-3xl">
                        <NavLink to="/services"><i class="fa-solid fa-briefcase"></i>Services</NavLink>
                    </div>
                    <div className="flex items-center space-x-4 font-bold text-3xl">
                        <NavLink to="/attend"><i class="fa-solid fa-calendar-days"></i>Attend</NavLink>
                    </div>
                    <div className="flex items-center space-x-4 font-bold text-3xl">
                    <NavLink to="/parent"><i class="fa-solid fa-user"></i>Parent</NavLink>
                    </div>

                    <div className="flex items-center space-x-4 font-bold text-3xl">
                        <NavLink to="/help"><i class="fa-solid fa-headphones"></i>Help</NavLink>
                    </div>
            
           </div>  
        </div>   
    


    </>

}
export default Header