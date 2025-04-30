export default function SavingsCard({
  annual,
  monthly,
}: {
  annual: number;
  monthly: number;
}) {
  return (
    <div className="bg-indigo-100 rounded-lg p-6 shadow-sm text-center">
      <p className="text-sm font-medium text-indigo-600 mb-1">
        Est. Annual Savings
      </p>
      <p className="text-2xl font-bold text-indigo-700">
        ${annual.toLocaleString()}
      </p>
      <p className="text-xs text-indigo-600 mt-1">
        (${monthly.toFixed(0)} / month)
      </p>
    </div>
  );
}
