import { Routes, Route, Navigate } from "react-router-dom";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterUserPage from "@/pages/auth/RegisterUserPage";
import RegisterHospitalPage from "@/pages/auth/RegisterHospitalPage";

export function RoutesHandler() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register-user" element={<RegisterUserPage />} />
      <Route path="/register-hospital" element={<RegisterHospitalPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
