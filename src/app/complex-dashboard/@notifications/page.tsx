import Card from "../../../components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h5> Notifications Page</h5>
        <div>
          <Link href="/complex-dashboard/archived">Archive</Link>
        </div>
      </div>
    </Card>
  );
}
