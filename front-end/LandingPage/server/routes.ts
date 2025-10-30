import type { Express } from "express";
import axios from "axios";

export function registerRoutes(app: Express) {
  app.get("/api/provinces", async (_req, res) => {
    try {
      const response = await axios.get("https://wilayah.id/api/provinces.json");
      res.json(response.data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, error: "Failed to fetch provinces" });
    }
  });

  app.get("/api/regencies/:provinceCode", async (req, res) => {
    const { provinceCode } = req.params;
    try {
      const response = await axios.get(
        `https://wilayah.id/api/regencies/${provinceCode}.json`
      );
      res.json(response.data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, error: "Failed to fetch regencies" });
    }
  });

  app.get("/api/districts/:regencyCode", async (req, res) => {
    const { regencyCode } = req.params;
    try {
      const response = await axios.get(
        `https://wilayah.id/api/districts/${regencyCode}.json`
      );
      res.json(response.data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, error: "Failed to fetch districts" });
    }
  });

  app.get("/api/villages/:districtCode", async (req, res) => {
    const { districtCode } = req.params;
    try {
      const response = await axios.get(
        `https://wilayah.id/api/villages/${districtCode}.json`
      );
      res.json(response.data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, error: "Failed to fetch villages" });
    }
  });
}
