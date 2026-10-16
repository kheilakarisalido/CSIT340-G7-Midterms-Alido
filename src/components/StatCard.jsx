StatCard({ followers })
	return (
		<div className="w-48 rounded-xl bg-[#FAF3E1] py-4 text-center">
			<p className="text-4xl font-bold text-[#FA8112]">{followers}</p>
			<p className="mt-1 text-lg">Followers</p>
		</div>
	);

StatCard({ rate })
    return (
 <div className="w-48 rounded-xl bg-[#FAF3E1] py-4 text-center">
              <p className="text-4xl font-bold text-[#FA8112]">{rate}</p>
              <p className="mt-1 text-lg">PHP per hour</p>
            </div>
    );

export default function StatCard({ followers, rate }) {
  return (
    <div className="flex gap-6">
      <StatCard followers={followers} />
      <StatCard rate={rate} />
    </div>
  );
}
