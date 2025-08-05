import { NavLink } from "react-router-dom"

function Header() {
    return <>
        <div className="bg-green-500 sm:w-[350px] w-screen sm:h-[590px] h-[450px] space-x-2 text-white">
            <div>
            <i class={`fa-solid fa-bars ml-[285px] mt-10  text-2xl`}></i>
            </div>    

                <div className=" items-center space-y-4 px-4 mt-10 ">
                    <div className="flex items-center space-x-4 font-bold text-4xl">
                        <i class="fa-brands fa-slack"></i>
                        <NavLink to="/">Dash</NavLink>
                    </div>
                    
                    <div className="flex items-center space-x-4 font-bold text-3xl">
                        <i class="fa-brands fa-product-hunt"></i>
                        <NavLink to="/product">Product</NavLink>
                    </div>    
                    
                    <div className="flex items-center space-x-4 font-bold text-3xl">
                        <i class="fa-solid fa-briefcase"></i>
                        <NavLink to="/services">Services</NavLink>
                    </div>
                    <div className="flex items-center space-x-4 font-bold text-3xl">
                        <i class="fa-solid fa-calendar-days"></i>
                        <NavLink to="/attend">Attend</NavLink>
                    </div>
                    <div className="flex items-center space-x-4 font-bold text-3xl">
                    <i class="fa-solid fa-user"></i>
                    <NavLink to="/parent">Parent</NavLink>
                    </div>

                    <div className="flex items-center space-x-4 font-bold text-3xl">
                        <i class="fa-solid fa-headphones"></i>
                        <NavLink to="/help">Help</NavLink>
                    </div>
            
           </div>  
        </div>   
    


    </>

}
export default Header