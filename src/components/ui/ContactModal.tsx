import { Mail, Phone, Copy, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-slate-900 border-slate-800 text-white">
        <DialogHeader>
          <DialogTitle>Let's Connect!</DialogTitle>
          <DialogDescription>
            Feel free to reach out through any of these channels.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <Button variant="outline" className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700">
            <Mail className="h-4 w-4" />
            <span>email@example.com</span>
            <Copy className="h-4 w-4 ml-auto" />
          </Button>
          <Button variant="outline" className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700">
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn Profile</span>
          </Button>
          <Button variant="outline" className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700">
            <Github className="h-4 w-4" />
            <span>GitHub Profile</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}