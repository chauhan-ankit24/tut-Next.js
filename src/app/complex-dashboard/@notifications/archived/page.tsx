import Card from "../../../../components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h5> Notifications Archived</h5>
        <div>
          <Link href="/complex-dashboard">Default</Link>
        </div>
      </div>
    </Card>
  );
}
