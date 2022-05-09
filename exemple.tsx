// Componente (algo que retorna HTML) em TypeScript (TSX)

interface ButtonProps {
	text?: string;
}

function Button(props: ButtonProps) {
	// O props é tipado de acordo com a interface e pode ter quantos elementos quiser
  // Retorna o HTML, caso não passe o props com nome texto, será escrito 'Default'
  // TailWind funciona na base de className, que muda as propriedades CSS. Deixe o mouse em cima para detalhes.
	return <button className="bg-cyan-200 p-2 rounded hover:bg-cyan-300 transition-colors">{props.text ?? "Default"}</button>; 
}

function App() {
	// O Button é uma função que retorna HTML
	// O text é enviado como parâmetro para o Button
	return (
		<div className="flex gap-2">
			<Button text="Enviar" />
			<Button text="Ok" />
		</div>
	);
}

export default App;
