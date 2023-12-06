import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Button size="icon" variant="outline">
        <MenuIcon />
      </Button>

      <h1 className="text-lg font-semibold text-primary md:text-2xl">
        EducaFacilWeb
      </h1>

      <ModeToggle />
    </Card>
  );
};

export default Header;
