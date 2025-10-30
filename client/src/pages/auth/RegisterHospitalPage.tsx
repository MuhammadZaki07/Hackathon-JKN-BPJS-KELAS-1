import React, { useState, useEffect } from "react";
import { LanguageToggle } from "@/components/language-toggle";
import axios from "axios";

interface Location {
  code?: string;
  name?: string;
}

export default function RegisterHospitalWizard() {
  const [step, setStep] = useState(1);

  const [provinces, setProvinces] = useState<Location[]>([]);
  const [cities, setCities] = useState<Location[]>([]);
  const [districts, setDistricts] = useState<Location[]>([]);

  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const [form, setForm] = useState({
    hospitalName: "",
    hospitalType: "",
    phone: "",
    email: "",
    address: "",
    postalCode: "",
    licenseNumber: "",
    director: "",
    npwp: "",
    password: "",
    confirmPassword: "",
    files: [] as File[],
  });

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const res = await axios.get("/api/provinces");
        setProvinces(res.data.data);
      } catch (err) {
        setProvinces([]);
      }
    };
    fetchProvinces();
  }, []);

  useEffect(() => {
    if (!selectedProvince) return;
    const fetchCities = async () => {
      try {
        const res = await axios.get(`/api/regencies/${selectedProvince}`);
        setCities(res.data.data);
      } catch (err) {
        setCities([]);
      }
    };
    fetchCities();
  }, [selectedProvince]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setForm({ ...form, files: Array.from(e.target.files) });
  };

  const canNextStep1 =
    form.hospitalName &&
    form.hospitalType &&
    form.phone &&
    form.email &&
    form.address &&
    selectedProvince &&
    selectedCity &&
    form.postalCode;
  const canNextStep2 =
    form.licenseNumber &&
    form.director &&
    form.npwp &&
    form.password &&
    form.confirmPassword &&
    form.password === form.confirmPassword;

  const StepIndicator = () => (
    <div className="flex items-center justify-center mb-6 space-x-4">
      {[1, 2, 3].map((s, i) => (
        <React.Fragment key={s}>
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
              step === s
                ? "bg-green-700 text-white border-green-700"
                : "bg-white text-green-700 border-green-300"
            }`}
          >
            {s}
          </div>
          {i < 2 && <div className="flex-1 h-0.5 bg-green-300"></div>}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <section className="flex flex-col-reverse lg:flex-row h-screen bg-background">
      <div className="w-full lg:w-1/2 flex flex-col">
        <header className="flex justify-between items-center px-10 py-6">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <LanguageToggle />
        </header>

        <div className="flex-1 flex items-center justify-center px-6 lg:px-16 overflow-auto">
          <div className="w-full max-w-lg">
            {/* <h1 className="text-2xl font-bold text-foreground mb-6 text-center">
              Register as Hospital
            </h1> */}

            <StepIndicator />

            {step === 1 && (
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="text-sm mb-1">Hospital Name</label>
                    <input
                      placeholder="Enter hospital name"
                      type="text"
                      name="hospitalName"
                      value={form.hospitalName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm mb-1">Hospital Type</label>
                    <input
                      placeholder="General / Specialized"
                      type="text"
                      name="hospitalType"
                      value={form.hospitalType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="text-sm mb-1">Phone Number</label>
                    <input
                      placeholder="0812xxxx"
                      type="text"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm mb-1">Email</label>
                    <input
                      placeholder="example@mail.com"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="text-sm mb-1">Province</label>
                    <select
                      value={selectedProvince}
                      onChange={(e) => setSelectedProvince(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400"
                    >
                      <option value="">----</option>
                      {provinces.map((p) => (
                        <option key={p.code} value={p.code}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm mb-1">City / Regency</label>
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400"
                    >
                      <option value="">----</option>
                      {cities.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm mb-1">Full Address</label>
                  <textarea
                    placeholder="Street, RT/RW"
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="text-sm mb-1">Postal Code</label>
                    <input
                      placeholder="12345"
                      type="text"
                      name="postalCode"
                      value={form.postalCode}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm mb-1">Director</label>
                    <input
                      placeholder="Director Name"
                      type="text"
                      name="director"
                      value={form.director}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  disabled={!canNextStep1}
                  onClick={() => setStep(2)}
                  className={`w-full py-3 rounded-lg text-white ${
                    canNextStep1
                      ? "bg-green-700 hover:bg-green-800"
                      : "bg-green-200 cursor-not-allowed"
                  }`}
                >
                  Next
                </button>
              </form>
            )}

            {step === 2 && (
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="text-sm mb-1">License Number</label>
                    <input
                      placeholder="e.g. RS-12345"
                      type="text"
                      name="licenseNumber"
                      value={form.licenseNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm mb-1">Upload License (PDF)</label>
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFiles}
                      className="w-full px-4 py-2 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="text-sm mb-1">NPWP</label>
                    <input
                      placeholder="Tax ID"
                      type="text"
                      name="npwp"
                      value={form.npwp}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm mb-1">Upload NPWP (PDF)</label>
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFiles}
                      className="w-full px-4 py-2 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="text-sm mb-1">Password</label>
                    <input
                      placeholder="Password"
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm mb-1">Confirm Password</label>
                    <input
                      placeholder="Confirm Password"
                      type="password"
                      name="confirmPassword"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="py-3 px-6 rounded-lg border border-green-300 text-green-700 hover:bg-green-50 transition"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={!canNextStep2}
                    className={`py-3 px-6 rounded-lg text-white ${
                      canNextStep2
                        ? "bg-green-700 hover:bg-green-800"
                        : "bg-green-200 cursor-not-allowed"
                    }`}
                  >
                    Register
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 hidden lg:flex">
        <img
          src="/assets/images/keluarga-sehat-auth2.png"
          alt="Register Banner"
          className="w-full h-full object-cover rounded-l-3xl"
        />
      </div>
    </section>
  );
}
