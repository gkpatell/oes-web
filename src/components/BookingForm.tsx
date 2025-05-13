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
            src="https://forms.office.com/Pages/ResponsePage.aspx?id=XNbwunTHQEChpg_wP9Yd1q5RzenJCrxKgY6qlGbc43NUQ1FCSFU1MVc4VFEwQlc0S0JCWTE3OEo2Ry4u&embed=true"
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