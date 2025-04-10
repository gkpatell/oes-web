import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function BookingModal({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  // Google Form URL for booking spaces
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeKfHV1aNWgQEqeDAjeSuftEdZtl98_nmvQnz4Lwku4-67vgQ/viewform?embedded=true";
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl h-[80vh]">
        <DialogHeader>
          <DialogTitle>Book a Space</DialogTitle>
        </DialogHeader>
        <div className="flex-1 h-full min-h-[60vh]">
          <iframe
            src={googleFormUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="h-full"
            title="Space Booking Form"
          >
            Loading...
          </iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
} 