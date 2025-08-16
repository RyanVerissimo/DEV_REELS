import { toast } from "react-toastify";

export function salvarFilme(filme) {
  const minhaLista = localStorage.getItem("@devreels");
  let filmesSalvos = JSON.parse(minhaLista) || [];

  const hasFilme = filmesSalvos.some(
    (filmesSalvos) => filmesSalvos.id === filme.id
  );

  if (hasFilme) {
    toast.warn("Esse filme já está na sua lista!");
    return;
  }

  filmesSalvos.push(filme);
  localStorage.setItem("@devreels", JSON.stringify(filmesSalvos));
  toast.success("Filme salvo com sucesso!");
}