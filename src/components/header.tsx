import {
  BookOpenText,
  Contact,
  HomeIcon,
  MenuIcon,
  Microscope,
  Pi,
  SmilePlus,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ModeToggle } from "./mode-toggle";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";

const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 py-4">
              <Avatar>
                <AvatarFallback>Logo</AvatarFallback>

                <AvatarImage src="./logo.png" />
              </Avatar>

              <div className="flex flex-col">
                <p className="font-medium">Estudante</p>
                <p className="text-sm opacity-75">Bons estudos!</p>
              </div>
            </div>

            <Separator />
          </div>

          <div className="mt-2 flex flex-col gap-3">
            <Button variant="outline" className="w-full justify-start gap-2">
              <HomeIcon size={16} />
              Início
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <Microscope size={16} />
              Biologia
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <Pi size={16} />
              Matemática
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <BookOpenText size={16} />
              Redação
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <SmilePlus size={16} />
              Extras
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <Contact size={16} />
              Feedback
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="text-lg font-semibold text-primary md:text-2xl">
        EducaFacilWeb
      </h1>

      <ModeToggle />
    </Card>
  );
};

export default Header;
