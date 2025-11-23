import React from 'react';

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
  // Base styles using CSS variables for professional dark theme
  const baseStyles = `
    inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium
    transition-all duration-300 ease-in-out
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
    disabled:pointer-events-none disabled:opacity-50
    cursor-pointer
  `;

  // Size variations with professional spacing
  const sizeStyles = {
    sm: 'h-9 px-4 py-2 text-sm',
    md: 'h-10 px-6 py-2.5 text-sm',
    lg: 'h-12 px-8 py-3 text-base',
    xl: 'h-14 px-10 py-4 text-lg',
    icon: 'h-10 w-10 p-0'
  };

  // Get variant styles using CSS variables
  const getVariantStyles = () => {
    switch (variant) {
      case 'default':
        return `
          bg-primary text-primary-foreground 
          hover:bg-primary/90 hover:shadow-lg
          shadow-md
          border border-primary/20
        `;
      
      case 'secondary':
        return `
          bg-secondary text-secondary-foreground
          hover:bg-secondary/80 hover:shadow-md
          border border-border
        `;
      
      case 'outline':
        return `
          border border-border bg-transparent text-foreground
          hover:bg-accent hover:text-accent-foreground
          shadow-sm hover:shadow-md
        `;
      
      case 'ghost':
        return `
          text-foreground bg-transparent
          hover:bg-accent hover:text-accent-foreground
        `;
      
      case 'link':
        return `
          text-primary underline-offset-4 bg-transparent
          hover:underline hover:text-primary/80
          shadow-none
        `;

      case 'destructive':
        return `
          bg-destructive text-destructive-foreground 
          hover:bg-destructive/90 hover:shadow-lg
          shadow-md
          border border-destructive/20
        `;

      case 'gradient':
        return `
          bg-gradient-to-r from-primary to-accent text-primary-foreground
          hover:from-primary/90 hover:to-accent/90 hover:shadow-xl
          shadow-lg border border-primary/30
          hover:scale-[1.02] active:scale-[0.98]
        `;

      case 'gradient-outline':
        return `
          bg-gradient-to-r from-primary/10 to-accent/10 text-primary
          border-2 border-transparent bg-clip-padding
          hover:from-primary/20 hover:to-accent/20 hover:shadow-lg
          relative before:absolute before:inset-0 before:-z-10 before:rounded-lg
          before:bg-gradient-to-r before:from-primary before:to-accent before:p-[2px]
          before:content-[''] before:opacity-60 hover:before:opacity-100
        `;

      case 'card':
        return `
          bg-card text-card-foreground border border-border
          hover:bg-card/80 hover:shadow-lg hover:border-border/60
          shadow-sm
        `;

      case 'muted':
        return `
          bg-muted text-muted-foreground
          hover:bg-muted/80 hover:text-foreground
          shadow-sm
        `;
      
      default:
        return `
          bg-primary text-primary-foreground 
          hover:bg-primary/90 hover:shadow-lg
          shadow-md
        `;
    }
  };

  const buttonStyles = `
    ${baseStyles}
    ${sizeStyles[size] || sizeStyles.md}
    ${getVariantStyles()}
    ${className}
  `.replace(/\s+/g, ' ').trim();

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

// Professional button showcase for testing
export const ButtonShowcase = () => {
  return (
    <div className="p-8 space-y-12 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Primary Actions */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Primary Actions</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default" size="md">Get Started</Button>
            <Button variant="gradient" size="md">Book a Demo</Button>
            <Button variant="outline" size="md">Learn More</Button>
            <Button variant="ghost" size="md">Contact Sales</Button>
          </div>
        </section>

        {/* Secondary Actions */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Secondary Actions</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="secondary" size="md">Save Draft</Button>
            <Button variant="card" size="md">View Details</Button>
            <Button variant="muted" size="md">Cancel</Button>
            <Button variant="link" size="md">Skip for Now</Button>
          </div>
        </section>

        {/* Size Variations */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Size Variations</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button size="sm" variant="default">Small</Button>
            <Button size="md" variant="default">Medium</Button>
            <Button size="lg" variant="default">Large</Button>
            <Button size="xl" variant="default">Extra Large</Button>
            <Button size="icon" variant="outline">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </Button>
          </div>
        </section>

        {/* Gradient Variants */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Gradient Effects</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="gradient" size="lg">Gradient Button</Button>
            <Button variant="gradient-outline" size="lg">Gradient Outline</Button>
          </div>
        </section>

        {/* States */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Interactive States</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default" onClick={() => alert('Clicked!')}>
              Click Me
            </Button>
            <Button variant="destructive">Delete Item</Button>
            <Button variant="default" disabled>Disabled State</Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Button;
