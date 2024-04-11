export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;
  return isLoggedIn ? (
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
  ) : (
    login
  );
}
