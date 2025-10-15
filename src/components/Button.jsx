import React from 'react';
import { colors } from '../utils/colors';

const Button = ({
  children,
  variant = 'default',
  size = 'default',
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) => {
  // Base styles - clean shadcn approach
  const baseStyles = `
    inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium
    ring-offset-background transition-colors
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
    disabled:pointer-events-none disabled:opacity-50
  `;

  // Size variations - shadcn standard sizes
  const sizeStyles = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8',
    icon: 'h-10 w-10'
  };

  // Variant styles - clean shadcn approach with proper Tailwind classes
  const getVariantStyles = () => {
    switch (variant) {
      case 'default':
        return `
          bg-slate-900 text-slate-50 
          hover:bg-slate-900/90
          shadow-sm
        `;
      
      case 'destructive':
        return `
          bg-red-500 text-white 
          hover:bg-red-600
          shadow-sm
        `;
      
      case 'outline':
        return `
          border border-slate-200 bg-white text-slate-900
          hover:bg-slate-100 hover:text-slate-900
          shadow-sm
        `;
      
      case 'secondary':
        return `
          bg-slate-100 text-slate-900
          hover:bg-slate-200
        `;
      
      case 'ghost':
        return `
          text-slate-900
          hover:bg-slate-100 hover:text-slate-900
        `;
      
      case 'link':
        return `
          text-slate-900 underline-offset-4 
          hover:underline
        `;

      // Custom variants using your color system
      case 'gradient':
        return `
          bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0
          hover:from-blue-700 hover:to-purple-700
          shadow-md hover:shadow-lg
          transition-all duration-200
        `;

      case 'gradient-outline':
        return `
          bg-transparent text-white border-0 relative overflow-hidden
        `;

      case 'white':
        return `
          bg-white text-slate-900 border border-slate-200
          hover:bg-slate-50 hover:border-slate-300
          shadow-sm hover:shadow-md
          transition-all duration-200
        `;

      case 'black':
        return `
          bg-slate-900 text-white border border-slate-900
          hover:bg-slate-800
          shadow-sm hover:shadow-md
          transition-all duration-200
        `;
      
      default:
        return `
          bg-slate-900 text-slate-50 
          hover:bg-slate-900/90
          shadow-sm
        `;
    }
  };

  const buttonStyles = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${getVariantStyles()}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  // Special handling for gradient outlined variant
  if (variant === 'gradient-outline') {
    return (
      <div className="relative inline-flex">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md p-[1px] hover:from-blue-700 hover:to-purple-700 transition-colors">
          <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`
              ${baseStyles}
              ${sizeStyles[size]}
              bg-gray-900 text-white w-full h-full rounded-[calc(0.375rem-1px)]
              hover:bg-gray-800
              ${className}
            `.replace(/\s+/g, ' ').trim()}
            {...props}
          >
            {children}
          </button>
        </div>
      </div>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={buttonStyles}
      {...props}
    >
      {children}
    </button>
  );
};

// Example usage component for testing/documentation
export const ButtonShowcase = () => {
  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      {/* Default shadcn variants */}
      <section>
        <h2 className="text-2xl font-bold mb-4">shadcn/ui Style Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </section>

      {/* Custom variants */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Custom Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="gradient">Gradient</Button>
          <Button variant="white">White</Button>
          <Button variant="black">Black</Button>
        </div>
      </section>

      {/* Gradient outlined on dark background */}
      <section className="bg-gray-900 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">Gradient Outline</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="gradient-outline">Gradient Outlined</Button>
          <Button variant="ghost" className="text-white hover:bg-white/10">Ghost White</Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">White Outlined</Button>
        </div>
      </section>

      {/* Size variations */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Size Variations</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button size="sm" variant="default">Small</Button>
          <Button size="default" variant="default">Default</Button>
          <Button size="lg" variant="default">Large</Button>
          <Button size="icon" variant="outline">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </Button>
        </div>
      </section>

      {/* Interactive states */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Interactive States</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="gradient" onClick={() => alert('Clicked!')}>
            Click Me
          </Button>
          <Button variant="gradient-outline" onClick={() => alert('Gradient outline clicked!')}>
            Gradient Magic
          </Button>
          <Button variant="default" disabled>Disabled</Button>
        </div>
      </section>
    </div>
  );
};

export default Button;
