import type { Request, Response } from "express";

export async function createDownload(
  req: Request,
  res: Response
) {
  const { url } = req.body;

  if (!url || typeof url !== "string") {
    return res.status(400).json({
      ok: false,
      error: "URL requerida",
    });
  }

  return res.json({
    ok: true,
    message: "Solicitud recibida",
    url,
    status: "pending",
  });
}