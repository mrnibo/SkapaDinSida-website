import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";

function ContactModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Contact Us</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Fill the Form to Contact us</DialogTitle>
          <DialogDescription>DialogDescription</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              LastName
            </Label>
            <Input id="name" className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Emailaddress
            </Label>
            <Input id="email" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Phonenumber
            </Label>
            <Input id="username" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <div className="grid w-full gap-2">
            <Textarea placeholder="Type your message here." />
            <Button>Send message</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ContactModal;
