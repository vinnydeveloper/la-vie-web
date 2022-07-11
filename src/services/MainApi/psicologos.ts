import baseAPi from "./config";

interface PsicologoPayload {
  nome: string;
  apresentacao: string;
  email: string;
  senha: string;
}
export function cadastroPsicologo(payload: PsicologoPayload) {
  return baseAPi.post("/psicologos", payload);
}

export function listarPsicologo(token: string) {
  return baseAPi.get("/psicologos", {
    headers: {
      Authorization: `JWT ${token}`,
    },
  });
}
