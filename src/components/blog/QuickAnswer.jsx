/**
 * QuickAnswer Component
 *
 * GEO-optimized summary block for blog posts.
 * Displays a 40-80 word summary that AI agents can easily extract
 * as a direct answer to user queries.
 *
 * Usage in MDX:
 * <QuickAnswer>
 *   Your 40-80 word summary here that directly answers
 *   the main question the article addresses.
 * </QuickAnswer>
 */
const QuickAnswer = ({ children }) => {
    return (
        <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <svg
                        className="w-4 h-4 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>
                <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2 block">
                        Quick Answer
                    </span>
                    <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
                        {children}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default QuickAnswer;
