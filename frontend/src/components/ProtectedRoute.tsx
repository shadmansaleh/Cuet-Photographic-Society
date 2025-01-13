import { useAuth } from "@/contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import React from "react";

export enum Role {
  ALL = "all",
  NOAUTH = "no_auth",
  AUTH = "auth",
  USER = "user",
  ADMIN = "admin",
}

export function ProtectedRoute({
  children,
  role,
}: {
  role?: Role;
  children?: React.ReactNode;
}) {
  if (!role) role = Role.AUTH;
  const retAccept = children ? children : <Outlet />;
  const { user } = useAuth();
  if (role === Role.ALL) return retAccept;
  if (role === Role.NOAUTH) {
    if (user !== null) return <Navigate to={`${__BASE_URL__}/`} />;
    return retAccept;
  }
  if (!user) {
    enqueueSnackbar("Please login to access this page", { variant: "error" });
    return <Navigate to={`${__BASE_URL__}/login`} />;
  }
  if (role === Role.AUTH) return retAccept;
  if (user.role.toString() === role.toString()) return retAccept;
  enqueueSnackbar("You do not have permission to access this page", {
    variant: "error",
  });
  return <Navigate to={`${__BASE_URL__}/`} />;
}

export default ProtectedRoute;
