export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-bg-surface py-20 px-4">
      <div className="relative w-16 h-16 mb-4">
        <div className="absolute inset-0 rounded-full border-4 border-primary-100" />
        <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin" />
      </div>
      <div className="text-sm font-semibold text-text">Loading Kreeta Nursing Service...</div>
      <p className="text-xs text-text-muted mt-1">Bringing trusted healthcare to your doorstep</p>
    </div>
  );
}
