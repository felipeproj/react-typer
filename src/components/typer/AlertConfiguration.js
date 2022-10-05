export const AlertConfigurationEnum = {
  default: "default",
  success: "success",
  error: "error",
};

export const AlertConfiguration = {
  default: {
    open: false,
    severity: "info",
    title: "",
    text: "",
  },
  success: {
    open: true,
    severity: "success",
    title: "Parabéns!",
    text: "Você conseguiu concluir o desafio com sucesso! Clique em 'Recomeçar' para iniciar um novo jogo.",
  },
  error: {
    open: true,
    severity: "error",
    title: "Ops, não foi dessa vez!",
    text: "Você não conseguiu concluir o desafio! Clique em 'Iniciar' para iniciar um novo jogo.",
  },
};
