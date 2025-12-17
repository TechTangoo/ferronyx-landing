import React from 'react';
import { Twitter, Github, Disc, Send } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
    return (
        <footer className="w-full bg-black py-20 px-6 border-t border-white/5 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">

                {/* Brand Column */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                        <img src="/src/assets/aura-logo.svg" alt="Aura Logo" className="h-6 w-auto" />
                        <span className="text-xl font-bold text-white tracking-tight">Aura</span>
                    </div>
                    <p className="text-zinc-500 leading-relaxed max-w-xs">
                        The intelligence layer for decentralized finance. Institutional-grade security with permissionless access.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
                        <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
                        <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Disc className="h-5 w-5" /></a>
                    </div>
                </div>

                {/* Links Column 1 */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-white font-semibold">Protocol</h4>
                    <a href="#" className="text-zinc-500 hover:text-white transition-colors">Markets</a>
                    <a href="#" className="text-zinc-500 hover:text-white transition-colors">Prices</a>
                    <a href="#" className="text-zinc-500 hover:text-white transition-colors">Docs</a>
                </div>

                {/* Links Column 2 */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-white font-semibold">Governance</h4>
                    <a href="#" className="text-zinc-500 hover:text-white transition-colors">Proposals</a>
                    <a href="#" className="text-zinc-500 hover:text-white transition-colors">Voting</a>
                    <a href="#" className="text-zinc-500 hover:text-white transition-colors">Forum</a>
                </div>

                {/* Newsletter Column */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-white font-semibold">Stay Updated</h4>
                    <div className="flex w-full items-center space-x-2">
                        <input type="email" placeholder="Email" className="bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-full" />
                        <Button size="icon" className="h-9 w-9 bg-white text-black hover:bg-zinc-200">
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-xs text-zinc-600">
                <span>© 2024 Aura Protocol. All rights reserved.</span>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
                    <a href="#" className="hover:text-zinc-400">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
