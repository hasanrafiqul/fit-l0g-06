const Loading = () => {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-[#0d0f12]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#292d35] border-t-lime-400" />

        <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
          Loading workouts...
        </p>
      </div>
    </main>
  );
};

export default Loading;