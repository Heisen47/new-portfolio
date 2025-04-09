import { Mail, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-xs sm:max-w-md bg-slate-900 border-slate-800 text-white p-4 sm:p-6 rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-base sm:text-lg font-bold">
            Let's Connect!
          </DialogTitle>
          <DialogDescription className="hidden sm:block text-sm sm:text-base text-slate-400">
            Feel free to reach out through any of these channels.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 mt-4 sm:hidden">
          {/* Small devices: Icons in squares */}
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              className="flex items-center justify-center w-10 h-10 bg-slate-800 border-slate-700 text-white hover:bg-slate-700"
            >
              <Mail className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center w-10 h-10 bg-slate-800 border-slate-700 text-white hover:bg-slate-700"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center w-10 h-10 bg-slate-800 border-slate-700 text-white hover:bg-slate-700"
            >
              <Github className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="hidden sm:grid gap-4 mt-4">
          {/* Larger devices: Full buttons with text */}
          <Button
            variant="outline"
            className="flex justify-start gap-2 bg-slate-800 border-slate-700 text-white hover:bg-slate-700"
          >
            <Mail className="h-5 w-5" />
            <span className="text-sm sm:text-base">email@example.com</span>
          </Button>
          <Button
            variant="outline"
            className="flex justify-start gap-2 bg-slate-800 border-slate-700 text-white hover:bg-slate-700"
          >
            <Linkedin className="h-5 w-5" />
            <span className="text-sm sm:text-base">LinkedIn Profile</span>
          </Button>
          <Button
            variant="outline"
            className="flex justify-start gap-2 bg-slate-800 border-slate-700 text-white hover:bg-slate-700"
          >
            <Github className="h-5 w-5" />
            <span className="text-sm sm:text-base">GitHub Profile</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}