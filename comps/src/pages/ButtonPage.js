import Button from "../components/Button"
import { GoBellFill, GoGlobe, GoDatabase } from "react-icons/go";

function ButtonPage() {
   
   return (
      <div>
         <div>
            <Button secondary rounded outline className="mb-5" >
               <GoBellFill/>
               click me
               </Button>
         </div>
         <div>
            <Button danger outline>
               <GoGlobe/>
               buy now
               </Button>
         </div>
         <div>
            <Button warning>
               <GoDatabase/>
               see deal
               </Button>
         </div>
         <div>
            <Button secondary outline>hide ads</Button>
         </div>
         <div>
            <Button primary rounded>something</Button>
         </div>
      </div>
   )
}

export default ButtonPage