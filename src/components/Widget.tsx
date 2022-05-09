import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm";

export function Widget() {
	// Variável que controle se o widget foi pressionado ou não. Informação de estado
	// Estado inicial false
	// Valor de estado = índice 0
	// Alteração do valor de estado = índice 1
	const [isWidgetOpen, setIsWidgetOpen] = useState(false);

	function toggleWidgetVisibility() {
		// Seta o valor contrário para o isWidgetOpen
		setIsWidgetOpen(!isWidgetOpen);
	}

	return (
		// Popover ao invés de uma div genérica
		<Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex-col items-end">
			{/* 
                if then else 
			{ isWidgetOpen ? <p>Hello World</p> : null}

                Quando o else é null, só um AND resolve
            { isWidgetOpen && <p>Hello World</p>} 

                Porém isso gera problema de acessibilidade. Para resolver, existe o headless UI, feito pelo pessoal do tailwind 
                O Headless permite usar o Tab, Esc, etc. para interagir com os elementos (aria-expanded e aria-controls)*/}
			<Popover.Panel>
				<WidgetForm></WidgetForm>
			</Popover.Panel>

			{/* Button do Popover 
                Remove a necessidade do onclick={toggleWidgetVisibility} */}
			<Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
				<ChatTeardropDots className="h-6 w-6"></ChatTeardropDots>
				<span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
					<span className="pl-2">Feedback</span>
				</span>
			</Popover.Button>
		</Popover>
	);
}
