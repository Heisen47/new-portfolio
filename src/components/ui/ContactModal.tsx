import { Mail, Linkedin, Github, Copy, Check, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react"
import { toast } from 'sonner';

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("iamrishi.dev47@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000) 
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-xs sm:max-w-md bg-slate-900 border-slate-800 text-white p-4 sm:p-6 rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-base font-bold sm:text-lg">
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
              onClick={() => toast('Email copied to clipboard!', {
                duration: 2000,
              })}
            >
              <Mail className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center w-10 h-10 bg-slate-800 border-slate-700 text-white hover:bg-slate-700"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/saptarshi-chakraborty-3031999march/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center w-10 h-10 bg-slate-800 border-slate-700 text-white hover:bg-slate-700"
              asChild
            >
              <a
                href="https://www.github.com/heisen47"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center w-10 h-10 bg-slate-800 border-slate-700 text-white hover:bg-slate-700"
              asChild
            >
              <a
                href="https://x.com/iWriteCode__"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>


        
        
        <div className="hidden sm:grid gap-4 mt-4">
        {/* Larger devices: Full buttons with text */}
          <Button
            variant="outline"
            className="flex justify-start gap-2 bg-slate-800 border-slate-700 text-white hover:bg-slate-700"
            onClick={handleCopyEmail}
          >
            <Mail className="h-5 w-5" />
            <span className="text-sm sm:text-base">iamrishi.dev47@gmail.com</span>
            {copied ? (
              <Check className="ml-auto h-5 w-5 text-green-500" />
            ) : (
              <Copy className="ml-auto h-5 w-5" />
            )}
          </Button>
          <Button
            variant="outline"
            className="flex justify-start gap-2 bg-slate-800 border-slate-700 text-white hover:bg-slate-700"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/saptarshi-chakraborty-3031999march/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              <span className="text-sm sm:text-base">LinkedIn Profile</span>
            </a>
          </Button>
          <Button
            variant="outline"
            className="flex justify-start gap-2 bg-slate-800 border-slate-700 text-white hover:bg-slate-700"
            asChild
          >
            <a
              href="https://www.github.com/heisen47"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="text-sm sm:text-base">GitHub Profile</span>
            </a>
          </Button>
          <Button
            variant="outline"
            className="flex justify-start gap-2 bg-slate-800 border-slate-700 text-white hover:bg-slate-700"
            asChild
          >
            <a
              href="https://x.com/iWriteCode__"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-5 w-5" />
              <span className="text-sm sm:text-base">Twitter Profile</span>
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}