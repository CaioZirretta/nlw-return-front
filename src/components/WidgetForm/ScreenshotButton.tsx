import { useState } from "react";
import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { Loading } from "./Loading";

interface ScreenshotButtonProps {
	screenshot: string | null;
	onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenshotButton({ screenshot, onScreenshotTook }: ScreenshotButtonProps) {
	const [isTakeingScreenshot, setIsTakeingScreenshot] = useState(false);

	async function handleTakeScreenshot() {
		setIsTakeingScreenshot(true);
		// ! força que não será nulo nunca
		const canvas = await html2canvas(document.querySelector("html")!);
		// Tira um print e converte pra base64
		const base64image = canvas.toDataURL("image/png");

		onScreenshotTook(base64image);
		setIsTakeingScreenshot(false);
	}

    if(screenshot) {
        return(
            <button 
                type="button" 
                className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
                onClick={() => onScreenshotTook(null)}
                style={{
                    backgroundImage: `url(${screenshot})`
                }}
            >
                <Trash weight="fill" />
            </button>
        )
    }

	return (
		<button
			type="button"
			onClick={handleTakeScreenshot}
			className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transitions-colors "
		>
			{isTakeingScreenshot ? <Loading /> : <Camera className="w-6 h-6 text-zinc-100" />}
		</button>
	);
}
