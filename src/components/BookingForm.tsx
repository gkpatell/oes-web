import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function BookingForm() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Book a Space</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full aspect-[4/3]">
          <iframe
            src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Space Booking Form"
          >
            Loading…
          </iframe>
        </div>
      </CardContent>
    </Card>
  );
} 