import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

// Parâmetros enviados pelo componente
// Tipagem e retorno dos parâmetros
interface FeedbackTypeStepProps {
	onFeedbackTypeChanged: (type: FeedbackType) => void;
}

// Desestruturação pra pegar só um parâmetro
export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
	return (
		// Fragment ao invés de div porque ele não aparece no HTML
		<>
			<header>
				{/* leading para sobescrever o line heigth do text-xl */}
				<span className="text-xl leading-6">Deixe seu feedback</span>
				<CloseButton />
			</header>

			<div className="flex py-8 gap-2 w-full">
				{/* Retorna um array de arrays do tipo key, value.
                [
                    [BUG, {...}],
                    [IDEA, {...}],
                    [OTHER,{...}]
                ] */}
				{Object.entries(feedbackTypes).map(([key, value]) => {
					return (
						<button
							// Propriedade do React necessária para o render, é a key pra identificar os elementos(id)
							key={key}
							// flex-1 adapta a largura pra se esticar caso o container aumente
							className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
							// Em casos onde o state depende de uma variável
							// Inferindo manualmente o tipo da variável
							// É possível usar também o FeedbackTypeStepProps.onFeedbackTypeChanged caso tenham mais parâmetros
							onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
							type="button"
						>
							<img src={value.image.source} alt={value.image.alt} />
							<span>{value.title}</span>
						</button>
					);
				})}
			</div>
		</>
	);
}
