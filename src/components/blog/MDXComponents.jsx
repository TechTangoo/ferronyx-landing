import React from 'react';
import { Link } from 'react-router-dom';
import { Info, AlertTriangle, CheckCircle, XCircle, Lightbulb } from 'lucide-react';
import QuickAnswer from './QuickAnswer';

// Custom heading components with anchor links
const createHeading = (level) => {
  const Tag = `h${level}`;
  const sizes = {
    1: 'text-4xl mt-8 mb-4',
    2: 'text-3xl mt-8 mb-4',
    3: 'text-2xl mt-6 mb-3',
    4: 'text-xl mt-4 mb-2',
    5: 'text-lg mt-4 mb-2',
    6: 'text-base mt-4 mb-2'
  };

  return ({ children, ...props }) => {
    const id = typeof children === 'string'
      ? children.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
      : '';

    return (
      <Tag
        id={id}
        className={`font-bold text-white scroll-mt-24 group ${sizes[level]}`}
        {...props}
      >
        {children}
        {id && (
          <a
            href={`#${id}`}
            className="ml-2 text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label={`Link to ${children}`}
          >
            #
          </a>
        )}
      </Tag>
    );
  };
};

// Callout component for tips, warnings, etc.
const Callout = ({ type = 'info', title, children }) => {
  const styles = {
    info: {
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30',
      icon: Info,
      iconColor: 'text-blue-400'
    },
    warning: {
      bg: 'bg-yellow-500/10',
      border: 'border-yellow-500/30',
      icon: AlertTriangle,
      iconColor: 'text-yellow-400'
    },
    success: {
      bg: 'bg-green-500/10',
      border: 'border-green-500/30',
      icon: CheckCircle,
      iconColor: 'text-green-400'
    },
    error: {
      bg: 'bg-red-500/10',
      border: 'border-red-500/30',
      icon: XCircle,
      iconColor: 'text-red-400'
    },
    tip: {
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/30',
      icon: Lightbulb,
      iconColor: 'text-purple-400'
    }
  };

  const style = styles[type] || styles.info;
  const Icon = style.icon;

  return (
    <div className={`${style.bg} border ${style.border} rounded-xl p-6 my-6`}>
      <div className="flex gap-4">
        <Icon className={`h-5 w-5 ${style.iconColor} flex-shrink-0 mt-0.5`} />
        <div>
          {title && <p className="font-semibold text-white mb-2">{title}</p>}
          <div className="text-zinc-300">{children}</div>
        </div>
      </div>
    </div>
  );
};

// Metric card for highlighting stats
const MetricCard = ({ value, label, description }) => (
  <div className="bg-[#0A0A0B] border border-white/[0.08] rounded-xl p-6 text-center">
    <div className="text-3xl font-bold text-white mb-1">{value}</div>
    <div className="text-sm font-medium text-blue-400 mb-2">{label}</div>
    {description && <p className="text-xs text-zinc-500">{description}</p>}
  </div>
);

// Code block with syntax highlighting (rehype-highlight provides this)
const CodeBlock = ({ className, children, ...props }) => {
  const isInline = !className;

  if (isInline) {
    return (
      <code
        className="px-1.5 py-0.5 rounded bg-white/[0.08] text-blue-300 text-sm font-mono"
        {...props}
      >
        {children}
      </code>
    );
  }

  return (
    <code
      className={`${className} block overflow-x-auto`}
      {...props}
    >
      {children}
    </code>
  );
};

// Pre block wrapper for code blocks
const Pre = ({ children, ...props }) => (
  <pre
    className="bg-[#0A0A0B] border border-white/[0.08] rounded-xl p-4 overflow-x-auto my-6 text-sm"
    {...props}
  >
    {children}
  </pre>
);

// MDX component mappings
const MDXComponents = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),

  p: (props) => <p className="text-zinc-300 leading-relaxed mb-4" {...props} />,

  a: ({ href, children, ...props }) => {
    const isExternal = href?.startsWith('http');
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        to={href}
        className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
        {...props}
      >
        {children}
      </Link>
    );
  },

  ul: (props) => <ul className="list-disc list-inside text-zinc-300 mb-4 space-y-2 ml-4" {...props} />,
  ol: (props) => <ol className="list-decimal list-inside text-zinc-300 mb-4 space-y-2 ml-4" {...props} />,
  li: (props) => <li className="text-zinc-300" {...props} />,

  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-blue-500/50 pl-6 py-2 my-6 text-zinc-400 italic"
      {...props}
    />
  ),

  hr: () => <hr className="border-white/[0.08] my-8" />,

  img: ({ src, alt, ...props }) => (
    <figure className="my-6">
      <img
        src={src}
        alt={alt}
        className="rounded-xl border border-white/[0.08] w-full"
        loading="lazy"
        {...props}
      />
      {alt && (
        <figcaption className="text-center text-sm text-zinc-500 mt-2">
          {alt}
        </figcaption>
      )}
    </figure>
  ),

  table: (props) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse" {...props} />
    </div>
  ),
  thead: (props) => <thead className="bg-white/[0.05]" {...props} />,
  tbody: (props) => <tbody {...props} />,
  tr: (props) => <tr className="border-b border-white/[0.08]" {...props} />,
  th: (props) => <th className="px-4 py-3 text-left text-sm font-semibold text-white" {...props} />,
  td: (props) => <td className="px-4 py-3 text-sm text-zinc-300" {...props} />,

  code: CodeBlock,
  pre: Pre,

  // Custom components
  Callout,
  MetricCard,
  QuickAnswer,

  // Wrapper for metric cards grid
  MetricGrid: ({ children }) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
      {children}
    </div>
  )
};

export default MDXComponents;
