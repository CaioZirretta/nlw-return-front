import { useState } from "react";

// Sempre fazer as importações de outros arquivos via JS
import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

// Guardar todos os tipos de feedback para não mexer no HTML direto, melhor escalabilidade
export const feedbackTypes = {
	BUG: {
		title: "Problema",
		image: {
			source: bugImageUrl,
			alt: "Imagem de um inseto",
		},
	},
	IDEA: {
		title: "Ideia",
		image: {
			source: ideaImageUrl,
			alt: "Imagem de uma lâmpada",
		},
	},
	OTHER: {
		title: "Outro",
		image: {
			source: thoughtImageUrl,
			alt: "Imagem de um balão de pensamento",
		},
	},
};

// type define um tipo no TS
// typeof retorna os tipos de todos os atributos das chaves
// keyof filtra os tipos apenas das chaves, em string
export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
	const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
	const [feedbackSent, setFeedbackSent] = useState(false);

	// Seta o state do feedbackType pra null para voltar para o TypeSteop
	function handleRestartFeedback() {
		setFeedbackSent(false)
		setFeedbackType(null);
	}

	return (
		// position relative para ficar mais fácil d e fechar o pop
		// margin bottom para distanciar do botão
		// flex column para organizar o flex numa coluna só
		// align items flex center para centralizar os elementos na coluna
		// width relativa ao tamanho da tela
		// md (medium) equivale a @media(min-width=768px)
		<div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
			{feedbackSent ? (
				<FeedbackSuccessStep
					onFeedbackRestartRequested={handleRestartFeedback}
				 />
			) : (
				<>
					{/* Se não tive rum feebackType selecionado, mostrar a div para escolher */}
					{!feedbackType ? (
						// Envia o setFeedbackType via parâmetro para outro componente
						<FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
					) : (
						<FeedbackContentStep
							feedbackType={feedbackType}
							// Envia a função via parâmetro para o outro componente poder usar
							onFeedbackRestartRequested={handleRestartFeedback}
							onFeedbackSent={() => setFeedbackSent(true)}
						/>
					)}
				</>
			)}

			<footer className="text-xs text-neutral-400">
				{/* underline offset para afastar mais o traço do underline */}
				Feito com amor pela
				<a className="underline underline-offset-2" href="https://rocketseat.com.br">
					Rocketseat
				</a>
			</footer>
		</div>
	);
}
