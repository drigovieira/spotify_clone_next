import Image from "next/image";
import {
    Computer,
    LayoutList,
    Maximize2,
    Mic2,
    Play,
    Repeat,
    Shuffle,
    SkipBack,
    SkipForward,
    Volume2
} from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Image src="/album.jpeg" width={56} height={56} alt="Capa do album Live in Texas da banda Linkin Park"/>
                <div className="flex flex-col gap-1">
                    <strong className="font-normal">P5hng Me A*wy - Live</strong>
                    <span className="text-xs text-zinc-400">Linkin Park</span>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-6">
                    <Shuffle size={20} className="text-zinc-200"/>
                    <SkipBack size={20} className="text-zinc-200"/>
                    <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black" >
                        <Play/>
                    </button>
                    <SkipForward size={20} className="text-zinc-200"/>
                    <Repeat size={20} className="text-zinc-200"/>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-500">0:31</span>
                    <div className="h-1 rouned-full w-96 bg-zinc-600">
                        <div className="bg-zinc-200 w-20 h-1 rounded-full"></div>
                    </div>
                    <span className="text-xs text-zinc-500">4:33</span>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Mic2 size={20}/>
                <LayoutList size={20} />
                <Computer size={20} />
                <div className="flex items-center gap-4">
                    <Volume2 size={20} />
                    <div className="h-1 rouned-full w-24 bg-zinc-600">
                        <div className="bg-zinc-200 w-16 h-1 rounded-full"></div>
                    </div>
                </div>
                <Maximize2 size={20}/>
            </div>
        </footer>
    )
}