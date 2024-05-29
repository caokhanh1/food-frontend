import { CircleUserRound, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu className="text-orange-500" />
        </SheetTrigger>
        <SheetContent>
          <SheetTitle>
            {isAuthenticated ? (
              <span className="flex items-center font-bold gap-2">
                <CircleUserRound className="text-orange-500"></CircleUserRound>
                {user?.email}
              </span>
            ) : (
              <span>Welcome to order food!</span>
            )}
          </SheetTitle>
          <Separator></Separator>
          <SheetDescription className="flex flex-col gap-4 ">
            {isAuthenticated ? (
              <MobileNavLinks/>
            ) : (
              <Button onClick={()=>loginWithRedirect()} className="flex-1 font-bold bg-orange-500">Log in</Button>
            )}
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
