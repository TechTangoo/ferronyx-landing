import React from 'react';
import ScrollReveal from './ScrollReveal';
import { ExternalLink } from 'lucide-react';
import { trackOutboundLink } from '../lib/analytics';

const ClaudeLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.098 10.598l-3.924 7.76h-2.348L6 10.598h2.46l2.38 5.152 2.38-5.152h2.878zM18 7.142L15.858 5 6 14.858 8.142 17 18 7.142z" />
  </svg>
);

const ChatGPTLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
  </svg>
);

const PerplexityLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1L5 5.5V10h2V7l4 2.5v5L7 17v-3H5v4.5L12 23l7-4.5V14h-2v3l-4-2.5v-5L17 7v3h2V5.5L12 1zm0 2.25L16.5 6 12 8.75 7.5 6 12 3.25z" />
  </svg>
);

const GeminiLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 24A14.304 14.304 0 0 0 12 0a14.304 14.304 0 0 0 0 24zM12 3.6a10.697 10.697 0 0 1 0 16.8A10.697 10.697 0 0 1 12 3.6z" />
  </svg>
);

const aiProviders = [
  {
    name: 'Claude',
    logo: ClaudeLogo,
    url: '#', // Replace with actual Claude shared chat URL
    borderColor: 'border-orange-500/30',
    bgColor: 'bg-orange-500/10',
    textColor: 'text-orange-400',
    hoverBorder: 'hover:border-orange-500/50',
  },
  {
    name: 'ChatGPT',
    logo: ChatGPTLogo,
    url: '#', // Replace with actual ChatGPT shared chat URL
    borderColor: 'border-emerald-500/30',
    bgColor: 'bg-emerald-500/10',
    textColor: 'text-emerald-400',
    hoverBorder: 'hover:border-emerald-500/50',
  },
  {
    name: 'Perplexity',
    logo: PerplexityLogo,
    url: '#', // Replace with actual Perplexity shared search URL
    borderColor: 'border-blue-500/30',
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-400',
    hoverBorder: 'hover:border-blue-500/50',
  },
  {
    name: 'Gemini',
    logo: GeminiLogo,
    url: '#', // Replace with actual Gemini shared chat URL
    borderColor: 'border-purple-500/30',
    bgColor: 'bg-purple-500/10',
    textColor: 'text-purple-400',
    hoverBorder: 'hover:border-purple-500/50',
  },
];

const AskAISection = () => {
  return (
    <section className="relative w-full bg-[#050505] py-24 px-6 border-t border-white/[0.05]">
      <ScrollReveal className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
          What does AI say about{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400">
            Ferronyx
          </span>
          ?
        </h2>
        <p className="text-base text-[#8A8F98] max-w-lg mx-auto">
          We asked the leading AI assistants to explain Ferronyx. See their answers.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.15} className="flex flex-wrap items-center justify-center gap-4 max-w-2xl mx-auto">
        {aiProviders.map((provider) => (
          <a
            key={provider.name}
            href={provider.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackOutboundLink(provider.url, `ai-chat-${provider.name.toLowerCase()}`)}
            className={`group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border ${provider.borderColor} ${provider.bgColor} ${provider.hoverBorder} hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer`}
          >
            <provider.logo className={`h-4 w-4 ${provider.textColor}`} />
            <span className={`text-sm font-medium ${provider.textColor}`}>
              {provider.name}
            </span>
            <ExternalLink className={`h-3 w-3 ${provider.textColor} opacity-0 group-hover:opacity-70 transition-opacity`} />
          </a>
        ))}
      </ScrollReveal>
    </section>
  );
};

export default AskAISection;
