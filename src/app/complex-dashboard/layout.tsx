export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ backgroundColor: "green" }}>{users}</div>
          <div style={{ backgroundColor: "blue" }}>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1, backgroundColor: "yellow" }}>
          {notifications}
        </div>
      </div>
    </div>
  );
}
